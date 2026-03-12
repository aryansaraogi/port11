import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <div className="lg:flex">
        {/* Fixed Left Column - Hero/Navigation (Desktop Only) */}
        <div className="hidden lg:fixed lg:top-0 lg:left-0 lg:w-1/2 lg:h-screen lg:flex lg:items-center lg:justify-end lg:pr-12">
          <Hero />
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="lg:ml-[50%] lg:w-1/2 px-8 lg:px-12">
          {/* Mobile Hero */}
          <div className="lg:hidden">
            <Hero />
          </div>
          <div className="flex flex-col gap-24 md:gap-32 lg:gap-40  py-20 md:py-28">
            <About />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  )
}
