import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import securityCamera from "@/assets/security-camera.svg";
import surveillanceSystem from "@/assets/surveillance-system.svg";
import cameraModule from "@/assets/camera-module.svg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      {/* Decorative surveillance visuals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -left-10 top-10 h-56 w-56 rounded-[2.5rem] border border-primary/10 bg-primary/10 shadow-2xl shadow-primary/10"
        />
        <motion.img
          src={securityCamera}
          alt="Security camera illustration"
          className="absolute left-6 top-24 h-44 w-auto opacity-60"
          initial={{ y: 0 }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={surveillanceSystem}
          alt="Surveillance system illustration"
          className="absolute right-6 top-12 h-64 w-auto opacity-55"
          initial={{ y: -10 }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={cameraModule}
          alt="CCTV module illustration"
          className="absolute right-16 bottom-10 h-44 w-auto opacity-60"
          initial={{ y: 10 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_22%)]" />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/90" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block rounded-full border border-glow bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-8">
            Building the Future of Security and Automation
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Innovating Digital Defense{" "}
            <br />
            <span className="gradient-text text-glow">with Smart Surveillance</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            From cutting-edge software and AI/ML solutions to robust hardware and CCTV systems — Roopak Technologies delivers end-to-end technology that transforms business security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity box-glow"
            >
              Explore Products <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-glow bg-primary/5 px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
