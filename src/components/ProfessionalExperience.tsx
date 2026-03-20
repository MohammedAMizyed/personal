import { useTranslation } from "react-i18next"
import {
  FaReact,
  FaLock,
  FaKey,
  FaShieldAlt,
  FaPlug,
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
  FaEye,
  FaImages,
} from "react-icons/fa"
import Inter from "./Inter"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import ExperienceCard from "./ExperienceCard"
export default function ProfessionalExperience() {
  const { t } = useTranslation()
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])
  const data = [
    {
      title: "Frontend Developer",
      company: t("Zain Oasis E-Commerce Project"),
      period: "2025",
      location: t("Personal Project"),
      description: t(
        "Engineered a scalable e-commerce application with dynamic filterin",
      ),
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "API", icon: <FaPlug className="text-green-500" /> },
        { name: "Auth", icon: <FaLock className="text-red-500" /> },
        { name: "Authorization", icon: <FaKey className="text-yellow-500" /> },
        { name: "JWT", icon: <FaShieldAlt className="text-indigo-500" /> },
      ],
    },
    {
      title: "React Developer",
      company: "Food App Project",
      period: "2025",
      location: t("Personal Project"),
      description: t("Built a dynamic food application with API integration"),
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "API", icon: <FaPlug className="text-green-500" /> },
        {
          name: "Cart",
          icon: <FaShoppingCart className="text-orange-500" />,
        },
        { name: "Favorites", icon: <FaHeart className="text-red-500" /> },
        { name: "Carousel", icon: <FaImages className="text-purple-500" /> },
      ],
    },
    {
      title: "Frontend Developer",
      company: "Movies App Project",
      period: "2025",
      location: t("Personal Project"),
      description: t("Developed a movie application with real-time search"),
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "API", icon: <FaPlug className="text-green-500" /> },
        { name: "Wishlist", icon: <FaRegHeart className="text-pink-500" /> },
        { name: "Favorites", icon: <FaHeart className="text-red-500" /> },
        { name: "Watched", icon: <FaEye className="text-blue-500" /> },
      ],
    },
  ]

  return (
    <div className="container mt-16 max-w-[900px]">
      <Inter
        title={t("Professional Experience")}
        description={t(
          "Front-End Developer focused on building modern web applications using React and real-world projects",
        )}
      />

      <ExperienceCard data={data} />
    </div>
  )
}
