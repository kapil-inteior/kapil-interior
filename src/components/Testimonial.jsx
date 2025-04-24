import { useState } from 'react';

const testimonials = [
  {
    name: "Manoj Sharma",
    text: "\"Working with this interior design team was transformative for our home. They perfectly balanced modern aesthetics with traditional Indian elements, creating spaces that feel both luxurious and comfortable. Their attention to vastu principles while maintaining contemporary design truly impressed us.\""
  },
  {
    name: "Anita Patel",
    text: "\"After struggling with our awkward living space for years, I'm amazed by how they reimagined our home. The designers understood exactly what we needed - bright, functional spaces that still honored our cultural preferences. Every guest who visits compliments our new interiors!\""
  },
  {
    name: "Manisha Verma",
    text: "\"The designers transformed our outdated apartment into a stunning contemporary home while staying within budget. Their expertise in spatial planning and material selection was invaluable. They respected our timeline and were incredibly professional throughout the entire project.\""
  }
];

export default function Testimonial() {
  return (
    <div className="bg-[#1c1c1c] w-full">
      <div className="flex flex-col md:flex-row w-full p-16">
        {/* Left panel with heading */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-[#b2a089] flex items-center justify-center p-12 md:p-20">
          <h2 className="text-white text-3xl md:text-4xl font-light">Testimonials</h2>
        </div>
        
        {/* Right panel with testimonials grid */}
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col md:flex-row">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-1 border md:border-l border-[#b2a089] p-8 md:p-12"
            >
              <div className="h-full flex flex-col justify-between">
                <p className="text-gray-300 text-sm mb-8">
                  {testimonial.text}
                </p>
                <p className="text-[#b2a089] font-light mt-auto">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}