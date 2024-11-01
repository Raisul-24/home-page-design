import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { GiSelfLove } from "react-icons/gi";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { FaTimes } from "react-icons/fa"; // Import the close icon

const categories = [
   { id: 1, title: 'Sunta claus', image: '/banner1/1.webp' },
   { id: 2, title: 'baby', image: '/banner1/2.webp' },
   { id: 3, title: 'kind', image: '/banner1/3.webp' },
   { id: 4, title: 'dames', image: '/banner1/4.webp' },
   { id: 5, title: 'Gantlemen', image: '/banner1/5.webp' },
   { id: 6, title: 'living and sleeping', image: '/banner1/6.webp' },
   { id: 7, title: 'cake, food and drinks', image: '/banner1/7.webp' },
   { id: 8, title: 'new', image: '/banner1/17.webp' },
   { id: 9, title: 'leisure and oofice', image: '/banner1/9.webp' },
   { id: 10, title: 'feest en cadeau', image: '/banner1/17.webp' },
   { id: 11, title: 'cooking and dining', image: '/banner1/11.webp' },
   { id: 12, title: 'party and gift', image: '/banner1/12.webp' },
   { id: 13, title: 'toys', image: '/banner1/13.webp' },
   { id: 14, title: 'beautiful and healthy', image: '/banner1/14.webp' },
   { id: 15, title: 'photo and service', image: '/banner1/15.webp' },
   { id: 16, title: 'Offers and sales', image: '/banner1/16.webp' },
];

const DrawerNavbar = ({ isDrawerOpen, toggleDrawer }) => {
   return (
      <div className={`fixed inset-0 z-50 bg-white ${isDrawerOpen ? 'animate-slide-down' : ''}`}
         onMouseLeave={() => toggleDrawer(false)}
      >
         <div className="fixed inset-0 bg-black bg-opacity-30"
            onClick={() => toggleDrawer(false)}
         ></div>

         <div className="relative p-2 md:p-6">
            <button 
               className="absolute top-4 md:top-6 right-4 md:right-7 text-gray-500 text-2xl"
               onClick={() => toggleDrawer(false)}
            >
               <FaTimes />
            </button>

            <div className="navbar bg-white items-center">
               <div className="navbar-start">
                  <img src="/logo.svg" className="mr-4" alt="logo" />
                  <p className="hidden md:flex text-xl">Categories</p>
                  {isDrawerOpen ? (
                     <IoIosArrowUp className="ml-1 hidden md:flex" />
                  ) : (
                     <IoIosArrowDown className="ml-1 hidden md:flex" />
                  )}
               </div>

               {/* Search bar in Drawer */}
               <div className="hidden md:flex navbar-center">
                  <div className="relative w-full max-w-lg mx-auto">
                     <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full h-12 pl-5 pr-12 text-gray-700 bg-gray-200 rounded-full focus:outline-none"
                     />
                     <button className="absolute top-1/2 right-4 transform -translate-y-1/2">
                        <FaSearch className="text-gray-500 text-xl" />
                     </button>
                  </div>
               </div>

               <div className="navbar-end text-black">
                  <Link className="btn btn-ghost btn-square md:min-w-20">
                     <div className="flex items-center">
                        <GrUserManager className="text-2xl mr-2" />
                        <p className="hidden md:flex">Log In</p>
                     </div>
                  </Link>
                  <Link className="btn btn-ghost btn-square">
                     <GiSelfLove className="text-2xl font-medium" />
                  </Link>
                  <Link className="btn btn-ghost btn-square">
                     <FaCartFlatbedSuitcase className="text-2xl" />
                  </Link>
               </div>
            </div>

            {/* Additional Drawer Items */}
            <ul className="menu bg-white p-6 border-t-2">
               <h2 className='font-bold pb-3 border-b-2'>categories</h2>
               {
                  categories.map((category) => (
                     <div key={category.id} className="flex items-center space-x-2 border p-2 w-64 hover:bg-slate-100 border-r-2">
                        <img src={category.image} alt={category.title} className='w-10 h-10 rounded-full' />
                        <NavLink>{category.title}</NavLink>
                     </div>
                  ))
               }
            </ul>
         </div>
      </div>
   );
};

export default DrawerNavbar;
