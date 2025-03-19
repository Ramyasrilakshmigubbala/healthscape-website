
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-medical-gradient opacity-40 -z-10"></div>
      <div className="absolute top-0 right-0 w-3/4 h-screen bg-white rounded-bl-[15rem] -z-10"></div>
      <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-medical-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="section-container grid lg:grid-cols-2 gap-12 pt-24 sm:pt-32">
        {/* Content section */}
        <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-medical-blue-50 text-medical-blue-700 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-medical-blue-500 mr-2"></span>
            Leading Healthcare Provider
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Your Health, <br />
            <span className="bg-clip-text text-transparent bg-btn-gradient">Our Priority</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Experience world-class healthcare services with cutting-edge technology and compassionate care from our team of specialists.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/appointment" className="btn-primary flex items-center">
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/services" className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium flex items-center hover:bg-gray-50 transition-colors duration-300">
              Explore Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-medical-blue-50 flex items-center justify-center mr-4">
                <Calendar className="h-6 w-6 text-medical-blue-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Easy Scheduling</h3>
                <p className="text-sm text-gray-500">Book online 24/7</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-medical-blue-50 flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-medical-blue-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">24/7 Support</h3>
                <p className="text-sm text-gray-500">Always available</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-medical-blue-50 flex items-center justify-center mr-4">
                <PhoneCall className="h-6 w-6 text-medical-blue-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Emergency Line</h3>
                <p className="text-sm text-gray-500">+1 (555) 000-0000</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image section */}
        <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative w-full h-[28rem] rounded-2xl overflow-hidden shadow-medical">
            {/* Placeholder for actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-medical-blue-400 to-medical-teal-400 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl font-medium">Doctor Image Placeholder</p>
            </div>
          </div>
          
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-float">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full bg-medical-blue-100 flex items-center justify-center">
                <span className="text-medical-blue-600 font-bold text-2xl">96%</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Patient Satisfaction</p>
                <p className="font-medium text-gray-900">Based on 10k+ reviews</p>
              </div>
            </div>
          </div>
          
          {/* Accent elements */}
          <div className="absolute -top-4 -right-4 h-20 w-20 bg-medical-teal-400 rounded-full blur-lg opacity-30"></div>
          <div className="absolute top-1/3 right-0 h-32 w-32 bg-medical-blue-200 rounded-full blur-xl opacity-40 translate-x-1/3"></div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="section-container">
        <div className="w-full p-8 bg-white shadow-medical rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <div className="text-center">
            <p className="text-3xl font-bold text-medical-blue-600 mb-2">15+</p>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-medical-blue-600 mb-2">50+</p>
            <p className="text-gray-600">Experienced Doctors</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-medical-blue-600 mb-2">25k+</p>
            <p className="text-gray-600">Happy Patients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-medical-blue-600 mb-2">15+</p>
            <p className="text-gray-600">Medical Specialties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
