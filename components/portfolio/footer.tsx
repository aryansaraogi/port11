import { Github, Linkedin, Twitter, Mail , } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/aryansaraogi", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aryan-saraogi83", label: "LinkedIn" },
  //{ icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:aryansaraogi02@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-0 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            Designed & Built by{" "}
            <span className="text-foreground font-medium">Aryan Saraogi</span>
          </p>
          
          <div className="flex items-center gap-4">
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
          </div>
        </div>
        
        <p className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
