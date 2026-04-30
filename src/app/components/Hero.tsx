import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";
import resume from "../../assets/ Oluwabukola Grace.pdf";
import profileImg from "../../assets/bukola.jpg";

export function Hero() {
  return (
    <section className="pt-30 flex items-center justify-center bg-gradient-to-br from-[#4169E1]/5 to-transparent">
      <div className="max-w-7xl mx-auto text-center md:py-20">
        <div className="flex flex-col items-center ">
          <div className="flex-shrink-0 mb-5">
            <div className="w-64 h-64 md:w-70 md:h-70 rounded-full overflow-hidden ring-8 ring-primary/50 shadow-2xl">
              <img
                src={profileImg}
                alt="Taiye Idolor"
                className="w-full h-full object-cover object-[center_70%] "
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="md:mb-4 text-2xl md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-[#4169E1]">Oluwabukola Amoo</span>
            </h1>
            <h2 className="md:mb-6 mb-2 text-sm md:text-2xl lg:text-3xl text-muted-foreground">
              Software Developer
            </h2>
            <p className="mb-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              I build scalable web applications and intuitive user experiences.
              Passionate about clean code, modern technologies, and solving
              complex problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {/* Get in Touch */}
              <Button
                size="lg"
                className="bg-[#4169E1] hover:bg-[#4169E1]/90"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>

              {/* View Resume */}
              <Button size="lg" variant="outline" asChild>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-4 justify-center mt-8">
              <a
                href="https://github.com/AmooOluwabukola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#4169E1] transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/oluwabukola-amoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#4169E1] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:harbike88@gmail.com"
                className="text-muted-foreground hover:text-[#4169E1] transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
