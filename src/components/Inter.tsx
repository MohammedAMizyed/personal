import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
export default function Inter({
  title,
  description,
}: {
  title: string
  description: string
}) {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])
  return (
    <div data-aos="fade-up" className="text-center mb-12">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 max-w-xl mx-auto">{description}</p>
    </div>
  )
}
