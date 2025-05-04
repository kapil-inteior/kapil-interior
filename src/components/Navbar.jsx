import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false); // State to track services menu visibility
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setServicesMenuOpen(false); // Close services menu on navigation
  };

  const handleGetQuoteClick = () => {
    window.location.href = "tel:8861636827"; // Trigger call to the number
  };

  const services = [
    "Modular Kitchen",
    "Storage & Wardrobe",
    "Crockery Units",
    "Space Saving Furniture",
    "TV Units",
    "Study Tables",
    "False Ceiling",
    "Light",
    "Wallpaper",
    "Wall Paint",
    "Bathroom",
  ];

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-4 w-full bg-white/70">
      <div
        className="text-black font-semibold text-xl cursor-pointer"
        onClick={() => handleNavigate("/")}
      >
        <img src={Logo} alt="logo" className="w-28 sm:w-40 md:w-24" />
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-black"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <button
          onClick={() => handleNavigate("/")}
          className="text-black hover:text-gray-300 text-sm"
        >
          HOME
        </button>

        {/* Services with click-based dropdown */}
        <div className="relative">
          <button
            onClick={() => setServicesMenuOpen(!servicesMenuOpen)} // Toggle on click
            className="text-black hover:text-gray-300 text-sm"
          >
            SERVICES
          </button>

          {/* Dropdown menu */}
          {servicesMenuOpen && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 z-50">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleNavigate(
                      `/services/${service.toLowerCase().replace(/ /g, "-")}`
                    )
                  } // Assuming service pages
                  className="text-black hover:text-gray-300 text-sm w-full text-left"
                >
                  {service}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => handleNavigate("/projects")}
          className="text-black hover:text-gray-300 text-sm"
        >
          PROJECTS
        </button>
        <button
          onClick={() => handleNavigate("/gallery")}
          className="text-black hover:text-gray-300 text-sm"
        >
         GALLERY
        </button>

        <button
          onClick={handleGetQuoteClick}
          className="border border-black text-black px-4 py-1 text-sm hover:bg-black hover:text-white transition"
        >
          GET QUOTE
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-26 left-0 right-0 bg-white md:hidden z-50">
          <div className="flex flex-col items-center py-4">
            <button
              onClick={() => handleNavigate("/")}
              className="text-black py-2"
            >
              HOME
            </button>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesMenuOpen(!servicesMenuOpen)} // Toggle on click for mobile
                className="text-black py-2"
              >
                SERVICES
              </button>

              {/* Dropdown menu for mobile */}
              {servicesMenuOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 z-50">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleNavigate(
                          `/services/${service
                            .toLowerCase()
                            .replace(/ /g, "-")}`
                        )
                      } // Assuming service pages
                      className="text-black hover:text-gray-300 text-sm w-full text-left"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigate("/projects")}
              className="text-black py-2"
            >
              PROJECTS
            </button>
            <button
              onClick={() => handleNavigate("/gallery")}
              className="text-black py-2"
            >
              GALLERY
            </button>

            <button
              onClick={handleGetQuoteClick}
              className="border border-black text-black px-4 py-1 mt-2"
            >
              GET QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
