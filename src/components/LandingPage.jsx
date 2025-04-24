import React, { useState } from "react";
import { Facebook, Instagram, Music, Menu, X } from "lucide-react";
import banner from "../assets/banner.jpg";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/50 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-4 md:px-6 py-4 w-full">
          <div className="text-white font-semibold text-xl">Kapil Interior</div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              HOME
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              SERVICES
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              PROJECTS
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              CONTACT
            </a>
            <a
              href="tel:+919740353436"
              className="border border-white text-white px-4 py-1 text-sm hover:bg-white hover:text-black transition"
            >
              CALL NOW
            </a>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-black/90 md:hidden">
              <div className="flex flex-col items-center py-4">
                <a
                  href="#"
                  className="text-white py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-white py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                >
                  SERVICES
                </a>
                <a
                  href="#"
                  className="text-white py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  PROJECTS
                </a>
                <a
                  href="#"
                  className="text-white py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("Contact");
                  }}
                >
                  CONTACT
                </a>
                <a
                  href="tel:+919740353436"
                  className="border border-white text-white px-4 py-1 mt-2"
                >
                  CALL NOW
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Main hero section */}
        <div
          id="home"
          className="flex-grow flex flex-col justify-center items-center text-center px-4 md:px-6 w-full"
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            Kapil's Interior Design
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl">
            Transforming Spaces into Timeless Elegance
          </p>
        </div>
      </div>

      {/* Sticky Social media sidebar */}
      <div className="fixed left-4 md:left-6 bottom-10 z-20 flex flex-col space-y-6">
        <a href="https://www.facebook.com/profile.php?id=61575027732052" className="text-white hover:text-gray-300"  target="_blank"
          rel="noopener noreferrer">
          <Facebook size={20} />
        </a>
        <a
          href="https://www.instagram.com/kapilinterior36?igsh=MWJxYW5tZnN0dmF1cQ=="
          className="text-white hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={20} />
        </a>
      </div>

      {/* Sticky Chat button */}
      <div className="fixed right-4 md:right-6 bottom-10 z-20">
        <button
          className="bg-gray-100 text-black px-4 py-2 rounded-full flex items-center cursor-pointer"
          onClick={() => {
            const whatsappUrl = `https://wa.me/919740353436?text=Hello,%20I%20would%20like%20to%20discuss%20interior%20design%20services%20with%20Kapil%20Interior!`;
            window.open(whatsappUrl, "_blank");
          }}
        >
          <span className="mr-2">💬</span>
          Let's Chat!
        </button>
      </div>

      {/* Background image - using a div instead of img for styling purposes */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>
    </div>
  );
}
