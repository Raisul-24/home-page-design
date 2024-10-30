import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const NiceExtra = () => {
   const sliderRef = useRef(null);
   const [currentSlide, setCurrentSlide] = useState(0);
   const rewards = [
      {
         points: 150,
         title: "Gratis limited edition tompouce geurkaars",
         image: "/public/niceExtra/1.webp",
         description: "Limited edition scented candle",
      },
      {
         points: 150,
         title: "5 Euro korting bij Jumbo winkel",
         image: "/public/niceExtra/2.webp",
         description: "5 Euro discount on purchases over 25 Euros",
      },
      {
         points: 100,
         title: "2.50 korting",
         image: "/public/niceExtra/3.webp",
         description: "2.50 Euro discount on purchases over 15 Euros",
      },
      {
         points: 75,
         title: "10% korting",
         image: "/public/niceExtra/4.webp",
         description: "10% discount on one product",
      },
      {
         points: 50,
         title: "Gratis pak wattenschijfjes",
         image: "/public/niceExtra/5.jpg",
         description: "Free pack of cotton pads",
      },
      {
         points: 250,
         title: "5 Euro korting",
         image: "/public/niceExtra/6.webp",
         description: "5 Euro discount",
      },
      {
         points: 300,
         title: "10 Euro korting bij Jumbo winkel",
         image: "/public/niceExtra/7.webp",
         description: "10 Euro discount on purchases over 50 Euros",
      },
      {
         points: 100,
         title: "Gratis grote herbruikbare shopper",
         image: "/public/niceExtra/8.jpg",
         description: "Free reusable shopper bag",
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

   const isLastSlide = currentSlide >= rewards.length - settings.slidesToScroll;

   return (
      <div className="mx-auto">
         <h2 className="text-2xl font-semibold">Spaar voor leuke extra's</h2>
         <p className="my-2">Wissel je punten in voor gratis producten</p>
         <div className="relative">
         <Slider ref={sliderRef} {...settings}>
  {rewards.map((reward, index) => (
    <div key={index} className="bg-white rounded-lg p-5 mb-2 relative">
      <div className="bg-orange-50 p-4 rounded-xl">
        <div className="relative">
          <img
            src={reward.image}
            alt={reward.title}
            className="w-80 h-96 rounded-lg mb-2 hover:scale-105"
          />
          {/* Heart-shaped div for reward points */}
          <div className="absolute top-2 left-4 w-10 h-10 flex justify-center items-center text-white font-bold">
            <div className="relative w-10 h-10 bg-red-500 rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-none transform rotate-45">
              <div className="absolute inset-0 flex justify-center items-center transform -rotate-45">
                {reward.points}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 bg-red-500 text-white p-1 rounded-lg">
            <p className="text-xs text-white">
              HEMA <br />
              pas
            </p>
          </div>
        </div>
      </div>
      <div className="font-semibold px-2 mt-2">{reward.description}</div>
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

export default NiceExtra;
