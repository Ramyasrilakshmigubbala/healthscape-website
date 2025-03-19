
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

const AppointmentCTA = () => {
  return (
    <div className="section-container bg-medical-blue-50/50">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Content section */}
        <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-medical-blue-100 text-medical-blue-700 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-medical-blue-500 mr-2"></span>
            Easy Scheduling
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Book Your Appointment Today</h2>
          
          <p className="text-gray-600 mb-8 max-w-lg">
            Schedule a visit with our medical specialists quickly and easily. Choose from in-person consultations or convenient telemedicine options.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-medical-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <Calendar className="h-5 w-5 text-medical-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Flexible Scheduling</h3>
                <p className="text-gray-600">Choose from a wide range of available time slots that fit your schedule.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-medical-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <Clock className="h-5 w-5 text-medical-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Quick Confirmation</h3>
                <p className="text-gray-600">Receive instant confirmation with all details sent directly to your email.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-medical-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <Phone className="h-5 w-5 text-medical-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">24/7 Support</h3>
                <p className="text-gray-600">Our support team is available to assist you with any questions or concerns.</p>
              </div>
            </div>
          </div>
          
          <Link 
            to="/appointment" 
            className="btn-primary self-start"
          >
            Book Your Appointment
          </Link>
        </div>
        
        {/* Form section */}
        <div className="bg-white p-8 rounded-2xl shadow-medical animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select
                id="department"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent transition-all"
              >
                <option value="" disabled selected>Select department</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="oncology">Oncology</option>
                <option value="general">General Medicine</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent transition-all"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-btn-gradient text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-medical-blue-500 mr-2" />
              <p className="text-gray-700">123 Medical Center Drive, Healthcare City, HC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCTA;
