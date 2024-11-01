import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTiktok, FaYoutube, FaSnapchat, FaTwitter, FaWhatsapp, FaIdeal, FaCcVisa, FaCcAmex, FaCcAmazonPay, FaPaypal, FaCcMastercard } from 'react-icons/fa';

const Footer1 = () => {
  return (
    <footer className=" bg-violet-700 text-white">
      <div className="mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8 py-14">
        <div>
          <h3 className="font-bold text-xl mb-4">need help?</h3>
          <ul className="space-y-2">
            <li><a href="#" className=" underline hover:no-underline hover:text-emerald-600">my order</a></li>
            <li><a href="#" className="underline hover:no-underline hover:text-emerald-600">delivery or pick up</a></li>
            <li><a href="#" className="underline hover:no-underline hover:text-emerald-600">exchange and return</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">other question?</h3>
          <a href="#" className="text-lg">go to 
          <span className='underline hover:no-underline hover:text-emerald-600'> our customer service</span></a>
        </div>
        <div>
         <div className="flex items-center mb-4">
            <FaLocationDot></FaLocationDot>
          <h3 className="font-bold text-xl ml-2">find a store</h3>
         </div>
          <p>find a store near you</p>
          <div className="mt-2 flex">
            <input
              type='text'
              placeholder="enter zip code or city"
              className="p-3 rounded-l-md border-none outline-none w-full text-black bg-white"
            />
            <button className="p-3 bg-white text-purple-500 rounded-r-md">
              🔍
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white text-black md:py-12">
        <div className="mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-bold text-lg mb-4">follow HEMA</h3>
            <div className="flex space-x-4">
              <FaFacebookSquare className="w-6 h-6 text-blue-400" />
              <FaTwitter className="w-6 h-6" />
              <FaWhatsapp className="w-6 h-6 text-green-400" />
              <FaInstagram className="w-6 h-6 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
              <FaSnapchat className="w-6 h-6 text-yellow-200" />
              <FaPinterest className="w-6 h-6 text-red-600" />
              <FaTiktok className="w-6 h-6 text-black" />
              <FaYoutube className="w-6 h-6 text-red-500" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">easy payment*</h3>
            <div className="flex space-x-4">
              <FaIdeal className="w-10 h-10 text-orange-600" />
              <FaCcVisa className="w-10 h-10 text-blue-500" />
              <FaCcMastercard className="w-10 h-10 " />
              <FaCcAmex className="w-10 h-10 text-blue-900" />
              <FaPaypal className="w-10 h-10 text-blue-400" />
              <FaCcAmazonPay className="w-10 h-10" />

            </div>
            <p className="mt-2 text-sm">*depending on the delivery options chosen</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">always up to date with our promotions</h3>
            <p className="mb-2">
              Subscribe to the HEMA newsletter. The latest (online) offers several times a week. Get 10% discount immediately after signing up. You can always unsubscribe.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="email address*"
                className="p-2 rounded-md border w-full outline-none mr-2 bg-white"
              />
              <button className="p-2 bg-teal-600 text-white rounded-md min-w-28">
                to register
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
