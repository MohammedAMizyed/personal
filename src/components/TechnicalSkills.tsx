import { useTranslation } from "react-i18next"
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaCss3Alt,
  FaHtml5,
  FaJs,
} from "react-icons/fa"

import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiReacthookform,
  SiZod,
  SiReactrouter,
  SiShadcnui,
  SiFramer,
  SiNetlify,
  SiPnpm,
} from "react-icons/si"
import { SiPostman, SiReactquery } from "react-icons/si"

import {
  FaGlobe,
  FaExchangeAlt,
  FaCode,
  FaFilter,
  FaLink,
  FaLock,
  FaKey,
  FaShieldAlt,
  FaHeading,
  FaFileCode,
  FaCloud,
  FaEnvira,
} from "react-icons/fa"
import { TbBrandReact } from "react-icons/tb"
export default function TechnicalSkills() {
  const { t } = useTranslation()
  const skillsData = [
    {
      title: t("Core Languages"),
      skills: [
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
    },

    {
      title: t("React Ecosystem"),
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        {
          name: "React Query",
          icon: <SiReactquery className="text-red-500" />,
        },
        {
          name: "React Hook Form",
          icon: <SiReacthookform className="text-pink-500" />,
        },
        {
          name: "React Router",
          icon: <SiReactrouter className="text-red-400" />,
        },
        { name: "Zustand", icon: <TbBrandReact className="text-gray-700" /> },
        { name: "Zod", icon: <SiZod className="text-blue-500" /> },
        { name: "React Icons", icon: <FaReact className="text-purple-500" /> },
      ],
    },

    {
      title: t("Styling  UI"),
      skills: [
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-500" />,
        },
        {
          name: "Material UI",
          icon: "",
        },
        {
          name: "shadcn/ui",
          icon: <SiShadcnui className="text-black dark:text-white" />,
        },
        {
          name: "Framer Motion",
          icon: <SiFramer className="text-black dark:text-white" />,
        },
        { name: "CSS Modules", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "cn utility", icon: <FaCode className="text-gray-600" /> },
      ],
    },

    {
      title: t("API DevelopmentTesting"),
      skills: [
        { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
        { name: "RESTful APIs", icon: <FaGlobe className="text-blue-600" /> },
        { name: "Axios", icon: <FaCloud className="text-purple-500" /> },
        { name: "Fetch API", icon: <FaCode className="text-gray-600" /> },
        { name: "Query Params", icon: <FaFilter className="text-green-600" /> },
        { name: "Path Params", icon: <FaLink className="text-teal-600" /> },
        { name: "Authentication", icon: <FaLock className="text-red-500" /> },
        { name: "Authorization", icon: <FaKey className="text-yellow-600" /> },
        { name: "JWT", icon: <FaShieldAlt className="text-indigo-600" /> },
        {
          name: "HTTP Methods",
          icon: <FaExchangeAlt className="text-blue-500" />,
        },
        { name: "Headers", icon: <FaHeading className="text-pink-600" /> },
        { name: "JSON", icon: <FaFileCode className="text-amber-600" /> },
      ],
    },

    {
      title: t("Development  Deployment"),
      skills: [
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
        { name: "npm", icon: <FaNpm className="text-red-500" /> },
        { name: "pnpm", icon: <SiPnpm className="text-orange-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        {
          name: "GitHub",
          icon: <FaGithub className="text-black dark:text-white" />,
        },
        { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
        {
          name: "GitHub Pages",
          icon: <FaGithub className="text-gray-800 dark:text-gray-200" />,
        },
        { name: "Vite Build", icon: <SiVite className="text-yellow-500" /> },
      ],
    },

    {
      title: t("i18n & Utilities"),
      skills: [
        { name: "i18n", icon: "" },
        {
          name: "react-i18next",
          icon: "",
        },
        { name: "Translation", icon: <span className="text-2xl">🌐</span> },
        {
          name: "Environment Variables",
          icon: <FaEnvira className="text-gray-600" />,
        },
        {
          name: "Type Safety",
          icon: <SiTypescript className="text-blue-600" />,
        },
      ],
    },
  ]
  return (
    <div className="container mt-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-5">
          {t("Technical Skills")}
        </h1>
        <h2 className="sm:text-2xl max-w-[750px] m-auto text-[#717182]">
          {t("Comprehensive expertise across modern front-end development")}
        </h2>
      </div>
      <div className="my-10 flex justify-center flex-wrap items-stretch gap-5">
        {skillsData.map((item) => {
          return (
            <div className="lg:basis-[30%] basis-[100%] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white border-b pb-2">
                {item.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {item.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    {skill.icon}
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
