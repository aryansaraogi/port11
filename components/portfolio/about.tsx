const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Fastapi",
  "SQL",
  "MongoDB",
  "REST APIs",
  "Git",
  "Docker",
  "CI/CD",
  "AWS",
  "Tailwind CSS",
  "Selenium",
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-0 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-8">
          About
        </h2>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate software developer with a love for creating elegant, 
            efficient, enterprise solutions to complex problems. 
          </p>
          
          <p>
            Currently, I'm focused on building accessible, human-centered products 
            that make a real difference. I specialize in{" "}
            <span className="text-foreground font-medium">full-stack development</span>, 
            with particular expertise in modern JavaScript frameworks and cloud technologies.
          </p>
          
          <p>
            When I'm not coding, you can find me exploring new technologies, or sharing knowledge through technical writing 
            and mentorship.
          </p>

          <p>
            Here are some of the technologies I've been working with recently:
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="text-primary">▹</span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
