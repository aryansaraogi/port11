import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2025 — Present",
    title: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    companyUrl: "https://www.cognizant.com/",
    description:
      "Currently working as a Software Development Engineer in Test, where I am involved in testing and fixing  web applications for clients in the technology sector. I collaborate with cross-functional teams to design and testing features, optimize performance, and ensure high-quality code through rigorous testing and code reviews.",
    technologies: ["Java", "Selenium", "JavaScript", "React", "Docker", "Git","CI/CD"],
  },
  {
    period: "2024 — 2024",
    title: "Fullstack Developer Intern",
    company: "Centre for Railway Information Systems",
    companyUrl: "https://cris.org.in/",
    description:
      "Developed and shipped highly interactive web applications for a internal ERP protal for there management traines . Collaborated with designers and product managers to implement responsive designs and ensure seamless user experiences in a real world project.",
    technologies: ["Angular","TypeScript", "Java", "Git",  "Docker"],
  },
  {
    period: "2023 — 2023",
    title: " Software Developer Intern",
    company: "Qss Technosoft Pvt Ltd",
    companyUrl: "https://www.qsstechnosoft.com/",
    description:
       "Assisted in the development of web applications and gained hands-on experience with modern frameworks.    Participated in code reviews and contributed to improving development workflows.",
    technologies: ["JavaScript", "React", "CSS", "Node.js", "Git","Express.js"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-0 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[140px_1fr] gap-4 md:gap-8"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {exp.title} ·{" "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline underline-offset-4"
                    >
                      {exp.company}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0 hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 mt-12 text-foreground hover:text-primary transition-colors group"
        >
          <span>View Full Resume</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
