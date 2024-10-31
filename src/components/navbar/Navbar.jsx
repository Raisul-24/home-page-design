import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
               <div className="relative">
                  <button
                     className="flex items-center btn btn-ghost drawer-button"
                     onMouseEnter={() => toggleDrawer(true)}
                  >
                     <MdMenu className="mr-2 text-2xl" />
                     <p className="hidden md:flex">Categories</p>
                     {isDrawerOpen ? (
                        <IoIosArrowUp className="ml-1 hidden md:flex" />
                     ) : (
                        <IoIosArrowDown className="ml-1 hidden md:flex" />
                     )}
                  </button>
               </div>
            </div>

            <div className=" hidden md:flex navbar-center">
               <a className="btn btn-ghost text-xl">daisyUI</a>
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
            </div>
         </div>

         {isDrawerOpen && (
            <div
               className="fixed inset-0 z-50 bg-white animate-slide-down"
               onMouseLeave={() => toggleDrawer(false)}
            >
               <div 
                  className="fixed inset-0 bg-black bg-opacity-30" 
                  onClick={() => toggleDrawer(false)}
               ></div>

               <div className="relative p-6">
                  <div className="navbar bg-base-100 items-center">
                     <div className="navbar-start">
                        <img src="/logo.svg" className="mr-4" alt="logo" />
                        <p className="hidden md:flex text-xl">Categories</p>
                        {isDrawerOpen ? (
                        <IoIosArrowUp className="ml-1 hidden md:flex" />
                     ) : (
                        <IoIosArrowDown className="ml-1 hidden md:flex" />
                     )}
                     </div>

                     <div className="navbar-center hidden md:flex">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
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
                     </div>
                  </div>

                  {/* Additional Drawer Items */}
                  <ul className="menu bg-white p-6 border-t-2">
                     <li><a>Sidebar Item 1</a></li>
                     <li><a>Sidebar Item 2</a></li>
                  </ul>
               </div>
            </div>
         )}
      </div>
   );
};

export default Navbar;
