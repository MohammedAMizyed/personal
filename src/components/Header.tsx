import { PiTranslate } from "react-icons/pi"
import { RiUserStarLine } from "react-icons/ri"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export default function Header() {
  const { t, i18n } = useTranslation()

  const links = [
    { id: 1, title: `${t("Home")}` },
    { id: 2, title: `${t("Skills")}` },
    { id: 3, title: `${t("Experience")}` },
    { id: 4, title: `${t("Projects")}` },
    { id: 5, title: `${t("Contact")}` },
  ]
  return (
    <div className="container fixed left-[50%] -translate-x-1/2 top-0 z-20 bg-wight backdrop-blur-lg border-t-1 border-b-[1px] border-[#0000001a]">
      <div className=" relative z-10 h-16 mt-2  flex justify-between items-center">
        <h1 className="text-[20px] text-[#717182] cursor-pointer hover:text-[black] duration-200">
          Mohammed Developer
        </h1>
        <div className=" flex justify-center items-center gap-3">
          {links.map((link) => {
            return (
              <div
                className="text-[17px] p-2 sm:block hidden  hover:text-black cursor-pointer duration-200 text-[#717182b9]"
                key={link.id}
              >
                <div
                  onClick={() => {
                    window.scrollTo({
                      top:
                        link.title == "Home"
                          ? 0
                          : link.title == "Skills"
                            ? 750
                            : link.title == "Experience"
                              ? 1500
                              : link.title == "Projects"
                                ? 2250
                                : link.title == "Contact"
                                  ? 3000
                                  : 0,
                      behavior: "smooth",
                    })
                  }}
                >
                  {link.title}
                </div>
              </div>
            )
          })}
          <div className="block sm:hidden ">list</div>

          <Tooltip>
            <TooltipTrigger>
              <div
                className={cn(i18n.language === "ar" ? "hidden" : "block")}
                onClick={() =>
                  i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
                }
              >
                <PiTranslate className="text-3xl cursor-pointer hover:text-[#717182] duration-200" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {t("changeLanguage")}
                {i18n.language === "ar" ? " English " : " Arabic"}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className={cn(i18n.language === "en" ? "hidden" : "block")}>
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() =>
                  i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
                }
              >
                <PiTranslate className="text-3xl cursor-pointer hover:text-[#717182] duration-200" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {i18n.language === "ar" ? " English " : " Arabic"}
                {t("changeLanguage")}
              </p>{" "}
            </TooltipContent>
          </Tooltip>
        </div>

        <div
          className={cn(
            "absolute -z-10  bottom-[-35px]",
            i18n.language === "en" ? "left-25" : "right-25",
          )}
        >
          <div className="hidden  bg-[#d0d0d0db] rounded-2xl p-2 text-[#030213] sm:flex justify-center items-center gap-3 px-5 ">
            <RiUserStarLine />
            {t("Available for Work")}
          </div>
        </div>
      </div>
    </div>
  )
}
