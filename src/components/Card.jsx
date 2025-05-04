import Slider from 'react-slick';
import { motion } from 'framer-motion';
import poojaroom from "../assets/pooja.jpg";
import walk from "../assets/walk.jpg";
import kitchen from "../assets/kitchen.jpg";
import fyover from "../assets/foyer.jpg";
import tvunit from "../assets/tvunit.jpg";
import bedroom from "../assets/bedroom.jpg";
import dining from "../assets/dining.jpg";

// Main Component
const Card = () => {
  const designs = [
    { id: 1, title: 'Pooja Room', image: poojaroom },
    { id: 2, title: 'Kitchen', image: kitchen },
    { id: 3, title: 'Foyer Room', image: fyover },
    { id: 4, title: 'Walk-in Closet', image: walk },
    { id: 5, title: 'Tv Unit', image: tvunit },
    { id: 6, title: 'Bedroom', image: bedroom },
    { id: 7, title: 'Dining', image: dining },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto px-6 py-8 bg-[#161616]">
      <h1 className="text-3xl font-bold text-center mb-12 text-white">
        Modern Home Interior Designs
      </h1>
      <div className="relative w-full">
        <Slider {...settings} className="interior-slider w-full">
          {designs.map((design) => (
            <motion.div
              key={design.id}
              className="px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-80 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0  transition duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-gradient-to-t from-black to-transparent text-center">
                  <h3 className="text-white font-semibold text-lg">
                    {design.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Card;
