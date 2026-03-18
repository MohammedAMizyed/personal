import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"
import Header from "../components/Header"
import Landing from "../components/Landing"
import TechnicalSkills from "@/components/TechnicalSkills"
import ProfessionalExperience from "@/components/ProfessionalExperience"
import FeaturedProjects from "@/components/FeaturedProjects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div>
      <GravityStarsBackground className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl" />

      <Header />
      <div className="sm:mt-[175px] lg:h-[calc(100vh-64px)]">
        <Landing />
      </div>
      <TechnicalSkills />
      <ProfessionalExperience />
      <FeaturedProjects />
      <Contact />
    </div>
  )
}
