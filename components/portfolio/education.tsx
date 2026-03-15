import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: " SRM Institute of Science and Technology",
    period: "2021 — 2025",
    description:
      "Graduated with honors. Focused on software engineering, algorithms, and data structures. Active member of the Computer Science Club and participated in hackathons.",
  },
]

const certifications = [
  {
    name: "OCI Certified Gen AI Professional",
    issuer: "Oracle",
    date: "2025",
  },
  {
    name: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
    date: "2025",
  },
  { 
    name: "Model Context Protocol: Advanced",
    issuer: "Anthropic",
    date: "2026",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-0 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-12">
          Education
        </h2>

        <div className="space-y-12">
          {/* Education */}
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-primary">{edu.school}</p>
                <p className="text-sm text-muted-foreground font-mono">
                  {edu.period}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <p className="font-medium text-foreground">{cert.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-primary font-mono mt-2">
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
