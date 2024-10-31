import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PhotoService = () => {
   const sliderRef = useRef(null);
   const [currentSlide, setCurrentSlide] = useState(0);
   const offers = [
      {
        title: 'Wall Decoration', image: '/public/photoService/1.webp',
      },
      {
        title: 'Photo Gifts', image: '/public/photoService/2.png',
      },
      {
        title: 'Photo Books', image: '/public/photoService/3.webp',
      },
      {
        title: 'Print Photos', image: '/public/photoService/4.webp',
      },
    ];

   const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
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

   const isLastSlide = currentSlide >= offers.length - settings.slidesToScroll;

   return (
      <div className="mx-auto my-10">
         <div className="flex justify-between items-center my-4">
            <div>
            <h2 className="text-2xl font-bold">offers at HEMA photo service</h2>
            </div>
            <div className='text-lg gap-1 flex items-center'>
               <Link className='hover:underline'>view all</Link>
               <FaArrowRight></FaArrowRight>
            </div>
         </div>
         <div className="relative">
            <Slider ref={sliderRef} {...settings}>
               {offers.map((offer, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 mb-2 relative">
                     <div className="rounded-xl">
                        <div className="relative">
                           <img
                              src={offer.image}
                              alt={offer.title}
                              className="w-80 h-96 rounded-lg mb-2 hover:scale-105"
                           />
                           <div className="absolute top-4 left-4 bg-red-500 text-white p-2">
                              <p className="text-xl font-extrabold text-white">
                                 30 % <br />
                                 Korting
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="font-semibold px-2 mt-5">{offer.title}</div>
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

export default PhotoService;