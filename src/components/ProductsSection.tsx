import { motion } from "framer-motion";
import { Code2, Brain, Cpu, Layers, Headset } from "lucide-react";

const products = [
  {
    icon: Code2,
    title: "Software Products",
    description: "Custom-built enterprise software, web platforms, and mobile applications designed for scalability and performance.",
  },
  {
    icon: Brain,
    title: "AI / ML Products",
    description: "Intelligent automation, predictive analytics, and machine learning models tailored to your business needs.",
  },
  {
    icon: Cpu,
    title: "Hardware Products",
    description: "IoT devices, embedded systems, and custom hardware solutions engineered with precision and reliability.",
  },
  {
    icon: Layers,
    title: "Hybrid Products",
    description: "Seamlessly integrated hardware-software solutions combining the best of both worlds for maximum impact.",
  },
  {
    icon: Headset,
    title: "Service-Based Products",
    description: "Consulting, maintenance, and managed services to keep your technology infrastructure running smoothly.",
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
