import React, { useEffect, useRef } from "react";
import abelAnime from "../../assets/Abel-Anime.png";

const Hero = () => {
  const typedRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const words = ["WEBSITE YANG PRESISI.", "UI YANG ELEGAN.", "KODE YANG BERSIH."];
    let wi = 0, ci = 0, deleting = false;
    const el = typedRef.current;
    let timeout;

    const type = () => {
      const w = words[wi];
      if (!deleting) {
        el.textContent = w.slice(0, ++ci);
        if (ci === w.length) { deleting = true; timeout = setTimeout(type, 1800); return; }
      } else {
        el.textContent = w.slice(0, --ci);
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
      }
      timeout = setTimeout(type, deleting ? 50 : 80);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 pt-32 pb-20"
    >
      <div className="flex-1 space-y-6">
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Halo, Saya</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            ABEL <br />
            <span className="text-blue-500">SAFERYAN</span>
          </h1>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-200 tracking-tight">
          SAYA MEMBANGUN{" "}
          <span ref={typedRef} className="text-blue-500"></span>
          <span className="animate-[blink_1s_step-end_infinite] text-blue-500">|</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light">
          Web Developer &amp; Music Enthusiast | Coding that resonates.
        </p>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            LIHAT PROYEK SAYA
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border border-blue-500/40 hover:bg-blue-500/10 text-blue-300 rounded-full font-semibold transition-all"
          >
            HUBUNGI SAYA
          </button>
        </div>

        <div className="flex gap-7 pt-4 border-t border-white/5">
          {[["12+", "Proyek"], ["2+", "Tahun Exp"], ["5★", "Rating"]].map(([val, label]) => (
            <div key={label}>
              <p className="text-2xl font-bold text-white leading-none">{val}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-12 md:mt-0 relative">
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute w-[290px] h-[290px] border border-blue-500/20 rounded-full"></div>
        <div className="absolute w-[340px] h-[340px] border border-dashed border-blue-500/10 rounded-full"></div>

        <div className="relative w-80 h-80 md:w-[360px] md:h-[360px]" style={{ animation: "glitch-main 5s steps(1) infinite" }}>

          <div className="absolute inset-0 rounded-full overflow-hidden mix-blend-screen z-10"
            style={{ animation: "glitch-red 5s steps(1) infinite" }}>
            <img src={abelAnime} alt="" className="w-full h-full object-cover rounded-full opacity-80"
              style={{ filter: "url(#red-channel)" }} />
            <div className="absolute inset-0 rounded-full" style={{ background: "rgba(255,0,80,0.15)", mixBlendMode: "screen" }} />
          </div>
          <div className="absolute inset-0 rounded-full overflow-hidden mix-blend-screen z-10"
            style={{ animation: "glitch-blue 5s steps(1) infinite" }}>
            <img src={abelAnime} alt="" className="w-full h-full object-cover rounded-full opacity-80"
              style={{ filter: "url(#blue-channel)" }} />
            <div className="absolute inset-0 rounded-full" style={{ background: "rgba(0,200,255,0.15)", mixBlendMode: "screen" }} />
          </div>
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 z-20"
            style={{ animation: "glitch-border 5s steps(1) infinite", borderColor: "rgba(59,130,246,0.3)" }}>
            <img src={abelAnime} alt="Abel Saferyan" className="w-full h-full object-cover rounded-full" />
            <div className="absolute left-0 right-0 h-[3px] pointer-events-none"
              style={{ background: "rgba(255,255,255,0.06)", animation: "scanline 3s linear infinite" }} />
            <div className="absolute inset-0 pointer-events-none rounded-full"
              style={{ background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 3px)" }} />
          </div>
          <svg width="0" height="0" className="absolute">
            <defs>
              <filter id="red-channel">
                <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
              </filter>
              <filter id="blue-channel">
                <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;