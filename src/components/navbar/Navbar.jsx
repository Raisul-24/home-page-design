import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import DrawerNavbar from './DrawerNavbar';

const Navbar = () => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

   const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
   };

   return (
      <div className="relative z-10">
         <div className="container mx-auto navbar items-center py-4">
            {/* Navbar Start */}
            <div className="navbar-start">
               <img src="/logo.svg" className="w-10 md:w-14 md:mr-4" alt="logo" />
               
               {/* Desktop Drawer Toggle */}
               <div className="relative hidden lg:flex">
                  <button
                     className="flex items-center btn btn-ghost"
                     onClick={toggleDrawer}
                  >
                     <MdMenu className="md:mr-2 text-2xl" />
                     <p className="hidden lg:flex">Categories</p>
                     {isDrawerOpen ? (
                        <IoIosArrowUp className="ml-1 hidden md:flex" />
                     ) : (
                        <IoIosArrowDown className="ml-1 hidden md:flex" />
                     )}
                  </button>
               </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex navbar-center">
               <div className="relative max-w-lg mx-auto">
                  <input
                     type="text"
                     placeholder="What are you looking for?"
                     className="w-full h-12 pl-5 pr-12 text-gray-700 bg-gray-100 rounded-full focus:outline-none"
                  />
                  <button className="absolute top-1/2 right-4 transform -translate-y-1/2">
                     <FaSearch className="text-gray-500 text-xl" />
                  </button>
               </div>
            </div>

            {/* Navbar End */}
            <div className="navbar-end text-black">
               <Link className="btn btn-ghost btn-square md:min-w-20">
                  <div className="flex items-center">
                     <GrUserManager className="text-xl md:text-2xl" />
                     <p className="hidden md:flex">Log In</p>
                  </div>
               </Link>
               <Link className="btn btn-ghost btn-square">
                  <GiSelfLove className="font-medium text-xl md:text-2xl" />
               </Link>
               <Link className="btn btn-ghost btn-square">
                  <FaCartFlatbedSuitcase className='text-xl md:text-2xl' />
               </Link>

               {/* Mobile Drawer Toggle */}
               <button
                  className="flex lg:hidden btn btn-ghost"
                  onClick={toggleDrawer}
               >
                  <MdMenu className="text-xl md:text-2xl" />
               </button>
            </div>
         </div>

         {/* Mobile Search Bar */}
         <div className="flex md:hidden px-4">
            <div className="relative max-w-lg mx-auto w-full">
               <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full h-12 pl-5 pr-12 text-gray-700 bg-gray-100 rounded-full focus:outline-none"
               />
               <button className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <FaSearch className="text-gray-500 text-xl" />
               </button>
            </div>
         </div>

         {/* Drawer Component */}
         {isDrawerOpen && (
            <DrawerNavbar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
         )}
      </div>
   );
};

export default Navbar;
