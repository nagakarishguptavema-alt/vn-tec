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
    title: "ESP32 Board",
    alt: "ESP32 development board hardware",
    description: "A powerful, low-cost microcontroller with Wi-Fi and Bluetooth capabilities, perfect for IoT projects and embedded systems.",
    features: ["Dual-core processor", "Wi-Fi 802.11 b/g/n", "Bluetooth 4.2", "40 GPIO pins", "Low power consumption"],
    specifications: "240 MHz dual-core processor, 520 KB SRAM, 4 MB Flash, Operating voltage: 3.3V",
    category: "Microcontrollers"
  },
  {
    src: raspberryPi,
    title: "Raspberry Pi",
    alt: "Raspberry Pi single-board computer",
    description: "A credit-card sized computer that can run Linux and is perfect for learning programming, building projects, and embedded applications.",
    features: ["ARM processor", "GPIO pins", "USB ports", "HDMI output", "Linux compatible"],
    specifications: "Broadcom BCM2711, Quad core Cortex-A72, 1GB-8GB RAM, MicroSD card slot",
    category: "Single-board Computers"
  },
  {
    src: gpioPins,
    title: "GPIO Pins",
    alt: "Electronic circuitry and pin headers",
    description: "General Purpose Input/Output pins that allow microcontrollers and single-board computers to interface with external devices and sensors.",
    features: ["Digital I/O", "Analog input", "PWM output", "I2C/SPI communication", "Interrupt capability"],
    specifications: "3.3V/5V logic levels, Pull-up/down resistors, Multiple communication protocols",
    category: "Interfaces"
  },
  {
    src: securityCamera,
    title: "Security Camera",
    alt: "Security camera and surveillance hardware",
    description: "High-resolution cameras with night vision, motion detection, and remote monitoring capabilities for comprehensive security solutions.",
    features: ["1080p/4K resolution", "Night vision", "Motion detection", "Cloud storage", "Mobile app access"],
    specifications: "Sony IMX sensor, H.265 compression, IR LEDs, Weatherproof IP66 rating",
    category: "Security Hardware"
  },
  {
    src: surveillanceSystem,
    title: "Surveillance System",
    alt: "Surveillance camera and monitoring setup",
    description: "Complete surveillance solutions including multiple cameras, NVR/DVR systems, and monitoring software for 24/7 security coverage.",
    features: ["Multi-camera support", "Real-time monitoring", "Video analytics", "Remote access", "Alert notifications"],
    specifications: "Up to 16 channels, 4K resolution, H.265+, Smart motion tracking, Mobile apps",
    category: "Security Systems"
  },
  {
    src: laptopForensics,
    title: "Laptop Forensics",
    alt: "Laptop forensic utility and investigation services",
    description: "Specialized tools and software for digital forensics, data recovery, and investigation of laptop and computer systems.",
    features: ["Data recovery", "Evidence collection", "Chain of custody", "Report generation", "Encryption analysis"],
    specifications: "Supports multiple file systems, Hardware write blockers, MD5/SHA hashing, Timeline analysis",
    category: "Forensic Tools"
  },
  {
    src: embeddedSystem,
    title: "Embedded System",
    alt: "Embedded system board and custom electronics",
    description: "Custom-designed embedded systems for specific applications, combining hardware and software for optimized performance.",
    features: ["Custom PCB design", "Real-time processing", "Low power design", "Industrial grade", "Custom firmware"],
    specifications: "ARM/Cortex processors, Custom sensors, Industrial temperature range, Real-time OS support",
    category: "Embedded Systems"
  },
  {
    src: setupBox,
    title: "Set Top Box",
    alt: "Hardware set top boxes and installation kits",
    description: "Pre-configured hardware kits and set top boxes that include all necessary components for quick deployment and installation.",
    features: ["Pre-configured hardware", "Quick setup", "Documentation included", "Testing verified", "Warranty covered"],
    specifications: "Complete BOM, Assembly instructions, Test procedures, Quality assurance, 1-year warranty",
    category: "Installation Kits"
  },
  {
    src: cameraModule,
    title: "Camera Module",
    alt: "Camera module and imaging hardware",
    description: "Compact camera modules for embedded applications, providing high-quality imaging capabilities in small form factors.",
    features: ["High resolution", "Compact size", "Multiple interfaces", "Auto focus", "Image processing"],
    specifications: "8MP-64MP sensors, CSI/MIPI interface, Auto exposure, HDR support, Lens options available",
    category: "Imaging Hardware"
  },
  {
    src: iotGateway,
    title: "IoT Gateway",
    alt: "IoT gateway for connected devices",
    description: "Intelligent gateways that connect IoT devices to the cloud, providing data processing, security, and management capabilities.",
    features: ["Device management", "Data aggregation", "Edge computing", "Security protocols", "Cloud integration"],
    specifications: "Multiple wireless protocols, Linux-based, RESTful APIs, MQTT support, Docker containers",
    category: "IoT Solutions"
  },
  {
    src: securityPanel,
    title: "Security Panel",
    alt: "Security monitoring panel and control system",
    description: "Central control panels for security systems, providing monitoring, control, and automation of security devices and alarms.",
    features: ["Zone monitoring", "Alarm management", "User access control", "Integration ready", "Remote monitoring"],
    specifications: "16-256 zones, Touchscreen interface, GSM/GPRS backup, API integration, Backup battery",
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
            Explore embedded systems, Raspberry Pi and ESP32 boards, laptop forensic utilities, installation box kits, and security camera solutions that make our products tangible.
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
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{image.description}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {image.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                    <p className="text-muted-foreground">{image.specifications}</p>
                  </div>
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
