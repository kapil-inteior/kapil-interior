import React from "react";
import { Facebook, Instagram } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/banner.jpg"
import banner2 from "../assets/banner1.jpg"
import banner3 from "../assets/banner2.png"

export default function LandingPage() {
  const slides = [
    {
      title: "Kapil's Interior Design",
      subtitle: "Transforming Spaces into Timeless Elegance",
      image: banner1,
    },
    {
      title: "Crafting Your Dream Space",
      subtitle: "Where Imagination Meets Reality",
      image: banner2,
    },
    {
      title: "Elegant Interiors",
      subtitle: "Designing Your Perfect Home",
      image: banner3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Background image with overlay and slider */}
      <div className="w-full h-screen">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-screen relative">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                      {slide.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Sticky Social media sidebar */}
      <div className="fixed left-4 md:left-6 bottom-10 z-20 flex flex-col space-y-6">
        <a
          href="https://www.facebook.com/profile.php?id=61575027732052"
          className="text-white hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
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
    </div>
  );
}
