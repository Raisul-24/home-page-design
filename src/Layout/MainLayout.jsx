import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../components/navbar/topNavbar';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { FaArrowUp } from 'react-icons/fa';

const MainLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto bg-white relative">
      <TopNavbar />
      <Navbar />
      <Outlet />
      <Footer />
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-white text-black rounded-full shadow-lg z-50 transition duration-300 hover:scale-125 border-2"
        >
          <FaArrowUp />
        </button>
      )}

<button
        className="fixed bottom-1/4 right-0 px-3 py-1 text-black shadow-xl border-2 rounded-lg z-50 -rotate-90"
        onClick={() => alert('Feedback button clicked!')}
      >
        <p className="text-sm">Feedback</p>
      </button>

    </div>
  );
};

export default MainLayout;
