
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample doctors data
const doctorsData = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    rating: 4.9,
    reviews: 120,
    image: '/placeholder.svg',
    available: true,
    bio: 'Dr. Johnson specializes in interventional cardiology with over 15 years of experience treating complex cardiac conditions.'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    rating: 4.8,
    reviews: 98,
    image: '/placeholder.svg',
    available: true,
    bio: 'Dr. Chen is a board-certified neurologist specializing in stroke treatment and neurodegenerative disorders.'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    rating: 4.9,
    reviews: 145,
    image: '/placeholder.svg',
    available: false,
    bio: 'Dr. Rodriguez focuses on pediatric care and childhood development, with special interest in preventive healthcare for children.'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    rating: 4.7,
    reviews: 87,
    image: '/placeholder.svg',
    available: true,
    bio: 'Dr. Wilson specializes in sports medicine and joint replacement surgery with expertise in minimally invasive techniques.'
  }
];

const Doctors = () => {
  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  // Filter doctors based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredDoctors(doctorsData);
      return;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const filtered = doctorsData.filter(
      doctor => 
        doctor.name.toLowerCase().includes(lowercasedSearch) || 
        doctor.specialty.toLowerCase().includes(lowercasedSearch)
    );
    
    setFilteredDoctors(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Doctors</h1>
          <p className="text-gray-600 mb-8">
            Meet our team of experienced healthcare professionals dedicated to providing the highest quality of care.
          </p>
          
          {/* Search bar */}
          <div className="relative mb-8 max-w-md mx-auto md:mx-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search doctors by name or specialty"
              className="pl-10 pr-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Doctor listings */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-xl shadow-medical overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-medical-blue-100 relative">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover"
                    />
                    {doctor.available ? (
                      <div className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                        Available Today
                      </div>
                    ) : (
                      <div className="absolute top-4 left-4 bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded-full">
                        Booked Today
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900">{doctor.name}</h3>
                    <p className="text-medical-blue-600 mb-2">{doctor.specialty}</p>
                    <p className="text-gray-600 text-sm mb-4">{doctor.bio}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-gray-700">{doctor.rating}</span>
                        <span className="text-gray-500 text-sm ml-1">({doctor.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button className="px-4 py-2 border border-medical-blue-200 text-medical-blue-700 rounded-lg hover:bg-medical-blue-50">
                        View Profile
                      </button>
                      <Link 
                        to={`/appointment?doctor=${doctor.id}`}
                        className="px-4 py-2 bg-btn-gradient text-white rounded-lg text-center"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No doctors found matching your search criteria.</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-medical-blue-600 hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Doctors;
