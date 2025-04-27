import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/falseceiling.jpg";

const FalseCeiling = () => {
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
              False Ceiling
            </h2>
            <p className="text-xl">
              Our false ceiling solutions are designed to add elegance and flair
              to your living or work spaces. Whether you lean towards
              contemporary designs or prefer a more classic look, our false
              ceilings are customized to suit your style and budget. This
              suspended ceiling, installed beneath the actual ceiling,
              effectively conceals electrical and mechanical systems, improves
              acoustics, and creates a visually captivating atmosphere. False
              ceilings not only enhance sound quality and hide unsightly
              utilities, but they also serve as a beautiful decorative feature
              for any room.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default FalseCeiling;
