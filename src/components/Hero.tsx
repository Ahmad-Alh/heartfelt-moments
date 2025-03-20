"use client";

import { useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: ["#FFB6C1", "#F5E6D3"],
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-soft-beige to-blush-pink opacity-70" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-black"
      >
        <div className="relative inline-block">
          <TypeAnimation
            sequence={["Heartfelt Moments"]}
            wrapper="h1"
            speed={50}
            className="text-5xl md:text-7xl font-extrabold mb-4"
          />
          <motion.div
            className="absolute right-[5%] -top-[20px]"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0.3],
              y: [0, -500],
              rotate: [0, 10, -10, 5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.1, 0.9, 1],
              ease: "easeInOut",
            }}
          >
            <Image
              src="/balloons.png"
              alt="Decorative balloons"
              width={100}
              height={100}
              className="rounded-full opacity-90"
            />
          </motion.div>
        </div>
        <p className="text-xl md:text-2xl font-light mb-8">
          Crafting memories that last a lifetime
        </p>
        <motion.a
          href={`https://wa.me/+971521433223?text=${encodeURIComponent(
            "Hey, I would like to book!"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-soft-rose hover:bg-blush-pink text-neutral-cream font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
        >
          BOOK NOW!
        </motion.a>
      </motion.div>
    </section>
  );
}
