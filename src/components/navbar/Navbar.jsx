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

   const toggleDrawer = (open) => {
      setIsDrawerOpen(open);
   };

   return (
      <div>
         <div className="navbar bg-base-100 items-center">
            <div className="navbar-start">
               <img src="/logo.svg" className="mr-4" alt="logo" />
               <div className="relative hidden lg:flex">
                  <button
                     className="flex items-center btn btn-ghost drawer-button"
                     onMouseEnter={() => toggleDrawer(true)}
                  >
                     <MdMenu className="mr-2 text-2xl" />
                     <p className="hidden lg:flex">Categories</p>
                     {isDrawerOpen ? (
                        <IoIosArrowUp className="ml-1 hidden md:flex" />
                     ) : (
                        <IoIosArrowDown className="ml-1 hidden md:flex" />
                     )}
                  </button>
               </div>
            </div>

            {/* Search bar */}
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

            <div className="navbar-end">
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
               <div className="relative flex lg:hidden">
                  <button
                     className="flex items-center btn btn-ghost drawer-button"
                     onMouseEnter={() => toggleDrawer(true)}
                  >
                     <MdMenu className="mr-2 text-2xl" />
                  </button>
               </div>
            </div>
         </div>

         <div className="flex md:hidden">
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
         {/* DrawerNavbar Component */}
         {isDrawerOpen && (
            <DrawerNavbar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
         )}
      </div>
   );
};

export default Navbar;