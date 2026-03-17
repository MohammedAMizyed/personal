import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"
import Header from "../components/Header"
import Landing from "../components/Landing"
import TechnicalSkills from "@/components/TechnicalSkills"

export default function Home() {
  return (
    <div>
      <GravityStarsBackground className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl" />

      <Header />
      <div className="mt-[175px] h-[calc(100vh-64px)]">
        <Landing />
      </div>
      <div className="h-screen">
        <TechnicalSkills />
      </div>
    </div>
  )
}
