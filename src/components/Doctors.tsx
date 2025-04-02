
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Calendar } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    rating: 4.9,
    reviews: 120,
    image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
    available: true
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    rating: 4.8,
    reviews: 98,
    image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
    available: true
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    rating: 4.9,
    reviews: 145,
    image: 'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg',
    available: false
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    rating: 4.7,
    reviews: 87,
    image: 'https://img.freepik.com/free-photo/happy-young-male-doctor-with-stethoscope-standing-with-closed-arms_1262-18761.jpg',
    available: true
  }
];

const Doctors = () => {
  const navigate = useNavigate();
  
  const handleViewProfile = (doctorId: number) => {
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <div className="section-container bg-medical-blue-50/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="mb-6 md:mb-0">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-medical-blue-100 text-medical-blue-700 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-medical-blue-500 mr-2"></span>
            Expert Medical Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Specialists</h2>
          <p className="text-gray-600 max-w-xl">
            Our team of dedicated medical professionals brings years of experience and specialized expertise to provide you with the best care possible.
          </p>
        </div>
        
        <Link 
          to="/doctors" 
          className="inline-flex items-center text-medical-blue-700 font-medium hover:text-medical-blue-800 transition-colors"
        >
          View All Doctors
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <div 
            key={doctor.id} 
            className="bg-white rounded-xl overflow-hidden shadow-medical group transition-all duration-300 hover:shadow-medical-hover animate-fade-in"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="h-64 bg-gradient-to-br from-medical-blue-300 to-medical-teal-300 relative overflow-hidden">
              <img 
                src={doctor.image}
                alt={`${doctor.name} - ${doctor.specialty}`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500';
                }}
              />
              
              {/* Availability badge */}
              {doctor.available ? (
                <div className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
                  Available Today
                </div>
              ) : (
                <div className="absolute top-4 left-4 bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                  <span className="h-2 w-2 rounded-full bg-orange-500 mr-1.5"></span>
                  Booked Today
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-1">{doctor.name}</h3>
              <p className="text-medical-blue-600 mb-3">{doctor.specialty}</p>
              
              <div className="flex items-center mb-4">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-gray-700 ml-1">{doctor.rating}</span>
                <span className="text-gray-500 text-sm ml-1">({doctor.reviews} reviews)</span>
              </div>
              
              <button 
                onClick={() => handleViewProfile(doctor.id)}
                className="block w-full bg-white text-medical-blue-600 border border-medical-blue-200 font-medium rounded-lg py-2.5 text-center mb-3 hover:bg-medical-blue-50 transition-colors"
              >
                View Profile
              </button>
              
              <Link 
                to={`/appointment?doctor=${doctor.id}`}
                className="block w-full bg-btn-gradient text-white font-medium rounded-lg py-2.5 text-center group-hover:scale-[1.02] transition-transform flex items-center justify-center"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
