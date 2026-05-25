import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastYRef.current;
    if (diff > 8 && y > 80) {
      setHidden(true);
    } else if (diff < -8) {
      setHidden(false);
    }
    lastYRef.current = y;
  });

  useEffect(() => {
    const observers = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={hidden ? { y: -80, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 flex items-center px-4 md:px-8 py-4 md:py-6 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-bold tracking-tighter text-white cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        ABEL
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="ml-auto flex items-center gap-1.5 md:gap-2 overflow-x-auto no-scrollbar pl-4"
      >
        {navItems.map(({ label, id }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-[10px] md:text-sm px-4 py-2 rounded-full transition-all duration-300 border ${
                isActive
                  ? "bg-blue-500/20 border-blue-500 text-blue-400 font-semibold"
                  : "border-blue-500/50 text-white hover:bg-blue-500/10"
              }`}
            >
              {label}
            </button>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;