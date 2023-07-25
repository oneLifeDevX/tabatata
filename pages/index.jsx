import HeroSection from "../components/HeroSection.jsx";
import CTA from "../components/CTA.jsx";
import Navbar from "../components/Navbar.jsx";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import CustomCursor from "../components/CustomCursor.js";
import Footer from "../components/Footer.jsx";

import { Gradient } from "../components/Gradient.js";


export default function Home() {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="min-h-screen bg-my_bg_image bg-cover bg-no-repeat bg-center relative overflow-x-hidden">
      <div className="relative top-0 left-0 w-full">
        <Navbar />
        <HeroSection />
      </div>
      <div className="w-full h-16 bg-gradient-to-b from-black via-blue-700 to-black opacity-50"></div>
      <CTA />
      <div className="px-6 flex justify-center items-center">
        <div className="max-w-7xl w-full">
          <CustomCursor />
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#524DFF",
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1.7,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 4 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      </div>
      <Footer />
      <style>
        {`
        /* Styles de la barre de défilement */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background-color: #ffffff;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #524dff;
        }

        /* Styles du sélecteur de défilement */
        ::-webkit-scrollbar-thumb:hover {
          background-color: #0000ff;
        }
        `}
      </style>
    </div>
  );
}
