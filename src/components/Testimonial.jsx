import React from 'react';
import { motion } from 'framer-motion';

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
      <div className="flex flex-col sm:flex-row w-full p-16">
        {/* Left panel with heading */}
        <motion.div
          className="w-full sm:w-1/3 lg:w-1/4 bg-[#b2a089] flex items-center justify-center p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-white text-3xl sm:text-4xl font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Testimonials
          </motion.h2>
        </motion.div>
        
        {/* Right panel with testimonials grid */}
        <div className="w-full sm:w-2/3 lg:w-3/4 flex flex-col md:flex-row">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-1 border sm:border-l border-[#b2a089] p-8 sm:p-12 mb-4 sm:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="h-full flex flex-col justify-between">
                <motion.p
                  className="text-gray-300 text-sm mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                >
                  {testimonial.text}
                </motion.p>
                <motion.p
                  className="text-[#b2a089] font-light mt-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                >
                  {testimonial.name}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}