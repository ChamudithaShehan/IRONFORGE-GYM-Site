import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "STARTER",
    price: "49",
    period: "month",
    description: "Perfect for beginners ready to start their fitness journey",
    features: [
      "Full gym floor access",
      "Locker room & showers",
      "2 group classes per month",
      "Initial fitness assessment",
      "Mobile app access",
      "Free Wi-Fi",
      "Basic equipment orientation",
    ],
    popular: false,
  },
  {
    name: "WARRIOR",
    price: "79",
    period: "month",
    description: "For dedicated athletes who want more from their training",
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "1 personal training session/month",
      "Recovery zone access (sauna, steam)",
      "Nutrition consultation (1/month)",
      "Priority class booking",
      "Advanced equipment access",
      "Progress tracking tools",
    ],
    popular: true,
  },
  {
    name: "ELITE",
    price: "129",
    period: "month",
    description: "The ultimate package for serious transformation",
    features: [
      "All Warrior benefits included",
      "4 personal training sessions/month",
      "Custom meal plans & nutrition",
      "Body composition analysis (monthly)",
      "Guest passes (2 per month)",
      "Exclusive member events",
      "VIP locker with amenities",
      "Priority trainer selection",
      "Complimentary recovery services",
    ],
    popular: false,
  },
  {
    name: "CORPORATE",
    price: "Custom",
    period: "",
    description: "Tailored solutions for teams and businesses",
    features: [
      "Flexible membership tiers",
      "Team fitness challenges & events",
      "On-site wellness programs",
      "Dedicated account manager",
      "Monthly usage reports",
      "Volume pricing discounts",
      "Custom billing options",
      "Employee health assessments",
    ],
    popular: false,
  },
];

const PlansCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
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

  const cardWidth = width < 768 ? width - 48 : width < 1024 ? (width - 72) / 2 : (width - 120) / 4;
  const gap = 24;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, plans.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="plans" className="py-24 bg-card relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-32 bg-background clip-diagonal" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-background clip-diagonal-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-12 sm:pt-16">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-oswald text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">
            Choose your path
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bebas text-foreground">
            MEMBERSHIP <span className="text-primary">PLANS</span>
          </h2>
          <p className="text-muted-foreground font-oswald text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 sm:mt-4 px-4 sm:px-0">
            No contracts. No hidden fees. Just pure results.
          </p>
        </ScrollReveal>

        <div ref={carouselRef} className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: -currentIndex * (cardWidth + gap) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ gap }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className="flex-shrink-0"
                style={{ width: cardWidth }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`relative h-full p-5 sm:p-6 md:p-8 border-2 transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground border-primary brutal-shadow"
                      : "bg-secondary border-border hover:border-primary"
                  }`}
                  data-cursor
                  data-cursor-text="SELECT"
                >
                  {plan.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 sm:py-1 bg-foreground text-background font-bebas text-xs sm:text-sm tracking-wider">
                      MOST POPULAR
                    </div>
                  )}

                  <h3 className="text-2xl sm:text-2xl md:text-3xl font-bebas mb-1 sm:mb-2">{plan.name}</h3>
                  <p
                    className={`text-xs sm:text-sm font-oswald mb-4 sm:mb-6 ${
                      plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-6 sm:mb-8">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bebas">
                      {plan.price === "Custom" ? "" : "$"}
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-xs sm:text-sm font-oswald ${
                          plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"
                        }`}
                      >
                        /{plan.period}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm font-oswald">
                        <Check
                          className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-primary-foreground" : "text-primary"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      if (plan.price === "Custom") {
                        // Scroll to contact section
                        const contactSection = document.getElementById("contact");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      } else {
                        // Handle membership signup - can be connected to a signup flow
                        window.location.href = "#contact";
                      }
                    }}
                    className={`w-full py-3 sm:py-4 font-bebas text-base sm:text-lg tracking-wider transition-all duration-200 ${
                      plan.popular
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "bg-primary text-primary-foreground brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    }`}
                    data-cursor
                  >
                    {plan.price === "Custom" ? "CONTACT US" : "GET STARTED"}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
            data-cursor
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= plans.length - (width < 768 ? 1 : width < 1024 ? 2 : 4)}
            className="w-12 h-12 bg-primary text-primary-foreground hover:bg-transparent hover:text-primary border-2 border-primary transition-all duration-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
            data-cursor
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlansCarousel;
