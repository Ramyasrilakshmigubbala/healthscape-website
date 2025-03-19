
import React from 'react';
import { ArrowRight, Heart, Brain, Stethoscope, Baby, Activity, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive care for heart conditions with advanced diagnostic and treatment options.',
    link: '/departments/cardiology'
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert care for disorders of the brain, spine, and nervous system with state-of-the-art technology.',
    link: '/departments/neurology'
  },
  {
    icon: Activity,
    title: 'Orthopedics',
    description: 'Specialized treatment for bone and joint injuries, including sports medicine and joint replacement.',
    link: '/departments/orthopedics'
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Child-focused healthcare with preventive services, treatments, and specialized pediatric care.',
    link: '/departments/pediatrics'
  },
  {
    icon: User,
    title: 'Oncology',
    description: 'Advanced cancer care with personalized treatment plans and supportive services.',
    link: '/departments/oncology'
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Primary healthcare services for adults, including preventive care and chronic disease management.',
    link: '/departments/general-medicine'
  }
];

const Services = () => {
  return (
    <div className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-medical-blue-50 text-medical-blue-700 mb-4">
          <span className="flex h-2 w-2 rounded-full bg-medical-blue-500 mr-2"></span>
          Our Specialties
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Healthcare Services</h2>
        <p className="text-gray-600">
          Our hospital offers a wide range of specialized medical services delivered by top specialists using cutting-edge technology.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-medical transform transition-all duration-300 hover:shadow-medical-hover hover:translate-y-[-5px] animate-fade-in"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-medical-blue-50 flex items-center justify-center mr-4">
                <service.icon className="h-6 w-6 text-medical-blue-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
            </div>
            
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <Link 
              to={service.link} 
              className="inline-flex items-center text-medical-blue-600 font-medium transition-colors hover:text-medical-blue-700"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <Link 
          to="/departments" 
          className="inline-flex items-center bg-medical-blue-50 text-medical-blue-700 font-medium px-6 py-3 rounded-full hover:bg-medical-blue-100 transition-colors duration-300"
        >
          View All Departments
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
