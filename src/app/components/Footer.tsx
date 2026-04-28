import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Oluwabukola Amoo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/AmooOluwabukola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#4169E1] transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/oluwabukola-amoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#4169E1] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:harbike88@gmail.com"
              className="text-muted-foreground hover:text-[#4169E1] transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
