
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import DoctorsComponent from '@/components/Doctors';

const Doctors = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Doctors</h1>
          <p className="text-gray-600 mb-8">
            Meet our team of experienced healthcare professionals dedicated to providing the highest quality of care.
          </p>
          
          <DoctorsComponent />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Doctors;
