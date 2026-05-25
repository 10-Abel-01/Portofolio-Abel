import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./App.css";
import LoadingScreen from "./components/layout/LoadingScreen";
import BackToTop from "./components/layout/BackToTop";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import About from "./components/sections/About";
import Footer from "./components/sections/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      <AnimatePresence>
        {!isLoading && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-7xl mx-auto"
          >
            <Navbar />
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

      <BackToTop />
    </div>
  );
}

export default App;