import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo and description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.a
              href="#home"
              className="text-3xl sm:text-4xl md:text-5xl font-bebas text-foreground inline-block mb-4 sm:mb-6"
              whileHover={{ scale: 1.02 }}
              data-cursor
            >
              <span>IRON</span>
              <span className="text-primary">FORGE</span>
            </motion.a>
            <p className="text-muted-foreground font-oswald mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Where legends are forged. Join our community of warriors dedicated
              to pushing beyond limits and achieving the extraordinary.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                    whileHover={{ y: -3 }}
                    data-cursor
                  >
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bebas text-lg sm:text-xl text-foreground mb-4 sm:mb-6 relative inline-block">
                {section.title}
                <span className="absolute left-0 -bottom-1 w-6 sm:w-8 h-0.5 bg-primary" />
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground font-oswald text-xs sm:text-sm hover:text-primary transition-colors relative group"
                      data-cursor
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4 text-center sm:text-left">
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
