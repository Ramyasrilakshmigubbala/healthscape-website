
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const testimonials = [
  {
    id: 1,
    name: 'Rebecca Matthews',
    treatment: 'Cardiology Patient',
    image: 'https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg',
    content: 'The care I received at HealthScape was exceptional. Dr. Johnson and her team were attentive, thorough, and truly caring. I felt supported throughout my entire treatment journey.'
  },
  {
    id: 2,
    name: 'David Wilson',
    treatment: 'Orthopedic Surgery',
    image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
    content: 'After months of chronic pain, the orthopedic team at HealthScape provided a clear diagnosis and effective treatment plan. The surgery was successful, and their follow-up care was outstanding.'
  },
  {
    id: 3,
    name: 'Maria Gonzalez',
    treatment: 'Maternity Care',
    image: 'https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg',
    content: 'Having my baby at HealthScape was a wonderful experience. The maternity team was supportive, knowledgeable, and made me feel comfortable every step of the way.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-medical-blue-50 text-medical-blue-700 mb-4">
          <span className="flex h-2 w-2 rounded-full bg-medical-blue-500 mr-2"></span>
          Patient Stories
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
        <p className="text-gray-600">
          Read about the experiences of our patients and how our dedicated team has helped improve their health and well-being.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-medical overflow-hidden max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="grid md:grid-cols-2">
          {/* Image section */}
          <div className="bg-gradient-to-br from-medical-blue-400 to-medical-teal-400 h-64 md:h-auto relative">
            {currentTestimonial.image ? (
              <div className="w-full h-full absolute inset-0">
                <img 
                  src={currentTestimonial.image} 
                  alt={`${currentTestimonial.name}`}
                  className="w-full h-full object-cover" 
                />
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <p className="font-medium">Patient Image</p>
              </div>
            )}
            
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 md:hidden">
              <h3 className="text-xl font-medium text-white">{currentTestimonial.name}</h3>
              <p className="text-white/80">{currentTestimonial.treatment}</p>
            </div>
            
            <Quote className="absolute top-6 right-6 h-16 w-16 text-white opacity-20" />
          </div>
          
          {/* Content section */}
          <div className="p-8 md:p-12 flex flex-col">
            <Quote className="h-12 w-12 text-medical-blue-200 mb-6 hidden md:block" />
            
            <p className="text-lg text-gray-700 italic flex-grow mb-8">"{currentTestimonial.content}"</p>
            
            <div className="hidden md:block mb-8">
              <h3 className="text-xl font-medium text-gray-900">{currentTestimonial.name}</h3>
              <p className="text-medical-blue-600">{currentTestimonial.treatment}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'w-8 bg-medical-blue-500' : 'w-2 bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="h-10 w-10 rounded-full bg-medical-blue-500 flex items-center justify-center text-white hover:bg-medical-blue-600 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
