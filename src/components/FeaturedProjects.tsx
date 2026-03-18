import {
  FaReact,
  FaPlug,
  FaLock,
  FaKey,
  FaShieldAlt,
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
  FaEye,
  FaImages,
} from "react-icons/fa"
import project from "../assets/project1.png"
import project2 from "../assets/movies.png"
import project3 from "../assets//shope.png"
import { LuGithub } from "react-icons/lu"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { CiFilter } from "react-icons/ci"
import { useTranslation } from "react-i18next"
export default function FeaturedProjects() {
  const { t } = useTranslation()
  const projects = [
    {
      title: "Clothing E-Commerce Platform",
      description: t("Full-featured e-commerce platform with category "),
      img: project3,
      tech: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "API", icon: <FaPlug className="text-green-500" /> },
        { name: "Auth", icon: <FaLock className="text-red-500" /> },
        { name: "Authorization", icon: <FaKey className="text-yellow-500" /> },
        { name: "JWT", icon: <FaShieldAlt className="text-indigo-500" /> },
      ],
      code: "https://github.com/MohammedAMizyed/Clothes_App.git",
      demo: "https://mohammed-a-mizyed-cloth-app.netlify.app/",
    },
    {
      title: "Food Application",
      description: t(
        "Dynamic food app with category-based filtering and dedicated meal pages. Implemented favorites and cart functionality along with interactive UI components like carousels. Focused on responsive design and smooth U",
      ),
      img: project,
      tech: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "API", icon: <FaPlug className="text-green-500" /> },
        { name: "Cart", icon: <FaShoppingCart className="text-orange-500" /> },
        { name: "Favorites", icon: <FaHeart className="text-red-500" /> },
        { name: "Carousel", icon: <FaImages className="text-purple-500" /> },
        { name: "filtering", icon: <CiFilter className="text-purple-500" /> },
      ],
      code: "https://github.com/MohammedAMizyed/Food_App.git",
      demo: "https://mohammedamizyed-foodapp.netlify.app/",
    },
    {
      title: "Movies App",
      description: t("Interactive movie browsing application wit"),
      img: project2,
      tech: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "API", icon: <FaPlug className="text-green-500" /> },
        { name: "Wishlist", icon: <FaRegHeart className="text-pink-500" /> },
        { name: "Favorites", icon: <FaHeart className="text-red-500" /> },
        { name: "Watched", icon: <FaEye className="text-blue-500" /> },
      ],
      code: "#",
      demo: "https://mohammed-a-mizyed-moviesrefactor.netlify.app/",
    },
  ]

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-2">
          {t("Featured Projects")}
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          {t("Featured Projects descrabtion")}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div
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
    </div>
  )
}
