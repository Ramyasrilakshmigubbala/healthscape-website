
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroBanner from '../components/HeroBanner';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      
      <main className="flex-grow pt-16">
        <HeroBanner />
        <Services />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
