
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
          <p className="text-gray-600 mb-4">
            Welcome to HealthScape, where we combine advanced medical technology with compassionate care to provide the best healthcare experience for our patients.
          </p>
          <p className="text-gray-600 mb-4">
            For over 15 years, we've been a trusted healthcare provider in the community, offering comprehensive medical services across multiple specialties.
          </p>
          <p className="text-gray-600">
            Our team of highly qualified medical professionals is dedicated to improving the health and wellbeing of all patients who walk through our doors.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
