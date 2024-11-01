import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const promos = [
   {
      discount: "35% korting",
      img: "/crazy/1.jpg",
      title: "(led)candles",
      subtitle: "weekend promotion until sunday",
   },
   {
      discount: "40% korting",
      img: "/crazy/2.jpg",
      title: "Malmö, Napoli and Lyon pans",
      subtitle: "weekend promotion until sunday",
   },
   {
      discount: "30% korting",
      img: "/crazy/3.jpg",
      title: "bath textiles",
      subtitle: "in 14 colours",
   },
   {
      discount: "1+1 gratis",
      img: "/crazy/4.jpg",
      title: "thermal underwear",
      subtitle: "all combinations are possible",
   },
   {
      discount: "1+1 gratis",
      img: "/crazy/5.jpg",
      title: "ladies basic t-shirts",
      subtitle: "all combinations are possible",
    },
    {
      discount: "3 voor 24,99",
      img: "/crazy/6.jpg",
      title: "coffee beans 1 kg",
      subtitle: "all combinations are possible",
    },
    {
      discount: "3 voor 9,99",
      img: "/crazy/7.jpg",
      title: "ladies shirt",
      subtitle: "all combinations are possible",
    },
    {
      discount: "30% korting",
      img: "/crazy/8.jpg",
      title: "women's turtlenecks",
      subtitle: "various colours, S to XL",
    },
    {
      discount: "30% korting",
      img: "/crazy/9.jpg",
      title: "men's knitted fashion",
      subtitle: "various types, M to XXL",
    },
    {
      discount: "30% korting",
      img: "/crazy/10.jpg",
      title: "electrical household appliances HEMA",
      subtitle: "various types",
    },
    {
      discount: "3 voor 8.99",
      img: "/crazy/11.jpg",
      title: "temp tech tights 40 and 60 denier",
      subtitle: "all combinations are possible",
    },
];
const HemaCrazy = () => {
   const sliderRef = useRef(null);
   const [currentSlide, setCurrentSlide] = useState(0);
   const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
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
   const isLastSlide = currentSlide >= promos.length - settings.slidesToScroll;

   return (
      <div className="mx-auto mb-72 mt-10">
         <div className="absolute  bg-gray-100 text-black px-6 min-h-96 w-full rounded-lg">
            <div className="flex flex-col-reverse md:flex-row justify-around items-center pt-5 mx-auto">
               <div ><h2 className='text-3xl md:text-4xl font-extrabold'>HEMA draait door</h2>
                  <p className='my-1 md:my-4'>HEMA draait door</p>
                  <button className="border-2 border-black rounded-lg py-1 md:py-2 font-semibold hover:bg-black hover:text-white w-64 md:w-72 lg:w-96">shop now</button>
               </div>
               <img src="/crazy/crazy.png" className=' md:w-72 lg:w-96 md:h-48 lg:h-64' alt="" srcset="" />
            </div>
         </div>

         <div className="relative top-64 bg-transparent p-6 rounded-b-lg">
            <Slider ref={sliderRef} {...settings}>
               {promos.map((promo, index) => (
                  <div className="p-2">
                     <div key={index} className="relative bg-white shadow-lg overflow-hidden rounded-xl">
                        <div className="relative">
                           <img src={promo.img} alt={promo.title} className="w-full h-80 hover:scale-110 rounded-xl" />

                           <div className={`absolute top-4 left-4 p-2 w-16 bg-red-600 text-white font-semibold`}>
                              {promo.discount}
                           </div>
                        </div>
                        <div className="p-4 my-5 text-sm h-20">
                           <h3 className="font-semibold">{promo.title}</h3>
                           <p className="text-gray-600">{promo.subtitle}</p>
                        </div>
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

export default HemaCrazy;
