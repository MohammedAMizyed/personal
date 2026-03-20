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

import { CiFilter } from "react-icons/ci"
import { useTranslation } from "react-i18next"
import Inter from "./Inter"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import ProjectCard from "./ProjectCards"
export default function FeaturedProjects() {
  const { t } = useTranslation()
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])
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
      <Inter
        title={t("Featured Projects")}
        description={t("Featured Projects descrabtion")}
      />
      <ProjectCard projects={projects} />
    </div>
  )
}
