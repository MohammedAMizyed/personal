import background from "../assets/background.png"
import personal from "../assets/Gemini_Generated_Image_qazcxxqazcxxqazc.png"
import { Button } from "../components/ui/button"
import { FiGithub } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { MdOutgoingMail } from "react-icons/md"
import { VscDebugBreakpointLog } from "react-icons/vsc"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
export default function Landing() {
  const { t } = useTranslation()
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])
  return (
    <div className="container lg:px-33! ">
      <div className="flex justify-center flex-col-reverse  md:flex-row  sm:gap-10 items-center ">
        <div className="flex-1/2">
          <h1
            data-aos="fade-up"
            className="sm:text-start text-center text-[30px] sm:mt-0 mt-5 sm:text-[54px] font-semibold "
          >
            {t("Hello I")}

            <span className="block animate-pulse">Mohammed Developer</span>
          </h1>
          <h2
            data-aos="fade-up"
            className="text-[#717182] text-[22px] sm:text-start text-center sm:text-3xl my-3"
          >
            {t("Software Engineer crafting modern digital experiences")}
          </h2>
          <h2
            data-aos="fade-up"
            className="text-[#717182] text-xl sm:text-start  text-center sm:text-2xl my-5 max-w-[550px]"
          >
            {t("")}
            {t("Specializing in modern")}{" "}
            <span className="font-semibold text-black">
              front-end development
            </span>{" "}
            {t("and creating responsive user interfaces")}
          </h2>
          <div className="flex gap-5 justify-center sm:justify-start items-center my-5">
            <Button
              data-aos="fade-up"
              className="cursor-pointer p-5 sm:w-fit w-[50%]   hover:bg-[#000000cb]"
            >
              {t("Contact Me")}
            </Button>

            <Button
              data-aos="fade-up"
              className="cursor-pointer sm:w-fit w-[50%] p-5"
              variant={"outline"}
            >
              {t("View My Work")}
            </Button>
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center sm:justify-start justify-center gap-5 mt-5"
          >
            <div className="rounded-[50%] cursor-pointer border-[1px] border-[#717182] p-3">
              <a
                href="https://www.facebook.com/MohammedAMizyed1 "
                target="_blank"
              >
                <FiGithub />
              </a>
            </div>
            <div className="rounded-[50%] cursor-pointer border-[1px] border-[#717182] p-3">
              <a
                href="https://www.facebook.com/MohammedAMizyed1 "
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className="rounded-[50%] cursor-pointer border-[1px] border-[#717182] p-3">
              <a
                href="https://www.facebook.com/MohammedAMizyed1 "
                target="_blank"
              >
                <MdOutgoingMail />
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flex-1/2 justify-center flex ">
          <div className=" select-none w-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]  border-b-6   border-white relative -top-2 sm:top-0 rounded-[50%] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <img
              className=" rounded-[50%] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden "
              src={background}
              alt=""
            />
            <img
              className="absolute  hover:scale-103 scale-102  cursor-pointer duration-200 top-1/2 mix-blend-multiply left-1/2   -translate-x-1/2 -translate-y-1/2 rounded-full"
              src={personal}
              alt=""
            />
            <Button
              variant={"outline"}
              className={cn(
                "absolute p-5 -bottom-5 cursor-pointer right-[50%]  sm:-translate-x-[10px] sm:right-9 -translate-x-[-50%]",
              )}
            >
              <VscDebugBreakpointLog className="animate-pulse  text-green-500 " />
              {t("Available for hire")}{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
