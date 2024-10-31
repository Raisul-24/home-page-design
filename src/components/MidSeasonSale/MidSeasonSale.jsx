// MidSeasonSale.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Sample data
const products = [
  {
    id: 1,
    image: '/public/sale/1.jpg',
    title: "Women's trousers Eren beige",
    originalPrice: 30.0,
    discountPrice: 21.0,
    isNew: false,
    isDiscount: true,
  },
  {
    id: 2,
    image: '/public/sale/2.jpg',
    title: 'Ladies lounge pants velvet black',
    originalPrice: 17.99,
    discountPrice: 11.99,
    isNew: false,
    isDiscount: true,
  },
  {
    id: 3,
    image: '/public/sale/3.jpg',
    title: 'Washi tapes hearts - 3 pieces',
    originalPrice: 2.99,
    discountPrice: 2.5,
    isNew: true,
    isDiscount: true,
  },
  {
    id: 4,
    image: '/public/sale/4.jpg',
    title: 'Folding crate letter board recycled XS bright pink',
    originalPrice: 3.59,
    discountPrice: 2.0,
    isNew: false,
    isDiscount: true,
  },
];

const MidSeasonSale = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 mb-32">
      <div className="absolute  bg-red-600 text-white px-6 h-60 w-full rounded-lg">
        <div className="flex justify-between items-center pt-10">
        <h2 className="text-3xl font-bold">Mid Season Sale</h2>
        <div className="flex items-center">
        <Link to='/' className="text-sm font-medium hover:underline mr-1">View all sales</Link>
        <FaArrowRight></FaArrowRight>
        </div>
        </div>
      </div>

      <div className="relative top-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent p-6 rounded-b-lg">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white rounded-lg p-4 shadow-md text-center">
            {product.isDiscount && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">discount</span>
            )}
            {product.isNew && (
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">new</span>
            )}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-2 hover:scale-105"
            />
            <p className="font-semibold text-gray-800">{product.title}</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              {product.isDiscount && (
                <span className="line-through text-gray-500 text-sm">{product.originalPrice}.-</span>
              )}
              <span className="text-red-600 text-lg font-bold">{product.discountPrice}.-</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidSeasonSale;
