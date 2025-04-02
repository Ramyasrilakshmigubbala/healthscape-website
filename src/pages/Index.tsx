
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import AppointmentCTA from '@/components/AppointmentCTA';
import Footer from '@/components/Footer';

const Index = () => {
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
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Doctors />
        <Testimonials />
        <AppointmentCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
