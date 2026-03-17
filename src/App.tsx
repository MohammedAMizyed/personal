import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { useTranslation } from "react-i18next"
import { TooltipProvider } from "./components/ui/tooltip"
function App() {
  const { i18n } = useTranslation()

  return (
    <TooltipProvider>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/"} element={<Home />} />
        </Routes>
      </div>
    </TooltipProvider>
  )
}

export default App
