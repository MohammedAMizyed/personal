import { LuGithub } from "react-icons/lu"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
type Tech = {
  name: string
  icon: React.ReactNode
}

type Project = {
  title: string
  description: string
  img: string
  tech: Tech[]
  code: string
  demo: string
}

type Props = {
  projects: Project[]
}
export default function ProjectCard({ projects }: Props) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
      {projects.map((project, index) => (
        <div
          data-aos="fade-up"
          className="rounded-xl dark:bg-gray-800 hover:shadow-lg transition shadow-md overflow-hidden"
          key={index}
        >
          <div>
            <img
              className="object-cover w-full h-full "
              src={project.img}
              alt=""
            />
          </div>
          <div className="bg-white  p-6 flex flex-col justify-between ">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                  >
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="text-center px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <div className="flex justify-center items-center gap-2">
                  Code
                  <LuGithub />
                </div>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className=" text-center px-4 py-2 border rounded-md bg-black text-white hover:bg-[#111111e8] transition"
              >
                <div className="flex justify-center items-center gap-2">
                  Demo
                  <FaArrowUpRightFromSquare />
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
