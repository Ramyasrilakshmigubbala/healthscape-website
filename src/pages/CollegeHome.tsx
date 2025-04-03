
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Graduation, Award, Calendar, Building, Search, ChevronRight, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const CollegeHome = () => {
  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* College NavBar */}
      <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500" alt="College Logo" className="h-10 w-auto" />
                <span className="ml-3 text-xl font-bold text-blue-900">EduVista College</span>
              </Link>
            </div>
            
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center relative mx-4 flex-grow max-w-md">
              <Search className="absolute left-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs, courses..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Apply Now Button */}
            <div className="flex items-center">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg py-2 px-4 mr-4">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
              alt="College Campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Empowering Future Leaders
              </h1>
              <p className="text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Discover academic excellence, innovation, and a supportive community at EduVista College.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center text-lg">
                  Explore Programs
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white px-6 py-3 rounded-lg">
                  Virtual Tour
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Links Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Quick Links</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Graduation className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Admissions</h3>
                <p className="text-gray-600 mb-4">Start your journey with us. Apply for admission today.</p>
                <Link to="/admissions" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                  Apply Now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Award className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Rankings & Accreditations</h3>
                <p className="text-gray-600 mb-4">Discover our national rankings and accreditations.</p>
                <Link to="/rankings" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Upcoming Events</h3>
                <p className="text-gray-600 mb-4">Stay updated with the latest events and activities.</p>
                <Link to="/events" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                  View Calendar
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Building className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Campus Tour</h3>
                <p className="text-gray-600 mb-4">Experience our state-of-the-art facilities virtually.</p>
                <Link to="/campus-tour" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                  Take Tour
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose EduVista College?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We provide a world-class educational experience with a focus on academic excellence, 
                innovation, and student success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Graduation className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">100+ Accredited Programs</h3>
                </div>
                <p className="text-gray-600">
                  Choose from over 100 nationally accredited programs designed to prepare you for success.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">World-Class Faculty</h3>
                </div>
                <p className="text-gray-600">
                  Learn from industry experts and renowned academics who are leaders in their fields.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Building className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">State-of-the-Art Infrastructure</h3>
                </div>
                <p className="text-gray-600">
                  Access modern facilities designed to enhance learning, research, and student life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Programs Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Programs</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our most popular and innovative academic programs designed for career success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "B.Tech in Artificial Intelligence",
                  icon: "💻",
                  description: "Learn to develop AI solutions for real-world problems.",
                  duration: "4 Years"
                },
                {
                  title: "MBA in Business Analytics",
                  icon: "📈",
                  description: "Master data-driven decision making for business success.",
                  duration: "2 Years"
                },
                {
                  title: "B.Sc. in Biotechnology",
                  icon: "⚕️",
                  description: "Study cutting-edge biological sciences and technologies.",
                  duration: "3 Years"
                },
                {
                  title: "BA in Graphic Design",
                  icon: "🎨",
                  description: "Develop creative design skills for digital and print media.",
                  duration: "3 Years"
                }
              ].map((program, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="text-3xl mb-3">{program.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{program.duration}</span>
                      <Link to="/programs" className="text-blue-600 text-sm font-medium hover:text-blue-800">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                View All Programs
              </Button>
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Student Testimonials</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear what our students have to say about their experience at EduVista College.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  program: "B.Tech Computer Science",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                  review: "My experience at EduVista has been transformative. The faculty support and industry exposure helped me secure a job at Google.",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  program: "MBA Finance",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
                  review: "The practical approach to learning business concepts and networking opportunities are unmatched. Best decision of my career.",
                  rating: 5
                },
                {
                  name: "Priya Sharma",
                  program: "B.Sc. Biotechnology",
                  image: "https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?auto=format&fit=crop&q=80&w=200",
                  review: "State-of-the-art labs and research opportunities have prepared me well for my career in pharmaceutical research.",
                  rating: 4
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/200";
                      }}
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600">{testimonial.program}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Latest News & Events</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest happenings at EduVista College.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "College Fest 2025 Announced!",
                  date: "April 15, 2025",
                  image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400",
                  excerpt: "Mark your calendars for the biggest cultural event of the year. Three days of competitions, performances, and celebrations."
                },
                {
                  title: "Guest Lecture by Industry Leaders",
                  date: "April 10, 2025",
                  image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400",
                  excerpt: "Join us for a series of insightful lectures from CEOs and leaders from top companies including Microsoft and Amazon."
                },
                {
                  title: "College Ranked Among Top 10 Universities",
                  date: "April 5, 2025",
                  image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400",
                  excerpt: "EduVista College has been recognized among the top 10 universities nationwide for academic excellence and innovation."
                }
              ].map((news, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400x200";
                    }}
                  />
                  <div className="p-6">
                    <p className="text-sm text-blue-600 mb-2">{news.date}</p>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <Link to="/news" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollegeHome;
