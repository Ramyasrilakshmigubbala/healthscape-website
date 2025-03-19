
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  Phone, 
  User, 
  ChevronDown, 
  X 
} from 'lucide-react';
import { cn } from "@/lib/utils";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavItem = ({ text, href = "#", hasDropdown = false }: { text: string, href?: string, hasDropdown?: boolean }) => (
    <Link 
      to={href} 
      className="relative group px-3 py-2 text-gray-700 hover:text-medical-blue-600 transition-colors duration-300 flex items-center"
    >
      <span>{text}</span>
      {hasDropdown && <ChevronDown className="h-4 w-4 ml-1 text-gray-500 group-hover:text-medical-blue-600 transition-colors duration-300" />}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-medical-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );

  return (
    <header className={cn(
      "fixed w-full top-0 left-0 z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white/0"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-medical-blue-500 to-medical-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-xl text-gray-900">HealthScape</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavItem text="Home" href="/" />
            <NavItem text="About Us" href="/about" hasDropdown />
            <NavItem text="Departments" href="/departments" hasDropdown />
            <NavItem text="Doctors" href="/doctors" />
            <NavItem text="Patient Resources" href="/resources" hasDropdown />
            <NavItem text="Contact" href="/contact" />
          </nav>

          {/* Call to Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-medical-blue-600 transition-colors duration-300">
              <Search className="h-5 w-5 mr-1" />
              <span>Search</span>
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <Link 
              to="/appointment" 
              className="bg-btn-gradient text-white px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center text-gray-700" 
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 flex flex-col p-4 md:hidden transition-transform duration-300",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-medical-blue-500 to-medical-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-xl text-gray-900">HealthScape</span>
          </Link>
          <button onClick={toggleMobileMenu}>
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 mt-8">
          <Link to="/" className="text-lg font-medium px-2 py-2 border-b border-gray-100">Home</Link>
          <Link to="/about" className="text-lg font-medium px-2 py-2 border-b border-gray-100">About Us</Link>
          <Link to="/departments" className="text-lg font-medium px-2 py-2 border-b border-gray-100">Departments</Link>
          <Link to="/doctors" className="text-lg font-medium px-2 py-2 border-b border-gray-100">Doctors</Link>
          <Link to="/resources" className="text-lg font-medium px-2 py-2 border-b border-gray-100">Patient Resources</Link>
          <Link to="/contact" className="text-lg font-medium px-2 py-2 border-b border-gray-100">Contact</Link>
        </nav>

        <div className="mt-auto">
          <Link 
            to="/appointment" 
            className="block w-full bg-btn-gradient text-white px-4 py-3 rounded-full font-medium text-center shadow-md"
          >
            Book Appointment
          </Link>
          <div className="mt-4 flex justify-between">
            <button className="flex items-center justify-center w-1/2 text-gray-700 py-2">
              <Search className="h-5 w-5 mr-2" />
              <span>Search</span>
            </button>
            <div className="h-6 w-px bg-gray-300 my-auto"></div>
            <button className="flex items-center justify-center w-1/2 text-gray-700 py-2">
              <Phone className="h-5 w-5 mr-2" />
              <span>Call Us</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
