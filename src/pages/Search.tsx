
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
    console.log('Searching for:', searchQuery);
    // Here you would typically perform the search operation
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Search</h1>
          <p className="text-gray-600 mb-8">
            Find information about our doctors, departments, services, and more.
          </p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-medical-blue-500 focus:border-transparent"
                  placeholder="Search for doctors, departments, services..."
                />
              </div>
              <button 
                type="submit" 
                className="bg-medical-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-medical-blue-700 transition-colors"
              >
                Search
              </button>
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
