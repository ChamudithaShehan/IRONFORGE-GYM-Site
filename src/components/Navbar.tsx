import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SignInModal from "./SignInModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: isHomePage ? "#home" : "/" },
    { name: "SERVICES", href: isHomePage ? "#services" : "/#services" },
    { name: "PLANS", href: isHomePage ? "#plans" : "/#plans" },
    { name: "TRAINERS", href: isHomePage ? "#trainers" : "/#trainers" },
    { name: "GALLERY", href: "/gallery" },
    { name: "REVIEWS", href: "/reviews" },
    { name: "CONTACT", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg"
            : ""
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            data-cursor
            data-cursor-text="HOME"
          >
            <img
              src="/logo.png"
              alt="Fitness Cube"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => {
              const isExternal = item.href.startsWith("#") || item.href.startsWith("/#");
              const NavComponent = isExternal ? "a" : Link;
              const navProps = isExternal ? { href: item.href } : { to: item.href };

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavComponent
                    {...navProps as any}
                    className="text-sm font-oswald font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                    data-cursor
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </NavComponent>
                </motion.div>
              );
            })}

            {/* Profile Link */}
            <Link to="/profile" data-cursor data-cursor-text="PROFILE">
              <motion.div
                className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <User size={20} />
              </motion.div>
            </Link>

            <motion.button
              onClick={() => setShowSignIn(true)}
              className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 bg-primary text-primary-foreground font-bebas text-base sm:text-lg tracking-wider brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor
              data-cursor-text="LOGIN"
            >
              SIGN IN
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-foreground p-2"
            whileTap={{ scale: 0.9 }}
            data-cursor
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-card z-50 p-6 sm:p-8 flex flex-col"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-foreground mb-12"
                data-cursor
              >
                <X size={28} />
              </button>
              <div className="flex flex-col gap-6">
                {navItems.map((item, i) => {
                  const isExternal = item.href.startsWith("#") || item.href.startsWith("/#");

                  if (isExternal) {
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        custom={i}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        className="text-3xl font-bebas text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                        data-cursor
                      >
                        {item.name}
                      </motion.a>
                    );
                  }

                  return (
                    <motion.div
                      key={item.name}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={item.href}
                        className="text-3xl font-bebas text-foreground hover:text-primary transition-colors block"
                        onClick={() => setIsOpen(false)}
                        data-cursor
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Profile Link */}
                <motion.div
                  custom={navItems.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Link
                    to="/profile"
                    className="text-3xl font-bebas text-foreground hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                    data-cursor
                  >
                    <User size={28} />
                    PROFILE
                  </Link>
                </motion.div>

                <motion.button
                  custom={navItems.length + 1}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => {
                    setIsOpen(false);
                    setShowSignIn(true);
                  }}
                  className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-bebas text-xl tracking-wider brutal-shadow-sm"
                  data-cursor
                >
                  SIGN IN
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SignInModal isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
    </>
  );
};

export default Navbar;
