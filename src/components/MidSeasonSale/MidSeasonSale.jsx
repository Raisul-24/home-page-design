import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: '/sale/1.jpg',
    title: "Women's trousers Eren beige",
    originalPrice: 30.0,
    discountPrice: 21.0,
    isNew: false,
    isDiscount: true,
  },
  {
    id: 2,
    image: '/sale/2.jpg',
    title: 'Ladies lounge pants velvet black',
    originalPrice: 17.99,
    discountPrice: 11.99,
    isNew: false,
    isDiscount: true,
  },
  {
    id: 3,
    image: '/sale/3.jpg',
    title: 'Washi tapes hearts - 3 pieces',
    originalPrice: 2.99,
    discountPrice: 2.5,
    isNew: true,
    isDiscount: true,
  },
  {
    id: 4,
    image: '/sale/4.jpg',
    title: 'Folding crate letter board recycled XS bright pink',
    originalPrice: 3.59,
    discountPrice: 2.0,
    isNew: false,
    isDiscount: true,
  },
  {
   id: 5,
   image: '/sale/5.jpg',
   title: 'Newborn jumpsuit elephants',
   originalPrice: 10.0,
   discountPrice: 5.0,
   isNew: false,
   isDiscount: true,
 },
 {
   id: 6,
   image: '/sale/6.jpg',
   title: 'LED ribbed candle with wax Ø7.5x10 dark pink',
   originalPrice: 5.99,
   discountPrice: 4.0,
   isNew: false,
   isDiscount: true,
 },
 {
   id: 7,
   image: '/sale/8.jpg',
   title: 'Ladies wrap dress Raiza with linen',
   originalPrice: 40.0,
   discountPrice: 20.0,
   isNew: false,
   isDiscount: true,
 },
];

const MidSeasonSale = () => {
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

   const isLastSlide = currentSlide >= products.length - settings.slidesToScroll;

  return (
    <div className="mx-auto mb-32">
      <div className="absolute  bg-red-600 text-white px-6 h-60 w-full rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center pt-10">
        <h2 className="text-3xl font-bold">Mid Season Sale</h2>
        <div className="flex items-center">
        <Link to='/' className="text-sm font-medium hover:underline mr-1">View all sales</Link>
        <FaArrowRight></FaArrowRight>
        </div>
        </div>
      </div>

      <div className="relative top-24 bg-transparent p-6 rounded-b-lg">
            <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div className="p-4">
            <div key={product.id} className=" bg-white rounded-lg shadow-md text-left">
            
            <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-80 h-96 object-cover rounded-lg mb-4 hover:scale-105"
            />
            <div className="absolute top-2 right-4 p-2 rounded-full bg-white">
            <FaRegHeart className='text-xl hover:text-red-600 hover:scale-125' />
            </div>
            {product.isDiscount && (
              <span className="absolute bottom-4 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-r-lg">discount</span>
            )}
            {product.isNew && (
              <span className="absolute bottom-11 left-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-r-lg">new</span>
            )}
            </div>
            <p className="text-xs text-gray-800 h-8 px-3">{product.title}</p>
            
            <div className="flex items-center justify-between  p-3">
            <div className="text-left gap-2">
              {product.isDiscount && (
                <p className="line-through text-gray-500 text-xs">{product.originalPrice}.-</p>
              )}
              <p className="text-red-600 text-3xl font-extrabold">{product.discountPrice}.-</p>
            </div>
            <div className="text-xl bg-yellow-500 rounded-full p-3 hover:bg-yellow-700">
            <FaCartFlatbedSuitcase />
            </div>
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

export default MidSeasonSale;
