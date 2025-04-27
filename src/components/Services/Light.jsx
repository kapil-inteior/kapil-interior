import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/light.jpg";

const Light = () => {
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
              Lighting
            </h2>
            <p className="text-xl">
              Lighting plays an integral part in interior design, offering both
              functionality and aesthetic enhancement. We provide a range of
              lighting solutions to suit your style and specific needs. From
              overhead ceiling lights and wall-mounted sconces to stylish table
              lamps, our lighting options are designed to enhance the mood of
              your space. Light, a form of electromagnetic radiation visible to
              the human eye, varies in characteristics such as direction, color,
              and brightness, and is essential for illuminating environments and
              elevating their visual charm. The right lighting does more than
              just improve visibility—it creates a warm, inviting atmosphere.
              Various lighting types, including task, accent, and ambient
              lighting, serve specific roles in transforming any room.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Light;
