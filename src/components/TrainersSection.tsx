import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const trainers = [
  {
    name: "MARCUS STEEL",
    role: "Head Coach",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974",
    instagram: "#",
    twitter: "#",
  },
  {
    name: "SARAH PHOENIX",
    role: "Fitness Director",
    specialty: "HIIT & CrossFit",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974",
    instagram: "#",
    twitter: "#",
  },
  {
    name: "JAMES TITAN",
    role: "Personal Trainer",
    specialty: "Bodybuilding",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=1913",
    instagram: "#",
    twitter: "#",
  },
  {
    name: "ELENA STORM",
    role: "Yoga Instructor",
    specialty: "Flexibility & Recovery",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070",
    instagram: "#",
    twitter: "#",
  },
];

const reviews = [
  {
    id: 1,
    name: "Marcus Steel",
    rating: 5,
    review: "The trainers at Fitness Cube are world-class. Marcus helped me break through plateaus I've been stuck on for months.",
    plan: "ELITE",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    review: "Sarah's HIIT classes are intense and motivating. I've seen incredible results in just 3 months!",
    plan: "WARRIOR",
  },
  {
    id: 3,
    name: "David Chen",
    rating: 5,
    review: "James is an amazing personal trainer. His expertise in bodybuilding has transformed my physique completely.",
    plan: "ELITE",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    rating: 5,
    review: "Elena's yoga sessions are perfect for recovery. The flexibility and mindfulness training is exactly what I needed.",
    plan: "WARRIOR",
  },
  {
    id: 5,
    name: "Michael Brown",
    rating: 5,
    review: "Best gym experience ever! The facilities are top-notch and the trainers are incredibly knowledgeable.",
    plan: "ELITE",
  },
  {
    id: 6,
    name: "Amanda Lee",
    rating: 5,
    review: "I've tried many gyms, but Fitness Cube is on another level. The community and support here is unmatched.",
    plan: "WARRIOR",
  },
];

// Duplicate reviews for seamless infinite scroll
const duplicatedReviews = [...reviews, ...reviews, ...reviews];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 sm:w-4 sm:h-4 ${star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
        />
      ))}
    </div>
  );
};

const TrainersSection = () => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [isPaused1, setIsPaused1] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);

  useEffect(() => {
    const updateWidth1 = () => {
      if (containerRef1.current) {
        setWidth1(containerRef1.current.offsetWidth);
      }
    };
    const updateWidth2 = () => {
      if (containerRef2.current) {
        setWidth2(containerRef2.current.offsetWidth);
      }
    };
    updateWidth1();
    updateWidth2();
    window.addEventListener("resize", updateWidth1);
    window.addEventListener("resize", updateWidth2);
    return () => {
      window.removeEventListener("resize", updateWidth1);
      window.removeEventListener("resize", updateWidth2);
    };
  }, []);

  const cardWidth = width1 < 768 ? width1 - 32 : (width1 - 48) / 2;
  const gap = 24;
  const singleSetWidth = (cardWidth + gap) * reviews.length;

  return (
    <section id="trainers" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-oswald text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">
            Meet the legends
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bebas text-foreground">
            OUR <span className="text-stroke-primary">TRAINERS</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trainers.map((trainer, index) => (
            <ScrollReveal key={trainer.name} delay={index * 0.1}>
              <motion.div
                className="group relative overflow-hidden bg-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                data-cursor
                data-cursor-text="VIEW"
              >
                {/* Image */}
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social icons */}
                  <motion.div
                    className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex gap-2 sm:gap-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={trainer.instagram}
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-primary text-primary-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                      data-cursor
                    >
                      <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                    <a
                      href={trainer.twitter}
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-primary text-primary-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                      data-cursor
                    >
                      <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 border-t-2 border-primary">
                  <h3 className="text-xl sm:text-2xl font-bebas text-foreground mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-primary font-oswald text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2">
                    {trainer.role}
                  </p>
                  <p className="text-muted-foreground font-oswald text-xs sm:text-sm">
                    {trainer.specialty}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-primary border-l-[60px] border-l-transparent transition-all duration-300 group-hover:border-t-[80px] group-hover:border-l-[80px]" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Reviews Section */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 sm:mt-20 md:mt-24">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-primary font-oswald text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">
                What members say
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas text-foreground">
                MEMBER <span className="text-primary">REVIEWS</span>
              </h3>
            </div>

            {/* Two Part Carousel */}
            <div className="space-y-6 sm:space-y-8">
              {/* First Carousel - Scrolls Left */}
              <div
                ref={containerRef1}
                className="overflow-hidden"
                onMouseEnter={() => setIsPaused1(true)}
                onMouseLeave={() => setIsPaused1(false)}
              >
                <motion.div
                  className="flex"
                  animate={isPaused1 ? {} : { x: [-singleSetWidth, 0] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: width1 > 0 ? 50 : 0,
                      ease: "linear",
                    },
                  }}
                  style={{ gap, width: "fit-content" }}
                >
                  {duplicatedReviews.map((review, index) => (
                    <motion.div
                      key={`left-${review.id}-${index}`}
                      className="flex-shrink-0"
                      style={{ width: cardWidth }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index % reviews.length) * 0.1 }}
                    >
                      <div className="bg-card border-2 border-border p-5 sm:p-6 md:p-8 hover:border-primary transition-colors duration-300 h-full">
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1 sm:mb-2">
                              <h4 className="font-bebas text-lg sm:text-xl text-foreground">
                                {review.name}
                              </h4>
                              <span className="text-xs font-oswald text-primary bg-primary/10 px-2 py-0.5">
                                {review.plan}
                              </span>
                            </div>
                            <StarRating rating={review.rating} />
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base font-oswald text-muted-foreground leading-relaxed">
                          "{review.review}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Second Carousel - Scrolls Right */}
              <div
                ref={containerRef2}
                className="overflow-hidden"
                onMouseEnter={() => setIsPaused2(true)}
                onMouseLeave={() => setIsPaused2(false)}
              >
                <motion.div
                  className="flex"
                  animate={isPaused2 ? {} : { x: [0, -singleSetWidth] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: width2 > 0 ? 50 : 0,
                      ease: "linear",
                    },
                  }}
                  style={{ gap, width: "fit-content" }}
                >
                  {duplicatedReviews.map((review, index) => (
                    <motion.div
                      key={`right-${review.id}-${index}`}
                      className="flex-shrink-0"
                      style={{ width: cardWidth }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index % reviews.length) * 0.1 }}
                    >
                      <div className="bg-card border-2 border-border p-5 sm:p-6 md:p-8 hover:border-primary transition-colors duration-300 h-full">
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1 sm:mb-2">
                              <h4 className="font-bebas text-lg sm:text-xl text-foreground">
                                {review.name}
                              </h4>
                              <span className="text-xs font-oswald text-primary bg-primary/10 px-2 py-0.5">
                                {review.plan}
                              </span>
                            </div>
                            <StarRating rating={review.rating} />
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base font-oswald text-muted-foreground leading-relaxed">
                          "{review.review}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrainersSection;
