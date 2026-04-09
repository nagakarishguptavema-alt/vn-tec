import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Phone, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EMAILJS_CONFIG } from "@/config/emailjs";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: import.meta.env.VITE_RECIPIENT_EMAIL || "raghavb1979@gmail.com",
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          message: data.message,
          reply_to: data.email,
        }
      );

      setSubmitStatus("success");
      form.reset();

      // Auto close after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus("idle");
      }, 3000);
    } catch (error: any) {
      setSubmitStatus("error");
      setErrorMessage(
        error?.text || "Failed to send message. Please try again."
      );
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Ready to Build Something{" "}
            <span className="gradient-text">Amazing?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's discuss how Roopak Technologies can help transform your ideas into
            powerful products. Reach out and let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity box-glow">
                  Contact Us <ArrowRight size={16} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Get In Touch</DialogTitle>
                </DialogHeader>

                {submitStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                    <h3 className="text-xl font-semibold text-center">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground text-center">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {submitStatus === "error" && (
                        <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-red-900">Error sending message</p>
                            <p className="text-sm text-red-800">{errorMessage}</p>
                          </div>
                        </div>
                      )}

                      <FormField
                        control={form.control}
                        name="name"
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        rules={{
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        rules={{ required: "Message is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project or inquiry..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </DialogContent>
            </Dialog>

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
