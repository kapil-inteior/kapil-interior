import React from "react";
import recent from "../assets/recent.jpg";
import recent1 from "../assets/recent1.jpg";
import recent3 from "../assets/recent3.jpg";
import recent2 from "../assets/recent2.webp";

const AllProjects = () => {
  // Extended project data with names and descriptions
  const projects = [
    {
      id: 1,
      imageUrl: recent1,
      size: "medium",
      name: "Modern Living Room",
      description: "A sleek, contemporary design with open spaces.",
    },
    {
      id: 2,
      imageUrl: recent2,
      size: "small",
      name: "Cozy Bedroom",
      description: "Warm tones and minimalist furniture for relaxation.",
    },
    {
      id: 3,
      imageUrl: recent3,
      size: "small",
      name: "Elegant Kitchen",
      description: "Functional yet stylish kitchen with modern appliances.",
    },
    {
      id: 4,
      imageUrl: recent3,
      size: "medium",
      name: "Luxury Bathroom",
      description: "A spa-like retreat with premium finishes.",
    },
    {
      id: 5,
      imageUrl: recent,
      size: "large",
      name: "Spacious Office",
      description: "Ergonomic design for productivity and comfort.",
    },
    {
      id: 6,
      imageUrl: recent1,
      size: "medium",
      name: "Urban Apartment",
      description: "Smart space utilization in a compact city dwelling.",
    },
    {
      id: 7,
      imageUrl: recent2,
      size: "large",
      name: "Villa Renovation",
      description: "Traditional architecture meets contemporary interiors.",
    },
    {
      id: 8,
      imageUrl: recent,
      size: "small",
      name: "Restaurant Design",
      description: "Ambient lighting and strategic seating arrangement.",
    },
    {
      id: 9,
      imageUrl: recent3,
      size: "medium",
      name: "Hotel Lobby",
      description: "First impressions that last with luxurious comfort.",
    },
    {
      id: 10,
      imageUrl: recent1,
      size: "small",
      name: "Retail Space",
      description: "Customer-focused layout maximizing product visibility.",
    },
    {
      id: 11,
      imageUrl: recent,
      size: "large",
      name: "Penthouse Suite",
      description: "Panoramic views complemented by elegant interiors.",
    },
    {
      id: 12,
      imageUrl: recent2,
      size: "medium",
      name: "Home Theater",
      description: "Acoustic perfection with comfortable seating.",
    },
    {
      id: 13,
      imageUrl: recent3,
      size: "small",
      name: "Study Room",
      description:
        "Concentration-enhancing environment with practical storage.",
    },
    {
      id: 14,
      imageUrl: recent1,
      size: "medium",
      name: "Rooftop Garden",
      description: "Urban oasis with integrated seating and planters.",
    },
    {
      id: 15,
      imageUrl: recent,
      size: "small",
      name: "Children's Bedroom",
      description: "Playful yet functional space that grows with your child.",
    },
  ];

  return (
    <div className="bg-[#1c1c1c]">
      {/* Section 1: Standard Grid Layout */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl text-white font-light text-center mb-12">
          Residential Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* First column - medium project */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="aspect-[3/4] mb-4 md:mb-6">
              <img
                src={projects[0].imageUrl}
                alt={projects[0].name}
                className="w-full h-full object-cover"
              />
              <div className="text-white p-2">
                <h3 className="text-lg font-light">{projects[0].name}</h3>
                <p className="text-sm text-gray-300">
                  {projects[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Middle column - two small projects stacked */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="aspect-[4/3]">
                <img
                  src={projects[1].imageUrl}
                  alt={projects[1].name}
                  className="w-full h-full object-cover"
                />
                <div className="text-white p-2">
                  <h3 className="text-lg font-light">{projects[1].name}</h3>
                  <p className="text-sm text-gray-300">
                    {projects[1].description}
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3]">
                <img
                  src={projects[2].imageUrl}
                  alt={projects[2].name}
                  className="w-full h-full object-cover"
                />
                <div className="text-white p-2">
                  <h3 className="text-lg font-light">{projects[2].name}</h3>
                  <p className="text-sm text-gray-300">
                    {projects[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third column - large project */}
          <div className="md:col-span-4 lg:col-span-6 relative">
            <div className="aspect-[4/3] lg:aspect-[16/9]">
              <img
                src={projects[4].imageUrl}
                alt={projects[4].name}
                className="w-full h-full object-cover"
              />
              <div className="text-white p-2">
                <h3 className="text-lg font-light">{projects[4].name}</h3>
                <p className="text-sm text-gray-300">
                  {projects[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Horizontal Scrolling Gallery */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#161616]">
        <h2 className="text-3xl md:text-4xl text-white font-light mb-8 ml-4">
          Commercial Spaces
        </h2>

        <div className="overflow-x-auto">
          <div className="flex space-x-4 md:space-x-6 pb-6 min-w-max">
            {[7, 8, 9, 10].map((index) => (
              <div key={index} className="w-64 md:w-80 flex-shrink-0">
                <div className="aspect-[4/3]">
                  <img
                    src={projects[index].imageUrl}
                    alt={projects[index].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white p-2">
                  <h3 className="text-lg font-light">{projects[index].name}</h3>
                  <p className="text-sm text-gray-300">
                    {projects[index].description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Masonry-like Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-light inline-block border-b-2 border-[#b2a089] pb-2">
            Luxury Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Varied aspect ratio items */}
          <div className="lg:col-span-2 aspect-[16/9]">
            <img
              src={projects[10].imageUrl}
              alt={projects[10].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src={projects[11].imageUrl}
              alt={projects[11].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src={projects[12].imageUrl}
              alt={projects[12].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-2 aspect-[16/9]">
            <img
              src={projects[13].imageUrl}
              alt={projects[13].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Split View Layout */}
      <section className="py-16 bg-[#161616]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-white font-light mb-6">
                Featured Project
              </h2>
              <h3 className="text-xl text-[#b2a089] font-light mb-4">
                {projects[5].name}
              </h3>
              <p className="text-gray-300 mb-8">{projects[5].description}</p>
              <p className="text-gray-300 mb-6">
                This award-winning design showcases our commitment to creating
                spaces that blend functionality with aesthetic appeal. The
                project features custom furniture pieces, innovative lighting
                solutions, and a harmonious color palette that creates a warm
                yet sophisticated atmosphere.
              </p>
             
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="h-full">
              <img
                src={projects[5].imageUrl}
                alt={projects[5].name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
