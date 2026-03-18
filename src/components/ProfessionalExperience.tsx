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
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"

export default function ProfessionalExperience() {
  const { t } = useTranslation()

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
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          {t("Professional Experience")}
        </h1>
        <p className="max-w-[700px] mx-auto text-gray-500 dark:text-gray-400">
          {t(
            "Front-End Developer focused on building modern web applications using React and real-world projects",
          )}
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition"
          >
            {/* Top Section */}
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

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.description}
            </p>

            {/* Skills */}
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
    </div>
  )
}
