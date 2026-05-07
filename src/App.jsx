import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import About from "./components/sections/About";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Footer />

      </main>
    </div>
  );
}

export default App;
