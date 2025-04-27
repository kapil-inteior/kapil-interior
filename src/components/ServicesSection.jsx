import React from 'react';
import service from "../assets/service.webp"
import service1 from "../assets/service1.webp"

const ServiceItem = ({ title, description, image }) => {
  return (
    <div className="border border-gray-700 relative">
      {image ? (
        <div className="w-full h-[300px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="p-8 md:p-10">
          <h3 className="text-[#b2a089] text-xl md:text-2xl mb-4 font-light">{title}</h3>
          {description && (
            <p className="text-gray-300 text-sm">{description}</p>
          )}
          {Array.isArray(description) && (
            <ul className="text-gray-300 text-sm list-disc pl-5 mt-4 space-y-1">
              {description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default function ServicesGrid() {
  const placeholderText = "Transform your space with our expert interior design services. Contact us to create a personalized, elegant, and functional environment tailored to your lifestyle.";
  
  const services = [
    {
      id: "our-services",
      title: "Our Interior Design Services",
      description: null,
      image: null,
      bgColor: "#b2a089",
      textColor: "white"
    },
    {
      id: "space-planning",
      title: "Space Planning",
      description: placeholderText,
      image: null
    },
    {
      id: "custom-furniture",
      title: "Custom Furniture Design",
      description: placeholderText,
      image: null
    },
    {
      id: "interior-image",
      title: "",
      description: null,
      image: service
    },
    {
      id: "design-image",
      title: "",
      description: null,
      image: service1
    },
    {
      id: "color-consultation",
      title: "Color Consultation",
      description: placeholderText,
      image: null
    },
    {
      id: "lighting-design",
      title: "Lighting Design",
      description: placeholderText,
      image: null 
    },
    {
      id: "textile-selection",
      title: "Textile & Material Selection",
      description: placeholderText,
      image: null
    },
    {
      id: "our-expertise",
      title: "Our Design Expertise",
      description: null,
      image: null,
      bgColor: "#1c1c1c",
      textColor: "white"
    },
    {
      id: "client-collaboration",
      title: "Client Collaboration",
      description: [
        "Personalized Design Consultations",
        "Mood Board Creation",
        "3D Renderings"
      ],
      image: null
    },
    {
      id: "material-selection",
      title: "Sustainable Materials",
      description: [
        "Eco-Friendly Fabrics",
        "Non-Toxic Paints",
        "Recycled Materials"
      ],
      image: null
    },
    {
      id: "project-management",
      title: "Project Management",
      description: [
        "Vendor Coordination",
        "Timeline Management",
        "Budget Oversight"
      ],
      image: null
    }
  ];

  return (
    <div className="w-full bg-[#1c1c1c]">
      {/* Mobile and iPad layout - stack all items */}
      <div className="grid grid-cols-1 md:hidden">
        {services.map(service => (
          <div 
            key={service.id}
            className={`${service.id === "our-services" || service.id === "our-expertise" ? 
              (service.bgColor || "bg-[#b2a089]") : "bg-[#1c1c1c]"}`}
          >
            {service.id === "our-services" || service.id === "our-expertise" ? (
              <div className="p-12 flex items-center justify-center">
                <h2 className="text-3xl font-light text-white">{service.title}</h2>
              </div>
            ) : (
              <ServiceItem 
                title={service.title}
                description={service.description}
                image={service.image}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Tablet and desktop layout - grid */}
      <div className="hidden md:grid md:grid-cols-4">
        {/* First row */}
        <div className="bg-[#b2a089] flex items-center justify-center p-12">
          <h2 className="text-3xl font-light text-white">Our Interior Design Services</h2>
        </div>
        <ServiceItem 
          title="Space Planning"
          description={placeholderText}
        />
        <ServiceItem 
          title="Custom Furniture Design"
          description={placeholderText}
        />
        <ServiceItem 
          image={service1}
        />
        
        {/* Second row */}
        <ServiceItem 
          image={service}
        />
        <ServiceItem 
          title="Color Consultation"
          description={placeholderText}
        />
        <ServiceItem 
          title="Lighting Design"
          description={placeholderText}
        />
        <ServiceItem 
          title="Textile & Material Selection"
          description={placeholderText}
        />
        
        {/* Third row */}
        <div className="bg-[#1c1c1c] flex items-center justify-center p-12 border border-gray-700">
          <h2 className="text-3xl font-light text-white">Our Design Expertise</h2>
        </div>
        <ServiceItem 
          title="Client Collaboration"
          description={[
            "Personalized Design Consultations",
            "Mood Board Creation", 
            "3D Renderings"
          ]}
        />
        <ServiceItem 
          title="Sustainable Materials"
          description={[
            "Eco-Friendly Fabrics",
            "Non-Toxic Paints",
            "Recycled Materials"
          ]}
        />
        <ServiceItem 
          title="Project Management"
          description={[
            "Vendor Coordination",
            "Timeline Management",
            "Budget Oversight"
          ]}
        />
      </div>
    </div>
  );
}