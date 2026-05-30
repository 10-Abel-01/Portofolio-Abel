import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import playingGod from "../../assets/playing-god.svg";
import clockin from "../../assets/clockin.png";
import dashboard from "../../assets/dashboard.png";
import jokiTugas from "../../assets/joki-tugas.jpg";
import Solar from "../../assets/solar.png";
import Zynova from "../../assets/zynova.png";

const projects = [
  {
    title: "Web Company Profile",
    desc: "Merancang Desain/Asset pada Zynovaworks.",
    image: Zynova,
    alt: "Zynovaworks Preview",
    tags: ["Next.js", "Ibis Paint", "UI/UX Design"],
    demo: "https://zynovaworks.com",
  },
  {
    title: "SOLAR",
    desc: "Aplikasi Manajemen Energi Surya.",
    image: Solar,
    alt: "Solar Preview",
    tags: ["React + Vite", "Tailwind CSS", "Chart.js"],
    demo: "https://solar-ews.vercel.app/",
  },
  {
    title: "DASHBOARD",
    desc: "AI-Powered Community Management.",
    image: dashboard,
    alt: "Dashboard Preview",
    tags: ["React", "Vite", "AI"],
  },
  {
    title: "MUSICAL CODE",
    desc: "Interaktif Guitar Chord Visualizer.",
    image: playingGod,
    alt: "Musical Code Preview",
    tags: ["React", "Spotify API"],
  },
  {
    title: "CLOCKIN",
    desc: "Aplikasi Absensi Sederhana untuk Meningkatkan Manajemen Waktu menggunakan Flutter dan PHP Native.",
    image: clockin,
    alt: "Clockin Preview",
    tags: ["UI/UX Design", "Flutter", "Dashboard Admin"],
  },
  {
    title: "Academic Task Management",
    desc: "Menangani Tugas dengan Kecepatan Kilat.",
    image: jokiTugas,
    alt: "Joki Tugas Preview",
    tags: ["Ms Office", "UI/UX Design", "Web/Mobile Programming"],
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 2) * 0.15, ease: "easeOut" }}
      className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group flex flex-col"
    >
      <div id="projects" className="h-48 bg-black/40 rounded-xl mb-6 overflow-hidden">
        <img
          src={project.image}
          alt={project.alt}
          className="h-full w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 flex-1">{project.desc}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.demo || project.github) && (
        <div className="flex gap-3 mt-auto">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-cyan-500 text-white text-sm rounded-full border border-blue-500/20 hover:bg-blue-500/60 transition-colors">
                Demo
              </button>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-white/5 text-white text-sm rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                GitHub
              </button>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="projects" className="px-4 md:px-8 py-20 bg-[#0c0c0c] overflow-hidden">
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, x: -20 }}
        animate={headingInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-blue-500 font-bold mb-12 tracking-widest text-sm text-center md:text-left"
      >
        FEATURED PROJECTS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;