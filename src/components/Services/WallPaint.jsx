import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/wallpaint.webp";

const WallPaint = () => {
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
              Wall Paint
            </h2>
            <p className="text-xl">
              We provide an extensive range of wall paint choices, featuring a
              variety of textures and finishes, designed to bring depth and
              personality to your walls. Our skilled team of painters will guide
              you in selecting the perfect color and finish that aligns with
              your taste and preferences. Available in numerous shades and
              styles, our paints are crafted to enhance the charm of any room.
            </p>
            <p className="text-xl">
              Wall paint is specially designed to color and transform a room’s
              walls. With a vast selection of colors and finishes, it sets the
              tone and style of any space. Beyond covering imperfections, wall
              paint, when paired with other design elements, helps create a
              cohesive and aesthetically pleasing look throughout your home.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default WallPaint;
