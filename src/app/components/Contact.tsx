import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, MapPin, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_76evrfk";
const EMAILJS_TEMPLATE_ID = "template_02fbe4s";
const EMAILJS_PUBLIC_KEY = "Mc8UpqlRGasugvgub";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8">
              <h3 className="mb-6">Send me a message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, subject: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={10}
                    name="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    required
                  />
                </div>
               
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#4169E1] hover:bg-[#4169E1]/90 disabled:opacity-70 flex items-center justify-center"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
              {status === "success" && (
                <p className="text-green-600 text-sm text-center">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:harbike88@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#4169E1] transition-colors group"
                >
                  <div className="p-3 bg-[#4169E1]/10 rounded-lg group-hover:bg-[#4169E1]/20 transition-colors">
                    <Mail className="h-5 w-5 text-[#4169E1]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>harbike88@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/oluwabukola-amoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#4169E1] transition-colors group"
                >
                  <div className="p-3 bg-[#4169E1]/10 rounded-lg group-hover:bg-[#4169E1]/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-[#4169E1]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p>linkedin.com/in/oluwabukola-amoo</p>
                  </div>
                </a>

                <a
                  href="https://github.com/AmooOluwabukola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#4169E1] transition-colors group"
                >
                  <div className="p-3 bg-[#4169E1]/10 rounded-lg group-hover:bg-[#4169E1]/20 transition-colors">
                    <Github className="h-5 w-5 text-[#4169E1]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p>github.com/AmooOluwabukola</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-3 bg-[#4169E1]/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-[#4169E1]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-[#4169E1]/10 to-transparent border-[#4169E1]/20">
              <h4 className="">Open to Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                I'm currently available for freelance work and full-time
                positions. Let's build something amazing together!
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
