import { useTranslation } from "react-i18next"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])
  const { t } = useTranslation()
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="font-semibold   my-2">Mohammed A. Mizyed Developer</h2>
        <h3 className="text-gray-500 my-2 text-[15px]">
          Front-End Engineer | React, TypeScript, Tailwind CSS | Building Fast &
          Interactive Web Interfaces
        </h3>
        <h4 className="text-gray-500 my-2 text-[15px]">
          © 2025 Mohammed A. Mizyed Developer. {t("All rights reserved")}.
        </h4>
      </div>
    </div>
  )
}
