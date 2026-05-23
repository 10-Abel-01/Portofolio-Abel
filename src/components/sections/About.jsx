import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-[#0c0c0c] text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase mb-2 animate-pulse">
            // Profile_Database
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            ABOUT ME
          </h2>
          <div className="w-12 h-[2px] bg-blue-500 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#121212] border border-zinc-800/80 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center space-x-3 border-b border-zinc-800 pb-4 mb-5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
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
              <div>
                <div className="flex justify-between mb-1 text-zinc-500"><span>Logic (Python/SQL)</span><span className="text-blue-500">90%</span></div>
                <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-blue-600 to-blue-100 h-1 rounded-full transition-all duration-500" style={{ width: "90%" }}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-zinc-500"><span>Frontend (React/Tailwind)</span><span className="text-blue-500">85%</span></div>
                <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-blue-600 to-blue-100 h-1 rounded-full transition-all duration-500" style={{ width: "85%" }}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-zinc-500"><span>Pressure Resistance</span><span className="text-blue-500">100%</span></div>
                <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-blue-500 to-blue-100 h-1 rounded-full transition-all duration-500" style={{ width: "100%" }}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-zinc-500"><span>Otaku Level</span><span className="text-blue-500 animate-pulse">OVER 9000</span></div>
                <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-blue-500 to-blue-100 h-1 rounded-full" style={{ width: "100%" }}></div></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-[#121212] border border-zinc-800/80 rounded-2xl p-6 md:p-8 hover:border-zinc-700/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-5 font-sans text-zinc-400 text-sm md:text-base leading-relaxed text-justify">
              <p>
                Sama seperti karakter utama di anime *Shonen* yang melewati <span className="text-white font-medium border-b border-zinc-800 pb-0.5">training arc</span> melelahkan sebelum membuka jurus pamungkasnya, begitulah saya memandang perjalanan hidup saya. Membagi waktu antara kuliah <span className="text-cyan-500 font-medium">Teknologi Informasi</span> dan bekerja keras selama lebih dari 3 tahun di industri manufaktur telah menempa mentalitas saya menjadi sangat disiplin, tangguh di bawah tekanan, serta presisi layaknya mesin pabrik.
              </p>
              <p>
                Ketertarikan mendalam pada teknologi mendorong saya untuk berkomitmen penuh dalam dunia rekayasa perangkat lunak, dengan fokus pada pengembangan ekosistem web modern berskala dinamis serta pengelolaan basis data yang efisien. Memiliki latar belakang yang kuat dalam logika pemrograman <span className="text-white font-medium">Python, PHP,</span> hingga modern frontend seperti <span className="text-cyan-500 font-medium">React.js dan Next.js</span>, saya selalu mengutamakan penulisan kode yang bersih, adaptif, dan berorientasi pada performa. Lebih dari sekadar kemampuan teknis, pengalaman lintas industri telah membentuk saya menjadi seorang *developer* yang memiliki ketahanan kerja tinggi, disiplin yang ketat, serta kemampuan analitis yang kuat dalam memecahkan masalah kompleks secara solutif.
              </p>
              <p>
                Dengan sertifikasi resmi pemrograman <span className="font-mono text-xs bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-zinc-300">PCAP Python dari Cisco</span> serta skor <span className="text-white font-medium">TOEFL 590</span>, saya siap berkolaborasi dalam tim untuk memecahkan masalah-masalah dunia nyata lewat baris kode yang bersih, efisien, dan estetis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-zinc-800/60 mt-6 text-[11px] font-mono text-zinc-500 space-y-2 sm:space-y-0">
              <p>// Fun fact: Saya penikmat musik setia & kolektor bug absurd pas debugging wkwk.</p>
              <span className="text-zinc-600 uppercase text-[9px] tracking-widest sm:text-right">Verified_Koran_IT</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;