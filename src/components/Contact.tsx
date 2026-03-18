import { useTranslation } from "react-i18next"
import { MdOutlineEmail } from "react-icons/md"
import { CiPhone } from "react-icons/ci"
import { IoLocationOutline } from "react-icons/io5"
import { Button } from "./ui/button"
import { FiSend } from "react-icons/fi"

export default function Contact() {
  const { t } = useTranslation()
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-2">
          {" "}
          {t("Let Work Together")}
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          {t(
            `Lets build beautiful fast and intuitive web interfaces together powered by modern front-end technologies`,
          )}
        </p>
      </div>
      <div className=" flex  flex-col sm:flex-row  justify-center items-stretch max-w-[850px] m-auto   gap-10">
        <div className=" flex-1/2 ">
          <div className="flex  items-center gap-3  bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition">
            <MdOutlineEmail className="text-2xl" />

            <div>
              <h3 className="font-semibold">{t("Email")}</h3>
              <h4 className="text-gray-500">mohammedamizyed2006@gmail.com</h4>
            </div>
          </div>
          <div className="flex  items-center gap-3 my-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition">
            <CiPhone className="text-2xl" />

            <div>
              <h3 className="font-semibold">{t("Phone")}</h3>
              <h4 className="text-gray-500">+972599634192</h4>
            </div>
          </div>
          <div className="flex  items-center gap-3 mt-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition">
            <IoLocationOutline className="text-2xl" />

            <div>
              <h3 className="font-semibold">{t("Location")}</h3>
              <h4 className="text-gray-500">
                {t("Available for Remote Work")}
              </h4>
            </div>
          </div>
        </div>
        <div className="flex-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition">
          <div className="flex  items-center gap-3 ">
            <div>
              <h3 className="text-gray-500 pb-3">{t("Send a Message")}</h3>
              <form>
                <div className="flex gap-2">
                  <input
                    className="p-2 w-full rounded-[5px] bg-[#f3f3f5] my-2"
                    placeholder={t("your name")}
                    type="text"
                  />
                  <input
                    className="p-2 w-full rounded-[5px] bg-[#f3f3f5] my-2"
                    type="text"
                    placeholder={t("Your email")}
                  />
                </div>
                <input
                  className="p-2 w-full rounded-[5px] bg-[#f3f3f5] my-2"
                  type="text"
                  placeholder={t("subject")}
                />
                <textarea
                  className="p-2 w-full rounded-[5px] bg-[#f3f3f5] my-2 h-[60px]"
                  placeholder={t("your message")}
                />
                <Button className="w-full cursor-pointer py-4">
                  <FiSend />
                  {t("send message")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
