
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
   
        particles: {
          number: { value: 35 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
          links: { enable: true, distance: 150, color: "#ffffff" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: ["repulse", "bubble", "grab"] }, // Multiple effects
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            bubble: { size: 10, duration: 2, opacity: 0.8 },
            grab: { distance: 200, links: { opacity: 0.5 } },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
