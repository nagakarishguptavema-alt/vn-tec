import { motion } from "framer-motion";
import { Zap, Shield, Users } from "lucide-react";

const stats = [
  { icon: Zap, label: "Innovation First", desc: "Cutting-edge tech at every layer" },
  { icon: Shield, label: "Built to Last", desc: "Enterprise-grade reliability" },
  { icon: Users, label: "Customer Centric", desc: "Solutions shaped by real needs" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">
              Technology That{" "}
              <span className="gradient-text">Drives Growth</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Roopak Technologies is a product-based company dedicated to building innovative 
              technology solutions. We combine deep engineering expertise with creative thinking 
              to deliver products that solve real-world challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From software platforms and AI-powered tools to hardware devices and hybrid 
              solutions — we cover the full technology spectrum, empowering businesses to 
              operate smarter, faster, and more efficiently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <s.icon size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{s.label}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
