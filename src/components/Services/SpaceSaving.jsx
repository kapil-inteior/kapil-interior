import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/space.jpg";

const SpaceSaving = () => {
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
              Space Saving Furniture
            </h2>
            <p className="text-xl">
              In today’s world, space-saving furniture has become a necessity.
              We provide a range of practical and stylish solutions to meet your
              space optimization needs. From wall-mounted beds to foldable
              tables and chairs, we offer everything you need to make the most
              of your space. Crafted to maximize room efficiency, our
              space-saving furniture is ideal for smaller homes or apartments
              where every square foot matters. These adaptable, multi-purpose
              pieces allow you to maximize limited space while maintaining style
              and comfort.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SpaceSaving;
