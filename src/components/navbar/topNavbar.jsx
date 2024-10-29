import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNavbar = () => {
   return (
      <div className='hidden md:font-medium md:py-2 md:flex md:justify-between'>
         <div className="">
            <NavLink className='mr-2 link-hover' to='/'>photo service</NavLink>
            <NavLink className='mr-2 link-hover' to='/'>tickets & deals</NavLink>
            <NavLink className='mr-2 link-hover' to='/'>insurances</NavLink>
            <NavLink className='mr-2 link-hover' to='/'>inspiration</NavLink>
         </div>
         <div className="">
            <NavLink className='mr-2 link-hover' to='/'>shops</NavLink>
            <NavLink className='mr-2 link-hover' to='/'>customer card</NavLink>
            <NavLink className='mr-2 link-hover' to='/'>customer service</NavLink>
         </div>
         
      </div>
   );
};

export default TopNavbar;