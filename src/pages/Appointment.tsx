import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, FileText, Phone } from 'lucide-react';

const Appointment = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    department: 'cardiology',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Your appointment request has been submitted. We will contact you shortly to confirm.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-gray-600 mb-8">
            Schedule your visit with our specialists. Fill out the form below and we'll contact you to confirm your appointment.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-medical p-6">
              <h2 className="text-xl font-semibold mb-6">Appointment Request</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                      placeholder="(555) 000-0000"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                    <input 
                      type="time" 
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select 
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="oncology">Oncology</option>
                    <option value="general-medicine">General Medicine</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                    placeholder="Please provide any additional details about your visit"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-btn-gradient text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Request Appointment
                </button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-medical p-6">
                <h2 className="text-xl font-semibold mb-4">Appointment Information</h2>
                <p className="text-gray-600 mb-6">
                  After submitting your appointment request, our staff will contact you within 24 hours to confirm your appointment and provide any additional information.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-medical-blue-50 flex items-center justify-center mr-4">
                      <Calendar className="h-5 w-5 text-medical-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Choose Your Preferred Date</h3>
                      <p className="text-sm text-gray-600">Select a date that works best for your schedule.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-medical-blue-50 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-medical-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Select Your Preferred Time</h3>
                      <p className="text-sm text-gray-600">Morning or afternoon, choose what works for you.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-medical-blue-50 flex items-center justify-center mr-4">
                      <User className="h-5 w-5 text-medical-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Confirmation</h3>
                      <p className="text-sm text-gray-600">We'll contact you to confirm your appointment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-medical-blue-50 flex items-center justify-center mr-4">
                      <FileText className="h-5 w-5 text-medical-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">What to Bring</h3>
                      <p className="text-sm text-gray-600">ID, insurance card, and any relevant medical records.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-medical-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Emergency?</h3>
                <p className="text-gray-700 mb-4">
                  If you're experiencing a medical emergency, please call our emergency hotline or visit our emergency department immediately.
                </p>
                <div className="flex items-center text-medical-blue-700 font-medium">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Emergency: +1 (555) 911-0000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Appointment;
