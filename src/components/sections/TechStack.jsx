import React from "react";
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

const TechStack = () => {
  const logos = [
    reactLogo,
    viteLogo,
    pnpmLogo,
    tailwindLogo,
    githubLogo,
    pythonLogo,
    bootstrapLogo,
    jsLogo,
    phpLogo,
    nodeLogo,
  ];

  return (
    <div className="py-12 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <h1 className="animate-pulse text-center py-12 font-bold text-[2rem]">TECH STACK</h1>
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex gap-24 items-center px-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="tech logo"
              className="filter drop-shadow(0 0 5px rgba(255,255,255,0.2)) h-10 md:h-12 w-auto object-contain"
            />
          ))}
        </div>

        <div className="flex gap-24 items-center px-12">
          {logos.map((logo, index) => (
            <img
              key={`dup-${index}`}
              src={logo}
              alt="tech logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TechStack;
