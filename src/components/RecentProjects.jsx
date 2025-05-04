import React from 'react';
import { motion } from 'framer-motion';
import recent from "../assets/recent.jpg";
import recent1 from "../assets/recent1.jpg";
import recent3 from "../assets/recent3.jpg";
import recent2 from "../assets/recent2.webp";

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      imageUrl: recent1,
      size: "medium"
    },
    {
      id: 2,
      imageUrl: recent2,
      size: "small"
    },
    {
      id: 3,
      imageUrl: recent3,
      size: "small"
    },
    {
      id: 4,
      imageUrl: recent3,
      size: "medium"
    },
    {
      id: 5,
      imageUrl: recent,
      size: "large"
    }
  ];

  return (
    <div className="bg-[#1c1c1c] py-12 px-4 md:px-8 lg:px-16" id="projects">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl text-white font-light text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Recent Projects
      </motion.h2>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* First column - medium project */}
        <motion.div
          className="md:col-span-4 lg:col-span-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="aspect-[3/4] mb-4 md:mb-6">
            <img 
              src={projects[0].imageUrl} 
              alt="Interior design project" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Middle column - two small projects stacked */}
        <motion.div
          className="md:col-span-4 lg:col-span-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <div className="aspect-[4/3]">
              <img 
                src={projects[1].imageUrl} 
                alt="Interior design project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3]">
              <img 
                src={projects[3].imageUrl} 
                alt="Interior design project" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Third column - large project */}
        <motion.div
          className="md:col-span-4 lg:col-span-6 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="aspect-[4/3] lg:aspect-[16/9]">
            <img 
              src={projects[4].imageUrl} 
              alt="Interior design project" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* View All Button */}
          <motion.div
            className="absolute bottom-0 right-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <button
              className="bg-[#c2b59b] text-[#1c1c1c] px-8 py-4 hover:bg-[#d8c9ab] transition-colors cursor-pointer"
              onClick={() => window.location.href = '/projects'}
            >
              VIEW ALL
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecentProjects;