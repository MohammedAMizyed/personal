import type React from "react"
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"
type Skills = {
  name: string
  icon: React.ReactNode
}
type Card = {
  title: string
  company: string
  period: string
  location: string
  description: string
  skills: Skills[]
}
type Props = {
  data: Card[]
}

export default function ExperienceCard({ data }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {data.map((item, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="bg-white  transition-all duration-200 ease-in-out  dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg  "
        >
          <div className="flex justify-between flex-wrap gap-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaBriefcase className="text-gray-500" />
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.company}</p>
            </div>

            <div className="text-sm text-gray-500 flex flex-col items-end gap-1">
              <span className="flex items-center gap-2">
                <FaCalendarAlt /> {item.period}
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt /> {item.location}
              </span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
