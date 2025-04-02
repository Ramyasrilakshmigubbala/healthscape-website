
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative h-[400px] w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-blue-900 via-medical-blue-800 to-medical-teal-900">
        <div className="section-container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Our Healthcare Services
            </h1>
            <p className="text-lg mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Comprehensive care tailored to your needs with our advanced medical services and dedicated specialists.
            </p>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/appointment"
                className="bg-white text-medical-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-medical-blue-50 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                to="/doctors"
                className="inline-flex items-center text-white hover:text-medical-blue-200 transition-colors"
              >
                Find a Specialist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
