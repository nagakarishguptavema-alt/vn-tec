import { motion } from "framer-motion";
import { Code2, Brain, Cpu, Layers, Headset } from "lucide-react";
import esp32 from "@/assets/esp32.svg";
import raspberryPi from "@/assets/raspberry-pi.svg";
import gpioPins from "@/assets/gpio-pins.svg";
import securityCamera from "@/assets/security-camera.svg";
import surveillanceSystem from "@/assets/surveillance-system.svg";
import laptopForensics from "@/assets/laptop-forensics.svg";
import embeddedSystem from "@/assets/embedded-system.svg";
import setupBox from "@/assets/setup-box.svg";
import cameraModule from "@/assets/camera-module.svg";
import iotGateway from "@/assets/iot-gateway.svg";
import securityPanel from "@/assets/security-panel.svg";

const productImages = [
  {
    src: esp32,
    title: "ESP32 Board",
    alt: "ESP32 development board hardware",
  },
  {
    src: raspberryPi,
    title: "Raspberry Pi",
    alt: "Raspberry Pi single-board computer",
  },
  {
    src: gpioPins,
    title: "GPIO Pins",
    alt: "Electronic circuitry and pin headers",
  },
  {
    src: securityCamera,
    title: "Security Camera",
    alt: "Security camera and surveillance hardware",
  },
  {
    src: surveillanceSystem,
    title: "Surveillance System",
    alt: "Surveillance camera and monitoring setup",
  },
  {
    src: laptopForensics,
    title: "Laptop Forensics",
    alt: "Laptop forensic utility and investigation services",
  },
  {
    src: embeddedSystem,
    title: "Embedded System",
    alt: "Embedded system board and custom electronics",
  },
  {
    src: setupBox,
    title: "Setup Box",
    alt: "Hardware setup boxes and installation kits",
  },
  {
    src: cameraModule,
    title: "Camera Module",
    alt: "Camera module and imaging hardware",
  },
  {
    src: iotGateway,
    title: "IoT Gateway",
    alt: "IoT gateway for connected devices",
  },
  {
    src: securityPanel,
    title: "Security Panel",
    alt: "Security monitoring panel and control system",
  },
];

const products = [
  {
    icon: Code2,
    title: "Software Products",
    description: "Custom web apps, mobile apps, and backend systems built to solve business problems with clean design and fast performance.",
  },
  {
    icon: Brain,
    title: "AI / ML Products",
    description: "Smart automation, prediction tools, and machine learning features that help your operations work faster and more efficiently.",
  },
  {
    icon: Cpu,
    title: "Hardware Products",
    description: "Security hardware such as ESP32 and Raspberry Pi camera solutions, embedded sensors, and surveillance devices made for reliable monitoring.",
  },
  {
    icon: Layers,
    title: "Hybrid Products",
    description: "Combined hardware and software systems where cameras, sensors, and apps work together smoothly for stronger solutions.",
  },
  {
    icon: Headset,
    title: "Service-Based Products",
    description: "Consulting, setup, and ongoing support to keep your technology running well and your systems up to date.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            What We Build
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">
            Our Product Categories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We deliver technology across multiple domains, giving businesses the edge they need to thrive.
          </p>
        </div>

        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Hardware Highlights
          </span>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold mt-4">
            Explore the Devices Powering Your Solutions
          </h3>
          <p className="text-muted-foreground mt-4">
            Explore embedded systems, Raspberry Pi and ESP32 boards, laptop forensic utilities, installation box kits, and security camera solutions that make our products tangible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mb-16">
          {productImages.map((image) => (
            <div
              key={image.title}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-24">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="group rounded-xl border border-border bg-card p-8 hover:border-glow hover:box-glow transition-all duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
                <p.icon size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
