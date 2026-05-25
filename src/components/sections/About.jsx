import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const SkillBar = ({ label, value, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1 text-zinc-500">
        <span>{label}</span>
        <span className="text-blue-500">{value}</span>
      </div>
      <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-100 h-1 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? value : 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  const skills = [
    { label: "Logic (Python/SQL)", value: "90%", delay: 0.2 },
    { label: "Frontend (React/Tailwind)", value: "85%", delay: 0.35 },
    { label: "Pressure Resistance", value: "100%", delay: 0.5 },
    { label: "Otaku Level", value: "100%", delay: 0.65 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 py-20 bg-[#0c0c0c] text-white font-sans antialiased selection:bg-amber-500 selection:text-black"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase mb-2 animate-pulse">
            // Profile_Database
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            ABOUT ME
          </h2>
          <div className="w-12 h-[2px] bg-blue-500 mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#121212] border border-zinc-800/80 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center space-x-3 border-b border-zinc-800 pb-4 mb-5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <h3 className="font-mono font-bold tracking-widest text-xs text-zinc-400 uppercase">
                  Character_Status
                </h3>
              </div>
              <div className="font-mono text-xs space-y-3.5 text-zinc-400">
                <p><span className="text-blue-500/50">attr.</span> <strong className="text-zinc-300">Name:</strong> Abel Saferyan</p>
                <p><span className="text-blue-500/50">class.</span> <strong className="text-zinc-300">IT Student</strong></p>
                <p><span className="text-blue-500/50">sub.</span> <strong className="text-zinc-300">Web / Mobile / IoT Dev</strong></p>
                <p><span className="text-blue-500/50">rank.</span> <strong className="text-blue-500 font-bold">GPA 3.61 / 4.00</strong></p>
                <p><span className="text-blue-500/50">guild.</span> <strong className="text-zinc-300">UBSI Bekasi</strong></p>
              </div>
            </div>
            <div className="space-y-3 pt-6 border-t border-zinc-800/60 mt-6 font-mono text-[10px]">
              {skills.map((skill) => (
                <SkillBar key={skill.label} {...skill} />
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:col-span-2 bg-[#121212] border border-zinc-800/80 rounded-2xl p-6 md:p-8 hover:border-zinc-700/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-5 font-sans text-zinc-400 text-sm md:text-base leading-relaxed text-justify">
              <p>
                Sama seperti karakter utama di anime <em>Shonen</em> yang melewati{" "}
                <span className="text-white font-medium border-b border-zinc-800 pb-0.5">training arc</span>{" "}
                melelahkan sebelum membuka jurus pamungkasnya, begitulah saya memandang perjalanan hidup saya.
                Membagi waktu antara kuliah <span className="text-cyan-500 font-medium">Teknologi Informasi</span>{" "}
                dan bekerja keras selama lebih dari 3 tahun di industri manufaktur telah menempa mentalitas saya
                menjadi sangat disiplin, tangguh di bawah tekanan, serta presisi layaknya mesin pabrik.
              </p>
              <p>
                Ketertarikan mendalam pada teknologi mendorong saya untuk berkomitmen penuh dalam dunia rekayasa
                perangkat lunak, dengan fokus pada pengembangan ekosistem web modern berskala dinamis serta
                pengelolaan basis data yang efisien. Memiliki latar belakang yang kuat dalam logika pemrograman{" "}
                <span className="text-white font-medium">Python, PHP,</span> hingga modern frontend seperti{" "}
                <span className="text-cyan-500 font-medium">React.js dan Next.js</span>, saya selalu mengutamakan
                penulisan kode yang bersih, adaptif, dan berorientasi pada performa.
              </p>
              <p>
                Dengan sertifikasi resmi pemrograman{" "}
                <span className="font-mono text-xs bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-zinc-300">
                  PCAP Python dari Cisco
                </span>{" "}
                serta skor <span className="text-white font-medium">TOEFL 590</span>, saya siap berkolaborasi
                dalam tim untuk memecahkan masalah-masalah dunia nyata lewat baris kode yang bersih, efisien,
                dan estetis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-zinc-800/60 mt-6 gap-4">
              <p className="text-[11px] font-mono text-zinc-500">
                // Fun fact: Saya penikmat musik setia & kolektor bug absurd pas debugging wkwk.
              </p>

              <a
                href="/cv-abel-saferyan.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 text-blue-400 text-xs font-mono tracking-wider hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 whitespace-nowrap group/btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform duration-200"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                Download_CV.pdf
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;