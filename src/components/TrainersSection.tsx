import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
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

const TrainersSection = () => {
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
      </div>
    </section>
  );
};

export default TrainersSection;
