
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About section */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-medical-blue-500 to-medical-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="font-bold text-xl text-gray-900">HealthScape</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              Providing exceptional healthcare services with compassion and cutting-edge technology for over 15 years.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-medical-blue-50 flex items-center justify-center text-medical-blue-500 hover:bg-medical-blue-100 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-medical-blue-50 flex items-center justify-center text-medical-blue-500 hover:bg-medical-blue-100 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-medical-blue-50 flex items-center justify-center text-medical-blue-500 hover:bg-medical-blue-100 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-medical-blue-50 flex items-center justify-center text-medical-blue-500 hover:bg-medical-blue-100 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Departments */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Departments</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/departments/cardiology" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Cardiology
                </Link>
              </li>
              <li>
                <Link to="/departments/neurology" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Neurology
                </Link>
              </li>
              <li>
                <Link to="/departments/orthopedics" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link to="/departments/pediatrics" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link to="/departments/oncology" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Oncology
                </Link>
              </li>
              <li>
                <Link to="/departments/general-medicine" className="text-gray-600 hover:text-medical-blue-600 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  General Medicine
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-medical-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Medical Center Drive, Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-medical-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-medical-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">info@healthscape.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-medical-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">Monday-Friday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 py-8 border-t border-gray-100 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600">Stay updated with the latest medical advancements and hospital news.</p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
              />
              <button className="bg-medical-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-medical-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 text-center border-t border-gray-100 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-gray-600">
            © {new Date().getFullYear()} HealthScape. All rights reserved. | 
            <Link to="/privacy" className="text-medical-blue-600 hover:text-medical-blue-700 ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="text-medical-blue-600 hover:text-medical-blue-700 ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
