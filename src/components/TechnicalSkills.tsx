import { useTranslation } from "react-i18next"
export default function TechnicalSkills() {
  const { t } = useTranslation()
  return (
    <div className="container">
      <h1>{t("Technical Skills")}</h1>
      <h2>
        {t("Comprehensive expertise across modern front-end development")}
      </h2>
    </div>
  )
}
