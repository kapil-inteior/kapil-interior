import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/wallpaper.jpg";

const Wallpaper = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full py-12 px-4 mt-20 bg-gray-100"
      >
        {/* About Us Section */}
        <div className="max-w-screen-xl mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Image */}
          <motion.div
            className="mb-8 lg:mb-0 lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={aboutus}
              alt="Awesome Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:w-1/2 text-lg text-gray-700 leading-relaxed space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Wallpaper
            </h2>
            <p className="text-xl">
              Our wallpaper services offer an extensive range of designs to
              enhance the visual appeal of your space. Whether you lean towards
              classic patterns or prefer sleek, modern styles, we provide
              wallpaper options tailored to fit your preferences and budget.
              Made from materials like paper or vinyl, our wallpapers are
              designed to elevate the ambiance of any room.
            </p>
            <p className="text-xl">
              Wallpaper is a versatile decorative element used to cover and
              transform the walls of a room. With a broad selection of patterns,
              colors, and textures, it adds depth and interest to your space.
              Ideal for establishing a particular theme or mood, wallpaper also
              serves to hide imperfections on walls, making it both a practical
              and stylish choice for any home.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Wallpaper;
