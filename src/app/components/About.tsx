import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Code2, Database, Layout, Smartphone } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Building end-to-end solutions with modern frameworks and best practices",
    },
    {
      icon: Layout,
      title: "Responsive Design",
      description:
        "Creating pixel-perfect, mobile-first interfaces that work on all devices",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description:
        "Designing scalable server architectures and RESTful APIs",
    },
    // {
    //   icon: Smartphone,
    //   title: "Mobile Development",
    //   description: "Crafting cross-platform mobile experiences with React Native",
    // },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-center">About Me</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-6">
            I’m a full-stack developer experienced in building applications such
            as a gift management system, a hotel management platform with
            payment integration, and a utility service platform supporting
            multiple user roles and workflows. These projects have strengthened
            my ability to turn complex requirements into clean frontend
            interfaces, solid backend logic, and well-structured APIs.
          </p>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-6">
            I prioritize clean architecture, readability, and building systems
            that are easy to maintain and scale. I’m continuously improving my
            skills in system design, TypeScript, and modern development
            practices.
          </p>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            I’m driven by growth and impact, and I enjoy collaborating on
            projects where I can contribute, learn, and build meaningful
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-2 hover:border-[#4169E1]/20">
                <feature.icon className="h-10 w-10 text-[#4169E1] mb-4" />
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
