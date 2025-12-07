import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "123 Forge Street, Iron District",
      subContent: "New York, NY 10001",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subContent: "Mon-Fri: 6AM - 10PM",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ironforge.gym",
      subContent: "support@ironforge.gym",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "24/7 Access",
      subContent: "Staff: 6AM - 10PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-background clip-diagonal hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Left side - Contact info */}
          <div>
            <ScrollReveal>
              <span className="text-primary font-oswald text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">
                Get in touch
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bebas text-foreground mb-6 sm:mb-8">
                CONTACT <span className="text-primary">US</span>
              </h2>
              <p className="text-muted-foreground font-oswald text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-md">
                Ready to start your transformation? Reach out and we'll help you
                take the first step towards your goals.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={index * 0.1}>
                    <motion.div
                      className="p-4 sm:p-5 md:p-6 bg-secondary border-l-4 border-primary"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                      data-cursor
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-bebas text-lg sm:text-xl text-foreground mb-1">
                            {item.title}
                          </h4>
                          <p className="text-foreground font-oswald text-xs sm:text-sm">
                            {item.content}
                          </p>
                          <p className="text-muted-foreground font-oswald text-xs sm:text-sm">
                            {item.subContent}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right side - Form */}
          <ScrollReveal direction="right" className="lg:pl-4 xl:pl-8">
            <form
              onSubmit={handleSubmit}
              className="bg-background p-5 sm:p-6 md:p-8 border-2 border-border relative"
            >
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-t-4 border-l-4 border-primary -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-t-4 border-r-4 border-primary translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-b-4 border-l-4 border-primary -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-b-4 border-r-4 border-primary translate-x-1 translate-y-1" />

              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bebas text-foreground mb-4 sm:mb-6">
                SEND US A MESSAGE
              </h3>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <label className="block text-sm font-oswald text-muted-foreground mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border-2 border-border text-foreground font-oswald focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                    data-cursor
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-oswald text-muted-foreground mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-2 border-border text-foreground font-oswald text-sm sm:text-base focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      data-cursor
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-oswald text-muted-foreground mb-2 uppercase tracking-wider">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-2 border-border text-foreground font-oswald text-sm sm:text-base focus:border-primary focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                      data-cursor
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-oswald text-muted-foreground mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary border-2 border-border text-foreground font-oswald focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your fitness goals..."
                    data-cursor
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-4 bg-primary text-primary-foreground font-bebas text-lg sm:text-xl tracking-wider brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 sm:gap-3 group"
                  data-cursor
                  data-cursor-text="SEND"
                >
                  {isSubmitting ? (
                    "SENDING..."
                  ) : (
                    <>
                      SEND MESSAGE
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
