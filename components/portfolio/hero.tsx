"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-0">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Software Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
            <Link 
              href="#about" 
              className="flex items-center gap-3 group hover:text-foreground transition-colors w-fit"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
              <span className="uppercase tracking-widest">About</span>
            </Link>
            <Link 
              href="#experience" 
              className="flex items-center gap-3 group hover:text-foreground transition-colors w-fit"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
              <span className="uppercase tracking-widest">Experience</span>
            </Link>
            <Link 
              href="#projects" 
              className="flex items-center gap-3 group hover:text-foreground transition-colors w-fit"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
              <span className="uppercase tracking-widest">Projects</span>
            </Link>
            <Link 
              href="#contact" 
              className="flex items-center gap-3 group hover:text-foreground transition-colors w-fit"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
              <span className="uppercase tracking-widest">Contact</span>
            </Link>
          </nav>

          <div className="flex items-center gap-4 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ml-2"
              aria-label="Download Resume"
            >
              <FileText className="w-5 h-5" />
              <span className="text-sm">Resume</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}
