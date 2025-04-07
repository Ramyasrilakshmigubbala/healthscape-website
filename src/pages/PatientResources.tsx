
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PatientResources = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Patient Resources</h1>
          <p className="text-gray-600 mb-8">
            Access important information, forms, and resources to help you prepare for your visit and manage your healthcare needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-medical">
              <h2 className="text-xl font-semibold mb-4">Patient Forms</h2>
              <p className="text-gray-600 mb-4">Save time during your visit by downloading and completing these forms before your appointment.</p>
             
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-medical">
              <h2 className="text-xl font-semibold mb-4">Insurance Information</h2>
              <p className="text-gray-600 mb-4">Learn about accepted insurance plans and payment options available at our facility.</p>
              
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PatientResources;
