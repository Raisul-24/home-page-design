import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Discovery = () => {
   const sliderRef = useRef(null);
   const [currentSlide, setCurrentSlide] = useState(0);
   const cardData = [
      {
         id: 1,
         image: '/discovery/1.png',
         title: 'takkie & siepie',
         description:
            'laat de magie van de feestdagen tot leven komen met onze iconische vrienden Takkie en Siepie!',
         bgColor: 'bg-green-600',
      },
      {
         id: 2,
         image: '/discovery/2.png',
         title: 'sinterklaas',
         description:
            'ontdek ons assortiment en vind de leukste sinterklaasspullen',
         bgColor: 'bg-pink-600',
      },
      {
         id: 3,
         image: '/discovery/3.png',
         title: 'de voorpret begint',
         description: 'ontdek onze nieuwste kerstartikelen',
         bgColor: 'bg-yellow-700',
      },
      {
         id: 4,
         image: '/discovery/4.png',
         title: 'chocolate letters at HEMA',
         description: 'very honest',
         bgColor: 'bg-green-600',
      },
   ];

   const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      afterChange: (index) => setCurrentSlide(index),
      responsive: [
         { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
         { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
         { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
   };

   const nextSlide = () => {
      sliderRef.current.slickNext();
   };

   const prevSlide = () => {
      sliderRef.current.slickPrev();
   };

   const isLastSlide = currentSlide >= cardData.length - settings.slidesToScroll;
   return (
      <div className="mx-auto my-10">
         <h2 className="font-bold text-black text-2xl md:text-3xl my-5 pl-2">get ready for the holidays</h2>
         <div className="relative">
            <Slider ref={sliderRef} {...settings}>
               {cardData.map((card) => (
                  <div
                     key={card.id}
                     className="overflow-hidden flex flex-col group w-96 px-4">
                     <img
                        src={card.image}
                        alt={card.title}
                        className=" h-96 object-cover rounded-t-xl"
                     />
                     <div className={`px-5 mr-10 py-3 w-full flex-1 rounded-b-xl ${card.bgColor}`}>
                        <h3 className="text-xl font-semibold text-white">
                           {card.title}
                        </h3>
                        <p className="text-white text-sm mt-2 h-24">
                           {card.description}
                        </p>

                        <button
                           className="mb-5 w-14 h-14 flex items-center justify-center rounded-full border-2 border-white 
                      text-white bg-transparent transition duration-300 
                      group-hover:bg-white group-hover:text-black"
                        >
                           <FaArrowRight />
                        </button>
                     </div>
                  </div>

               ))}
            </Slider>
            {currentSlide > 0 && (
               <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black text-xl rounded-full p-3 md:p-5 shadow-xl z-10 border-2"
               >
                  <FaArrowLeft />
               </button>
            )}
            {!isLastSlide && (
               <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black text-xl rounded-full p-3 md:p-5 shadow-xl z-10 border-2"
               >
                  <FaArrowRight />
               </button>
            )}
         </div>
      </div>
   );
};

export default Discovery;