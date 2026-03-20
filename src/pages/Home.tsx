import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"
import Header from "../components/Header"
import Landing from "../components/Landing"
import TechnicalSkills from "@/components/TechnicalSkills"
import ProfessionalExperience from "@/components/ProfessionalExperience"
import FeaturedProjects from "@/components/FeaturedProjects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { useRef } from "react"

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <GravityStarsBackground className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl" />
      <Header
        refs={{
          Home: homeRef,
          Skills: skillsRef,
          Experience: experienceRef,
          Projects: projectsRef,
          Contact: contactRef,
        }}
      />
      <div ref={homeRef} className="sm:mt-[175px] lg:h-[calc(100vh-64px)]">
        <Landing />
      </div>

      <div ref={skillsRef}>
        <TechnicalSkills />
      </div>

      <div ref={experienceRef}>
        <ProfessionalExperience />
      </div>

      <div ref={projectsRef}>
        <FeaturedProjects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
