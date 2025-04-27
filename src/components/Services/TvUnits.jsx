import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/tvunit.jpg";

const TvUnits = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full py-12 px-4 bg-gray-100 mt-20"
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
              TV Units
            </h2>
            <p className="text-xl">
              Our TV units are designed to enhance your living room’s aesthetic
              while offering ample storage space. Elegant and fully
              customizable, these units reflect your personal taste and style.
              Built to securely hold and showcase your television, they also
              feature additional compartments for media devices and accessories.
              These units not only provide a designated spot for your TV but
              also help organize your living space, offering practical storage
              solutions for all your entertainment essentials.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default TvUnits;
