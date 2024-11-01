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
      { title: 'Wall Decoration', image: '/photoService/1.png' },
      { title: 'Photo Gifts', image: '/photoService/2.png' },
      { title: 'Photo Books', image: '/photoService/3.png' },
      { title: 'Print Photos', image: '/photoService/4.webp' },
      { title: 'HEMA Photo Service Overview', image: '', isOverview: true },
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
         <div className="flex flex-col md:flex-row justify-between items-center my-4">
            <div>
               <h2 className="text-2xl font-bold pl-2">Offers at HEMA Photo Service</h2>
            </div>
            <div className='text-lg gap-1 flex items-center'>
               <Link to="/overview" className='hover:underline'>View All</Link>
               <FaArrowRight />
            </div>
         </div>
         <div className="relative">
            <Slider ref={sliderRef} {...settings}>
               {offers.map((offer, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 mb-2 relative">
                     {offer.isOverview ? (
                        <div className="flex flex-col items-center justify-center h-96 rounded-xl p-4 text-center bg-gray-100">
                           <Link to="/overview" className="text-black hover:text-white p-4 rounded-full bg-white hover:bg-black border-2 border-black">
                               <FaArrowRight />
                           </Link>
                           <h3 className="mt-2">Everything from HEMA Photo Service</h3>
                           
                        </div>
                     ) : (
                        <div>
                           <div className="relative">
                              <img
                                 src={offer.image}
                                 alt={offer.title}
                                 className="w-80 h-96 rounded-lg mb-2 hover:scale-105 transition-transform duration-200"
                              />
                              <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded">
                                 <p className="text-xl font-extrabold text-white">
                                    30% <br />
                                    <span className='text-sm'>Korting</span>
                                 </p>
                              </div>
                           </div>
                           <div className="font-semibold px-2 mt-5">{offer.title}</div>
                        </div>
                     )}
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
