import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/storage.webp";

const Storage = () => {
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
              Storage & Wardrobe
            </h2>
            <p className="text-xl">
              Our expert storage solutions ensure you never have to sacrifice
              space or organization. Our wardrobes are designed to maximize
              space and can be fully customized to fit your style and needs.
              Whether it's wardrobe cabinets or dressers, our furniture promotes
              efficient storage, helping you maintain a neat and organized
              living space. It offers a stylish and practical solution for
              storing clothing and personal belongings, keeping your home both
              functional and clutter-free.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Storage;
