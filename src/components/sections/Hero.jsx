import React from "react";
import abelAnime from "../../assets/Abel-Anime.png";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 pt-32 pb-20"
    >
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
          HALO, SAYA <br />
          <span className="text-blue-500">ABEL SAFERYAN</span>.
          <br />
          SAYA MEMBANGUN <br />
          ANTARMUKA YANG PRESISI.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light">
          Frontend Developer & Music Enthusiast | Coding interfaces that
          resonate. | Alias Gabut aja
        </p>
        <button
          onClick={() => scrollToSection("projects")}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
        >
          LIHAT PROYEK SAYA
        </button>
      </div>

      <div className="flex-1 flex justify-center mt-12 md:mt-0 relative">
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="relative border-2 border-blue-500/30 rounded-full p-2">
          <img
            src={abelAnime}
            alt="Abel Anime Profile"
            className="w-80 h-80 md:w-[450px] md:h-auto object-cover rounded-full z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
