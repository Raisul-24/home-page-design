import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Banner1 = () => {
   const sliderRef = useRef(null);
   const [currentSlide, setCurrentSlide] = useState(0);
   const categories = [
      { id: 1, title: 'Sunta claus', image: '/banner1/1.webp' },
      { id: 2, title: 'baby', image: '/banner1/2.webp' },
      { id: 3, title: 'kind', image: '/banner1/3.webp' },
      { id: 4, title: 'dames', image: '/banner1/4.webp' },
      { id: 5, title: 'Gantlemen', image: '/banner1/5.webp' },
      { id: 6, title: 'living and sleeping', image: '/banner1/6.webp' },
      { id: 7, title: 'cake, food and drinks', image: '/banner1/7.webp' },
      { id: 8, title: 'new', image: '/banner1/17.webp' },
      { id: 9, title: 'leisure and office', image: '/banner1/9.webp' },
      { id: 10, title: 'feest en cadeau', image: '/banner1/17.webp' },
      { id: 11, title: 'cooking and dining', image: '/banner1/11.webp' },
      { id: 12, title: 'party and gift', image: '/banner1/12.webp' },
      { id: 13, title: 'toys', image: '/banner1/13.webp' },
      { id: 14, title: 'beautiful and healthy', image: '/banner1/14.webp' },
      { id: 15, title: 'photo and service', image: '/banner1/15.webp' },
      { id: 16, title: 'Offers and sales', image: '/banner1/16.webp' },
   ];

   const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 8,
      slidesToScroll: 8,
      arrows: false,
      afterChange: (index) => setCurrentSlide(index),
      responsive: [
         { breakpoint: 1024, settings: { slidesToShow: 6, slidesToScroll: 6 } }, 
         { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 3 } }, 
         { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        ],
   };

   const nextSlide = () => {
      sliderRef.current.slickNext();
   };

   const prevSlide = () => {
      sliderRef.current.slickPrev();
   };

   const isLastSlide = currentSlide >= categories.length - settings.slidesToScroll;

   return (
      <div className="mx-auto my-8">
         <div className="relative">
            <Slider ref={sliderRef} {...settings}>
               {categories.map((item, index) => (
                  <div key={index} className="card p-2">
                     <figure className="rounded-full">
                        <img
                           src={item.image}
                           alt={item.title}
                           className="rounded-full transition-transform transform hover:scale-125"
                        />
                     </figure>
                     <div className="pt-2 h-8 text-center px-3">
                        <h2 className="text-xs font-medium md:font-semibold">{item.title}</h2>
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

export default Banner1;
