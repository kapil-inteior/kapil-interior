import { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.jpg";
import gallery10 from "../assets/gallery10.jpg";
import gallery11 from "../assets/gallery11.jpg";
import gallery12 from "../assets/gallery12.jpg";
import gallery13 from "../assets/gallery13.jpg";
import gallery14 from "../assets/gallery14.jpg";
import gallery15 from "../assets/gallery15.jpg";
import gallery16 from "../assets/gallery16.jpg";
import gallery17 from "../assets/gallery17.jpg";
import gallery18 from "../assets/gallery18.jpg";
import gallery19 from "../assets/gallery19.jpg";
import gallery20 from "../assets/gallery20.jpg";
import gallery21 from "../assets/gallery21.jpg";
import gallery22 from "../assets/gallery22.jpg";
import gallery23 from "../assets/gallery23.jpg";
import gallery24 from "../assets/gallery24.jpg";
import gallery25 from "../assets/gallery25.jpg";
import gallery26 from "../assets/gallery26.jpg";
import gallery27 from "../assets/gallery27.jpg";
import gallery28 from "../assets/gallery28.jpg";
import gallery29 from "../assets/gallery29.jpg";
import gallery30 from "../assets/gallery30.jpg";
import gallery31 from "../assets/gallery31.jpg";


Modal.setAppElement("#root");

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { id: 1, src: gallery1, alt: "Image 1" },
    { id: 2, src: gallery2, alt: "Image 2" },
    { id: 3, src: gallery3, alt: "Image 3" },
    { id: 4, src: gallery4, alt: "Image 4" },
    { id: 5, src: gallery5, alt: "Image 5" },
    { id: 6, src: gallery6, alt: "Image 6" },
    { id: 7, src: gallery7, alt: "Image 7" },
    { id: 8, src: gallery8, alt: "Image 8" },
    { id: 9, src: gallery9, alt: "Image 9" },
    { id: 10, src: gallery10, alt: "Image 10" },
    { id: 11, src: gallery11, alt: "Image 11" },
    { id: 12, src: gallery12, alt: "Image 12" },
    { id: 13, src: gallery13, alt: "Image 13" },
    { id: 14, src: gallery14, alt: "Image 14" },
    { id: 15, src: gallery15, alt: "Image 15" },
    { id: 16, src: gallery16, alt: "Image 16" },
    { id: 17, src: gallery17, alt: "Image 17" },
    { id: 18, src: gallery18, alt: "Image 18" },
    { id: 19, src: gallery19, alt: "Image 19" },
    { id: 20, src: gallery20, alt: "Image 20" },
    { id: 21, src: gallery21, alt: "Image 21" },
    { id: 22, src: gallery22, alt: "Image 22" },
    { id: 23, src: gallery23, alt: "Image 23" },
    { id: 24, src: gallery24, alt: "Image 24" },
    { id: 25, src: gallery25, alt: "Image 25" },
    { id: 26, src: gallery26, alt: "Image 26" },
    { id: 27, src: gallery27, alt: "Image 27" },
    { id: 28, src: gallery28, alt: "Image 28" },
    { id: 29, src: gallery29, alt: "Image 29" },
    { id: 30, src: gallery30, alt: "Image 30" },
    { id: 31, src: gallery31, alt: "Image 31" },
  ];
  

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
    
      <div className="w-full py-12 flex flex-col items-center bg-gray-100">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Gallery
        </motion.h2>

        {/* Gallery Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-96 h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                onClick={() => handleImageClick(image.src)}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal using React Modal */}
        <Modal
          isOpen={selectedImage !== null}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="fixed inset-0 flex justify-center items-center bg-transparent bg-opacity-60 z-20 mt-28"
          overlayClassName="fixed inset-0 bg-black bg-opacity-60"
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-screen object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            />
            <motion.button
              className="absolute top-4 right-4 p-3 text-white rounded-full bg-transparent hover:text-black transition-all duration-300"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              X
            </motion.button>
          </motion.div>
        </Modal>
      </div>
    </>
  );
};

export default Gallery;