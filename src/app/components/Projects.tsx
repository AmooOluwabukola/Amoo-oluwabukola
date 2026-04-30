import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "./ui/badge";
import ewaitersImg from "../../assets/ewaiter.png";
import egifterImg from "../../assets/egifter.png";
import taiyePortImg from '../../assets/taiye-port.png'

export function Projects() {
  // const projects = [
  //   {
  //     title: "Hotel Management System",
  //     description:
  //       "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
  //     technologies: ["React","TypeScript", "NestJs", "MongoDB"],
  //     liveUrl: "https://test.ewaiters.com/",
  //     githubUrl: "https://api-test.ewaiters.com/api/docs#/",
  //   },
  //   {
  //     title: "E-gifting Application",
  //     description:
  //       "A collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.",
  //     technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  //     liveUrl: "https://egifter.ng/",
  //     githubUrl: "#",
  //   },
  //   {
  //     title: "Social Media Dashboard",
  //     description:
  //       "Analytics dashboard for social media management with data visualization, scheduling, and engagement tracking.",
  //     technologies: ["React", "Python", "FastAPI", "MongoDB", "Chart.js"],
  //     liveUrl: "https://egifter.ng/",
  //     githubUrl: "#",
  //   },
  //   {
  //     title: "Mobile Fitness Tracker",
  //     description:
  //       "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI-powered recommendations.",
  //     technologies: ["React Native", "Expo", "Firebase", "TensorFlow"],
  //     liveUrl: "https://egifter.ng/",
  //     githubUrl: "https://egifter.ng/",
  //   },
  // ];

  const projects = [
    {
      title: "Ewaiters (Hotel Management System)",
      description:
        "A full-stack hotel management platform where I contributed to both frontend and backend development, implementing core features, API integrations, and improving overall system flow and usability.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "NestJs",
        "MongoDB",
        "PayStack",
      ],
      liveUrl: "https://test.ewaiters.com/",
      docUrl: "https://api-test.ewaiters.com/api/docs#/",
      image: ewaitersImg,
    },
    {
      title: "E-Gifter",
      description:
        "An e-gifting platform where I collaborated on the backend, building authentication flows, gift page creation and updates, and user settings, ensuring secure and scalable API design.",
      technologies: ["Node.js", "NestJS", "MongoDB"],
      liveUrl: "https://egifter.ng/",
      docUrl: "#", // leave empty or remove button if no doc yet
      image: egifterImg,
    },
    {
  title: "Taiye Robinson Portfolio",
  description:
    "A modern, responsive portfolio website designed in Figma and developed using React, showcasing projects and experience with smooth animations, clean UI, and EmailJS integration for seamless user contact.",
  technologies: [  "Figma","React", "TypeScript", "Tailwind CSS", "EmailJS"],
  liveUrl: "https://taiye-robinson.vercel.app/",
  docUrl: "https://github.com/AmooOluwabukola/Taiye-Portfolio",
  image: taiyePortImg,
}
  ];
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            A selection of real-world projects I've worked on, showcasing my
            experience in building scalable backend systems and full-stack
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow border-2 hover:border-[#4169E1]/20">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full  object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="mb-3">{project.title}</h3>

                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-[#4169E1] hover:bg-[#4169E1]/90"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  {project.docUrl && project.docUrl !== "#" && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.docUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Docs
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
