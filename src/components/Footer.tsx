import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Youtube, ChevronDown } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Membership", href: "#plans" },
        { name: "Trainers", href: "#trainers" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Strength Training", href: "#services" },
        { name: "Group Classes", href: "#services" },
        { name: "Personal Training", href: "#services" },
        { name: "Recovery Zone", href: "#services" },
        { name: "Nutrition Coaching", href: "#services" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Refund Policy", href: "#" },
        { name: "Accessibility", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-background border-t-2 border-border relative overflow-hidden">
      {/* Top marquee */}
      <div className="py-3 sm:py-4 bg-primary overflow-hidden">
        <div className="marquee whitespace-nowrap">
          <span className="inline-block text-primary-foreground font-bebas text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.3em] mx-4 sm:mx-8">
            JOIN THE FORGE • TRANSFORM YOUR LIFE • BUILD YOUR LEGACY • JOIN THE FORGE • TRANSFORM YOUR LIFE • BUILD YOUR LEGACY • JOIN THE FORGE • TRANSFORM YOUR LIFE • BUILD YOUR LEGACY •
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col md:grid md:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          {/* Logo and description - Always visible */}
          <div className="md:col-span-2">
            <motion.a
              href="#home"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bebas text-foreground inline-block mb-3 sm:mb-4 md:mb-6"
              whileHover={{ scale: 1.02 }}
              data-cursor
            >
              <span>IRON</span>
              <span className="text-primary">FORGE</span>
            </motion.a>
            <p className="text-muted-foreground font-oswald mb-4 sm:mb-5 md:mb-6 max-w-sm text-xs sm:text-sm md:text-base leading-relaxed">
              Where legends are forged. Join our community of warriors dedicated
              to pushing beyond limits and achieving the extraordinary.
            </p>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                    whileHover={{ y: -3 }}
                    data-cursor
                    aria-label={`Follow us on ${social.icon.name}`}
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links - Collapsible on mobile */}
          {footerLinks.map((section) => {
            const isOpen = openSections[section.title] ?? false;
            const toggleSection = () => {
              setOpenSections((prev) => ({
                ...prev,
                [section.title]: !prev[section.title],
              }));
            };

            return (
              <div key={section.title} className="border-b md:border-b-0 border-border pb-4 md:pb-0 last:border-b-0">
                <button
                  onClick={toggleSection}
                  className="md:pointer-events-none w-full flex items-center justify-between md:justify-start mb-3 md:mb-4 lg:mb-6 md:cursor-default"
                >
                  <h4 className="font-bebas text-base sm:text-lg md:text-xl text-foreground relative inline-block">
                    {section.title}
                    <span className="absolute left-0 -bottom-1 w-6 sm:w-8 h-0.5 bg-primary hidden md:block" />
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 md:hidden transition-transform duration-200 text-muted-foreground ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.ul
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 sm:space-y-2.5 md:space-y-3 overflow-hidden md:!h-auto md:!opacity-100"
                >
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground font-oswald text-xs sm:text-sm hover:text-primary transition-colors relative group block py-1 md:py-0"
                        data-cursor
                      >
                        {link.name}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </motion.ul>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-7 md:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-3 md:gap-4 text-center sm:text-left">
          <p className="text-muted-foreground font-oswald text-xs sm:text-sm">
            © {currentYear} IRONFORGE GYM. All rights reserved.
          </p>
          <p className="text-muted-foreground font-oswald text-xs sm:text-sm">
            Forging legends since 2010
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
