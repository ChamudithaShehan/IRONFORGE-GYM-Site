import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center md:items-start justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </motion.div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-primary/20"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 1.5 }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 border border-primary text-primary font-oswald text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            Welcome to the club
          </span>
        </motion.div>

        <div className="overflow-hidden -mb-1 sm:mb-0 md:mb-1">
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bebas leading-none text-foreground"
          >
            BUILD YOUR
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-0 sm:mb-1 md:mb-2">
          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bebas leading-none"
          >
            <span className="text-stroke">LEGEND</span>
            <span className="text-primary glitch">ARY</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-1 sm:mb-2 md:mb-3">
          <motion.h1
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bebas leading-none text-foreground"
          >
            PHYSIQUE
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-oswald max-w-2xl mx-auto mb-3 sm:mb-4 md:mb-5 px-4 sm:px-0"
        >
          Transform your body, elevate your mind. Join the elite community
          of warriors who refuse to settle for ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0 mb-6 sm:mb-8 md:mb-10"
        >
          <a
            href="#plans"
            className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-primary text-primary-foreground font-bebas text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            data-cursor
            data-cursor-text="JOIN"
          >
            START YOUR JOURNEY
          </a>
          <a
            href="#services"
            className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 border-2 border-foreground text-foreground font-bebas text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider hover:bg-foreground hover:text-background transition-all duration-200"
            data-cursor
            data-cursor-text="EXPLORE"
          >
            EXPLORE SERVICES
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-3 sm:py-4 bg-primary overflow-hidden">
        <div className="marquee whitespace-nowrap">
          <span className="inline-block text-primary-foreground font-bebas text-sm sm:text-base md:text-xl tracking-[0.2em] sm:tracking-[0.3em] mx-4 sm:mx-8">
            STRENGTH • POWER • DISCIPLINE • RESULTS • STRENGTH • POWER • DISCIPLINE • RESULTS • STRENGTH • POWER • DISCIPLINE • RESULTS • STRENGTH • POWER • DISCIPLINE • RESULTS •
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
