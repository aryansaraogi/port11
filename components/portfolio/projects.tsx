"use client"

import { ExternalLink, Github, Folder } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for scalability and performance.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/placeholder-project-1.jpg",
  },
  {
    title: "AI Task Manager",
    description:
      "An intelligent task management application that uses AI to prioritize tasks, suggest deadlines, and automate recurring workflows. Features natural language processing for quick task entry.",
    technologies: ["React", "Python", "FastAPI", "OpenAI", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/placeholder-project-2.jpg",
  },
  {
    title: "Real-Time Collaboration Tool",
    description:
      "A collaborative workspace application enabling real-time document editing, video conferencing, and project management. Supports multiple users with conflict resolution.",
    technologies: ["Vue.js", "WebSockets", "Node.js", "MongoDB", "WebRTC"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/placeholder-project-3.jpg",
  },
]

const otherProjects = [
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with 7-day forecasts, location search, and weather alerts.",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio Generator",
    description:
      "A CLI tool that generates customizable portfolio websites from a simple configuration file.",
    technologies: ["Node.js", "Handlebars", "CLI"],
    github: "https://github.com",
  },
  {
    title: "Markdown Editor",
    description:
      "A minimal markdown editor with live preview, syntax highlighting, and export options.",
    technologies: ["TypeScript", "React", "Monaco Editor"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Budget Tracker",
    description:
      "Personal finance tracker with expense categorization, charts, and budget alerts.",
    technologies: ["React Native", "SQLite", "Chart.js"],
    github: "https://github.com",
  },
  {
    title: "Recipe Finder",
    description:
      "Search and save recipes based on available ingredients. Includes nutritional information.",
    technologies: ["Vue.js", "Spoonacular API", "Firebase"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Code Snippet Manager",
    description:
      "Organize and search code snippets with syntax highlighting and tags.",
    technologies: ["Electron", "React", "LowDB"],
    github: "https://github.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-0 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-12">
          Projects
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="space-y-4">
                <p className="text-sm text-primary font-mono">Featured Project</p>
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm font-mono text-muted-foreground">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Other Noteworthy Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1 group"
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
