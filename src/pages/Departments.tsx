
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

const Departments = () => {
  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Departments</h1>
          <p className="text-gray-600 mb-8">
            HealthScape offers a wide range of specialized departments, each staffed with expert healthcare professionals and equipped with cutting-edge technology.
          </p>
          
          <Services />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Departments;
