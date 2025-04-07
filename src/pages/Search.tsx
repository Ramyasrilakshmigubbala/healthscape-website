import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Search as SearchIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {
  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to doctors page with search query as URL parameter
      navigate(`/doctors?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
      <div className="section-container">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Search</h1>
          
          
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="flex items-center">
            
            </form>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-medical">
              <h2 className="text-xl font-semibold mb-4">Search by Doctor</h2>
              <p className="text-gray-600 mb-4">Find a specific doctor by name, specialty, or department.</p>
              <Link to="/doctors" className="text-medical-blue-600 font-medium hover:underline">View All Doctors</Link>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-medical">
              <h2 className="text-xl font-semibold mb-4">Search by Department</h2>
              <p className="text-gray-600 mb-4">Browse our departments and learn about the services we offer.</p>
              <Link to="/departments" className="text-medical-blue-600 font-medium hover:underline">View All Departments</Link>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-medical">
              <h2 className="text-xl font-semibold mb-4">Search by Service</h2>
              <p className="text-gray-600 mb-4">Find information about specific treatments and medical services.</p>
              <Link to="/services" className="text-medical-blue-600 font-medium hover:underline">View All Services</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
