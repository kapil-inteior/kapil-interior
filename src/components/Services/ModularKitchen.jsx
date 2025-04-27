import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/kitchen.jpg";
const ModularKitchen = () => {
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
              Modular Kitchen
            </h2>
            <p className="text-xl">
              Our modular kitchen designs are crafted to meet the demands of
              contemporary homes, embracing the latest trends and personal
              preferences. With a focus on functionality, style, and
              cost-effectiveness, we use modular units that make installation,
              maintenance, and future upgrades hassle-free. A modular kitchen is
              made up of pre-built cabinets and shelves in standardized sizes,
              which can be tailored and arranged to fit your kitchen’s layout
              and storage needs. These kitchens maximize storage, enhance
              organization, and offer a sleek, customized aesthetic that
              elevates the overall appeal of your space.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ModularKitchen;
