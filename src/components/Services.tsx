import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Doctor Consultation',
    description: 'Expert consultation with our specialized physicians',
    link: '/services/consultation'
  },
  {
    id: 2,
    title: 'Emergency Care',
    description: '24/7 emergency medical services',
    link: '/services/emergency'
  },
  {
    id: 3,
    title: 'Laboratory Services',
    description: 'Advanced diagnostic and testing facilities',
    link: '/services/laboratory'
  },
  {
    id: 4,
    title: 'Medical Facilities',
    description: 'State-of-the-art medical equipment and facilities',
    link: '/services/facilities'
  }
];

const Services = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive healthcare services using the latest medical technology and expertise.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Link
            key={service.id}
            to={service.link}
            className="group bg-white rounded-xl p-6 shadow-medical hover:shadow-medical-hover transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
