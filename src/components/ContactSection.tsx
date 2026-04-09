import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "918220757651";
  const whatsappMessage = encodeURIComponent(
    "Hello Roopak Technologies, I would like to discuss a project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center rounded-2xl border border-glow bg-card p-12 md:p-16 box-glow"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary mb-6">
            <Mail size={32} />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something <span className="gradient-text">Amazing?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            We have removed the email contact form and replaced it with a direct WhatsApp link.
            Message us now for faster support and immediate follow-up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity box-glow"
            >
              <MessageSquare size={16} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+918220757651"
              className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors box-glow"
            >
              <Phone size={16} />
              +91 82207 57651
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
