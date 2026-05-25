import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import tailwindLogo from "../../assets/tailwind.png";
import nodeLogo from "../../assets/node.png";
import pnpmLogo from "../../assets/pnpm.png";
import githubLogo from "../../assets/github.png";
import pythonLogo from "../../assets/python.png";
import phpLogo from "../../assets/php.png";
import jsLogo from "../../assets/js.png";
import bootstrapLogo from "../../assets/bootstrap.png";

const logos = [
  reactLogo, viteLogo, pnpmLogo, tailwindLogo, githubLogo,
  pythonLogo, bootstrapLogo, jsLogo, phpLogo, nodeLogo,
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="py-12 bg-[#0a0a0a] overflow-hidden border-y border-white/5"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center pb-10 font-bold text-[2rem]"
      >
        TECH STACK
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex animate-marquee whitespace-nowrap"
      >
        {[0, 1].map((i) => (
          <div key={i} className="flex gap-24 items-center px-12">
            {logos.map((logo, index) => (
              <img
                key={`${i}-${index}`}
                src={logo}
                alt="tech logo"
                className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;