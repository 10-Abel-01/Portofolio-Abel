import React from "react";
import playingGod from "../../assets/playing-god.svg";
import clockin from "../../assets/clockin.png";
import dashboard from "../../assets/dashboard.png";
import jokiTugas from "../../assets/joki-tugas.jpg";
import Solar from "../../assets/solar.png";
// import Zynova from "../../assets/zynova.png";

const Projects = () => {
  return (
    <section id="projects" className="px-4 md:px-8 py-20 bg-[#0c0c0c] overflow-hidden">
      <h2 className="text-blue-500 font-bold mb-12 tracking-widest text-sm text-center md:text-left">
        FEATURED PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* card */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group">
          <div className="h-48 bg-black/40 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
            <img
              src={Solar}
              alt="Zynovaworks Preview"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            Web Company Profile
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Merancang Desain/Asset pada Zynovaworks.
          </p>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              Design from Scratch
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              Ibis Paint
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              UI/UX Design
            </span>
          </div>
          <a href="https://zynovaworks.com" target="_blank" rel="noopener noreferrer">
            <button className="px-4 mt-4 py-2 bg-cyan-500 text-white text-sm rounded-full border border-blue-500/20 hover:bg-blue-500/60 transition-colors">
              Demo
            </button>
          </a>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group">
          <div className="h-48 bg-black/40 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
            <img
              src={dashboard}
              alt="Dashboard Preview"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            DASHBOARD
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            AI-Powered Community Management
          </p>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              React
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              Vite
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              AI
            </span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group">
          <div className="h-48 bg-black/40 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
            <img
              src={playingGod}
              alt="Musical Code Preview"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            MUSICAL CODE
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Interaktif Guitar Chord Visualizer
          </p>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              React
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              Spotify API
            </span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group">
          <div className="h-48 bg-black/40 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
            <img
              src={clockin}
              alt="Clockin Preview"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            CLOCKIN
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Membuat Aplikasi Absensi Sederhana untuk Meningkatkan Manajemen Waktu Menggunakan Flutter dan PHP Native
          </p>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              UI/UX Design
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              Flutter
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              Dashboard Admin
            </span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group">
          <div className="h-48 bg-black/40 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
            <img
              src={Solar}
              alt="Solar Preview"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            SOLAR
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Aplikasi Manajemen Energi Surya
          </p>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              React + Vite
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              Chart.js
            </span>
          </div>
          <a href="https://solar-ews.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="px-4 mt-4 py-2 bg-cyan-500 text-white text-sm rounded-full border border-blue-500/20 hover:bg-blue-500/60 transition-colors">
              Demo
            </button>
          </a>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group">
          <div className="h-48 bg-black/40 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
            <img
              src={jokiTugas}
              alt="Joki Tugas Preview"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            JOKI TUGAS
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Menangani Tugas dengan Kecepatan Kilat
          </p>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              Ms Office
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              UI/UX Design
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
              Web/Mobile Programming
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
