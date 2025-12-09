import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070",
    title: "Main Training Floor",
    category: "Facilities",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975",
    title: "Cardio Zone",
    category: "Facilities",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?q=80&w=2070",
    title: "Free Weights Area",
    category: "Equipment",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070",
    title: "Group Classes",
    category: "Training",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2071",
    title: "Personal Training",
    category: "Training",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069",
    title: "Boxing Ring",
    category: "Facilities",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069",
    title: "Stretching Zone",
    category: "Facilities",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070",
    title: "CrossFit Box",
    category: "Training",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070",
    title: "Deadlift Platform",
    category: "Equipment",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974",
    title: "Cable Machines",
    category: "Equipment",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2070",
    title: "Battle Ropes",
    category: "Equipment",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070",
    title: "Competition Stage",
    category: "Events",
  },
];

const categories = ["All", "Facilities", "Equipment", "Training", "Events"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8"
              data-cursor
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              <span className="font-oswald text-sm sm:text-base">Back to Home</span>
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-primary text-primary font-oswald text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6">
                Our Space
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bebas text-foreground">
                THE <span className="text-primary glitch">GALLERY</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-oswald max-w-2xl mx-auto mt-4 sm:mt-6 px-4 sm:px-0">
                Step inside Fitness Cube. Explore our world-class facilities,
                cutting-edge equipment, and the warriors who train here.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 font-bebas text-sm sm:text-base md:text-lg tracking-wider transition-all duration-300 ${activeCategory === category
                      ? "bg-primary text-primary-foreground brutal-shadow-sm"
                      : "border-2 border-muted text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layoutId={`image-${image.id}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                  data-cursor
                  data-cursor-text="VIEW"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary font-oswald text-sm tracking-wider uppercase">
                      {image.category}
                    </span>
                    <h3 className="text-2xl font-bebas text-foreground mt-1">
                      {image.title}
                    </h3>
                  </div>
                  <motion.div
                    className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-foreground hover:text-primary transition-colors z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setSelectedImage(null)}
              data-cursor
            >
              <X size={28} className="sm:w-10 sm:h-10" />
            </motion.button>

            <motion.div
              layoutId={`image-${selectedImage.id}`}
              className="relative max-w-5xl max-h-[85vh] sm:max-h-[80vh] overflow-hidden mx-4 sm:mx-0"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-background to-transparent">
                <span className="text-primary font-oswald text-xs sm:text-sm tracking-wider uppercase">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-foreground mt-1 sm:mt-2">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;