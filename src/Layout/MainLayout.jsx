import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../components/navbar/topNavbar';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer'

const MainLayout = () => {
   return (
      <div className="max-w-screen-xl mx-auto bg-white">
         <TopNavbar></TopNavbar>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;