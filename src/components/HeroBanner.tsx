import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative h-[600px] w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-blue-900 via-medical-blue-800 to-medical-teal-900">
        <div className="section-container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Your Health, Our Priority
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Experience world-class healthcare with our team of dedicated professionals and cutting-edge facilities.
            </p>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/appointment"
                className="bg-white text-medical-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-medical-blue-50 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center text-white hover:text-medical-blue-200 transition-colors"
              >
                Explore Services
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
