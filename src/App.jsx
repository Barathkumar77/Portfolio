import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ParticleBackground from "./Components/ParticleBackground";
// import ParticleBackground from "./components/ParticleBackground";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative  "> 
      {/* Full-screen background */}
      <div className="fixed inset-0 -z-10 bg-neutral-950 "></div>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
</div>
      {/* Main container */}
      <div className="container mx-auto px-8">
      <div className="relative">
      <ParticleBackground />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
     
      </div>
    </div>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
