import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block rounded-full border border-glow bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-8">
            Building the Future of Technology
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Innovating Solutions{" "}
            <br />
            <span className="gradient-text text-glow">Across Industries</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            From cutting-edge software and AI/ML solutions to robust hardware products — 
            Roopak Technologies delivers end-to-end technology that transforms businesses.
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
