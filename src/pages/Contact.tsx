
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            We're here to help. Reach out to us with any questions, concerns, or to schedule an appointment.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-medical p-6">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-medical-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">123 Medical Center Drive, Healthcare City, HC 12345</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-medical-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">+1 (555) 000-0000</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-medical-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">info@healthscape.com</span>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-medical-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">Monday-Friday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-medical p-6">
              <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-btn-gradient text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
