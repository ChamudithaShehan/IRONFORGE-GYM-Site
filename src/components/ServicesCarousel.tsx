import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Users, Clock, Zap, Heart, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Dumbbell,
    title: "STRENGTH TRAINING",
    description: "Build raw power with our state-of-the-art equipment and expert guidance. From powerlifting to functional strength.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070",
  },
  {
    icon: Users,
    title: "GROUP CLASSES",
    description: "High-energy sessions that push your limits. HIIT, CrossFit, Boxing, and more. Train hard, together.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070",
  },
  {
    icon: Clock,
    title: "24/7 ACCESS",
    description: "Your schedule, your rules. Train whenever inspiration strikes with round-the-clock gym access.",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069",
  },
  {
    icon: Zap,
    title: "PERSONAL TRAINING",
    description: "One-on-one sessions with elite trainers. Customized programs designed for your unique goals.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
  },
  {
    icon: Heart,
    title: "RECOVERY ZONE",
    description: "Optimize recovery with our sauna, cold plunge, massage therapy, and stretching areas.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120",
  },
  {
    icon: Target,
    title: "NUTRITION COACHING",
    description: "Fuel your gains with personalized meal plans and nutrition guidance from certified experts.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053",
  },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const cardWidth = width < 768 ? width - 48 : width < 1024 ? (width - 72) / 2 : (width - 96) / 3;
  const gap = 24;
  const cardsPerView = width < 768 ? 1 : width < 1024 ? 2 : 3;

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || width === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const currentCardsPerView = width < 768 ? 1 : width < 1024 ? 2 : 3;
        const calculatedMaxIndex = Math.max(0, services.length - currentCardsPerView);
        
        if (calculatedMaxIndex === 0) {
          // If all cards fit on screen, just loop through all of them
          return (prev + 1) % services.length;
        }
        
        if (prev >= calculatedMaxIndex) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, width]);


  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, hsl(var(--primary)) 50px, hsl(var(--primary)) 51px)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-0">
            <div>
              <span className="text-primary font-oswald text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">
                What we offer
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bebas text-foreground">
                OUR <span className="text-stroke-primary">SERVICES</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div 
          ref={carouselRef} 
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{ x: -currentIndex * (cardWidth + gap) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ gap }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="flex-shrink-0 group"
                  style={{ width: cardWidth }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden bg-card border-2 border-border hover:border-primary transition-colors duration-300"
                    data-cursor
                    data-cursor-text="VIEW"
                  >
                    {/* Image */}
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                      <motion.div
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary flex items-center justify-center mb-4 sm:mb-6"
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bebas text-foreground mb-2 sm:mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground font-oswald text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Hover line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-primary origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => {
            // Calculate which dot should be active based on current view
            const isActive = index >= currentIndex && index < currentIndex + cardsPerView;
            return (
              <div
                key={index}
                className={`h-2 transition-all duration-300 ${
                  isActive ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
