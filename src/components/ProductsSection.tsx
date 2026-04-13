import { motion } from "framer-motion";
import { Code2, Brain, Cpu, Layers, Headset, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
    title: "Wireless Control Board",
    alt: "Wireless control board with smart connectivity",
    points: [
      "Smart wireless control board with integrated Wi-Fi and Bluetooth for remote connectivity",
      "Perfect for smart devices, IoT projects, and automated systems",
      "Used in PPE detection systems for reliable connectivity and real-time processing",
      "Powerful dual-core processor with 520 KB memory and 4 MB storage",
      "Low power consumption at 3.3V, Manufactured with premium quality components"
    ],
    category: "Smart Controllers"
  },
  {
    src: raspberryPi,
    title: "Smart Mini Computer",
    alt: "Smart mini computer for connected applications",
    points: [
      "Compact smart computer designed for surveillance, automation, and connected devices",
      "Perfect for security cameras, smart home systems, and IoT solutions",
      "Easy setup with pre-configured systems ready for immediate deployment",
      "Reliable performance for continuous monitoring and real-time processing",
      "Powerful quad-core processor with flexible memory options (512MB-8GB)",
      "Includes storage options and power adapter for complete installation"
    ],
    category: "Smart Computers"
  },
  {
    src: gpioPins,
    title: "Smart Connection Port",
    alt: "Smart connection port for device integration",
    points: [
      "Smart connection interface for seamless integration with sensors and devices",
      "Works perfectly with our Wireless Control Board and Smart Mini Computer",
      "Plug-and-play connectivity for cameras, sensors, and external equipment",
      "Essential for building complete security and automation systems",
      "Precise control for real-time monitoring and data collection",
      "Universal compatibility with multiple voltage levels and communication types",
      "Industrial-grade reliability for continuous operation"
    ],
    category: "Connection Interfaces"
  },
  {
    src: securityCamera,
    title: "Security Camera",
    alt: "Security camera and surveillance hardware",
    points: [
      "We manufacture complete security camera solutions",
      "Assembled with Smart Mini Computer, 5MP OV5647 camera modules",
      "NOIR option available for night vision applications",
      "Includes IR LED boards and bullet-type CCTV housings",
      "Designed for PPE detection, surveillance systems, and 24/7 monitoring",
      "Features motion detection and remote access capabilities",
      "Smart Mini Computer 512MB RAM, 5MP OV5647 Camera Module",
      "15-pin to 22-pin CSI cable, 850nm IR LED Board",
      "CCTV Bullet Housing, 16GB MicroSD Card, 5V 2A Power Adapter"
    ],
    category: "Security Hardware"
  },
  {
    src: surveillanceSystem,
    title: "Surveillance System",
    alt: "Surveillance camera and monitoring setup",
    points: [
      "We build comprehensive surveillance systems",
      "Integrating multiple security cameras, IoT gateways, and monitoring software",
      "Manufactured using our custom camera modules and Smart Mini Computer-based controllers",
      "Provides real-time video analytics, alert notifications, and remote access",
      "Used in applications like PPE detection and facility security",
      "Up to 16 channels, 1080p resolution, H.265 compression",
      "Smart motion tracking, Mobile apps, Custom firmware"
    ],
    category: "Security Systems"
  },
  {
    src: laptopForensics,
    title: "Laptop Forensics",
    alt: "Laptop forensic utility and investigation services",
    points: [
      "Our laptop forensic utility is a specialized software tool we develop",
      "Used for digital forensics, data recovery, and evidence collection",
      "Works alongside our hardware products like Wireless Control Board and Smart Mini Computer",
      "Enables comprehensive investigations including PPE detection data analysis",
      "Supports chain of custody management",
      "Supports multiple file systems, Hardware write blockers",
      "MD5/SHA hashing, Timeline analysis, Compatible with Wireless Control Board and Smart Mini Computer"
    ],
    category: "Forensic Tools"
  },
  {
    src: embeddedSystem,
    title: "Embedded System",
    alt: "Embedded system board and custom electronics",
    points: [
      "We design and manufacture custom embedded systems",
      "Combining our Wireless Control Boards, Smart Mini Computers, and Smart Connection Ports",
      "Optimized for specific applications like PPE detection and surveillance",
      "Used in IoT projects with real-time processing capabilities",
      "Industrial-grade reliability and performance",
      "ARM/Cortex processors, Custom sensors",
      "Industrial temperature range, Real-time OS support, Manufactured components"
    ],
    category: "Embedded Systems"
  },
  {
    src: setupBox,
    title: "Set Top Box",
    alt: "Hardware set top boxes and installation kits",
    points: [
      "We manufacture pre-configured set top box kits",
      "Including all necessary components for quick deployment",
      "Features Smart Mini Computer-based systems with camera modules",
      "Includes power adapters and installation hardware",
      "Perfect for surveillance setups and embedded applications",
      "Smart Mini Computer, Camera Module, CSI Cable",
      "IR LED Board, Housing, MicroSD Card, Power Adapter",
      "Misc Cables and screws"
    ],
    category: "Installation Kits"
  },
  {
    src: cameraModule,
    title: "Camera Module",
    alt: "Camera module and imaging hardware",
    points: [
      "We produce high-quality camera modules like the 5MP OV5647",
      "NOIR options available for night vision applications",
      "Manufactured with CSI interfaces and IR LED integration",
      "Designed for use in security cameras and surveillance systems",
      "Used in PPE detection setups and embedded applications",
      "5MP OV5647 sensor, 15-pin to 22-pin CSI cable",
      "850nm IR LED Board, Auto exposure, Manufactured for reliability"
    ],
    category: "Imaging Hardware"
  },
  {
    src: iotGateway,
    title: "IoT Gateway",
    alt: "IoT gateway for connected devices",
    points: [
      "We manufacture intelligent IoT gateways",
      "Using Smart Mini Computer and Wireless Control Board platforms",
      "Connects devices to cloud services with data processing capabilities",
      "Includes security features for reliable operation",
      "Essential for surveillance systems and PPE detection networks",
      "Used in remote monitoring applications",
      "Raspberry Pi Zero 2 W, Wireless Control Board integration",
      "Multiple wireless protocols, Linux-based, RESTful APIs, MQTT support"
    ],
    category: "IoT Solutions"
  },
  {
    src: securityPanel,
    title: "Security Panel",
    alt: "Security monitoring panel and control system",
    points: [
      "We manufacture central security control panels",
      "Features zone monitoring, alarm management, and user access control",
      "Built using embedded systems and Smart Connection Ports",
      "Designed for integration with surveillance cameras and IoT devices",
      "Used in comprehensive security solutions",
      "16-256 zones, Touchscreen interface, GSM/GPRS backup",
      "API integration, Backup battery, Manufactured components"
    ],
    category: "Control Systems"
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
    description: "Security hardware such as Wireless Control Boards and Smart Mini Computer camera solutions, embedded sensors, and surveillance devices made for reliable monitoring."
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
  const [selectedProduct, setSelectedProduct] = useState(null);

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
            Explore embedded systems, Smart Mini Computers and Wireless Control Boards, laptop forensic utilities, installation box kits, Smart Connection Ports, and security camera solutions that make our products tangible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mb-16">
          {productImages.map((image) => (
            <Dialog key={image.title}>
              <DialogTrigger asChild>
                <div
                  className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                  onClick={() => setSelectedProduct(image)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:scale-105"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-24">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                      {image.title}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{image.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-48 h-48 object-contain rounded-lg"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {image.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  {image.title === "Laptop Forensics" && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">GitHub Repository</h3>
                      <a
                        href="https://github.com/Roopak-tech/Laptop-Forensic-utility"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline transition-colors"
                      >
                        https://github.com/Roopak-tech/Laptop-Forensic-utility
                      </a>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Category: {image.category}</span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
