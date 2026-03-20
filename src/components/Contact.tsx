import { useTranslation } from "react-i18next"
import { MdOutlineEmail } from "react-icons/md"
import { CiPhone } from "react-icons/ci"
import { IoLocationOutline } from "react-icons/io5"
import { Button } from "./ui/button"
import { FiSend } from "react-icons/fi"
import { useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from "emailjs-com"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { TbLoader2 } from "react-icons/tb"
import Inter from "./Inter"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])
  const { t } = useTranslation()
  const [successMessage, setSuccessMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(Boolean)
  const [loading, setLoading] = useState(false)

  const formSchema = z.object({
    name: z.string().min(3, t("The name must be at least 3 letters long")),
    email: z.string().email(t("unvalidE")),
    subject: z.string().min(3, t("must be")),
    message: z
      .string()
      .min(6, t("The password must be at least 6 characters long")),
  })
  type FormData = z.infer<typeof formSchema>

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true)
    emailjs
      .send(
        "service_zwy875n",
        "template_zgs5a7r",
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "EGAb6FhjO6EEfMxeG",
      )
      .then(
        () => {
          setSuccessMessage(t("The message was sent successfully"))
          setIsSuccess(true)
          reset()
        },
        () => {
          setIsSuccess(false)

          setSuccessMessage(t("Failed to send  Please try again later"))
        },
      )
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <div className="container mx-auto py-16">
      <Inter
        title={t("Let Work Together")}
        description={t(
          `Lets build beautiful fast and intuitive web interfaces together powered by modern front-end technologies`,
        )}
      />
      <div className=" flex  flex-col sm:flex-row  justify-center items-stretch max-w-[850px] m-auto   gap-10">
        <div data-aos="fade-up" className=" flex-1/2 ">
          <div className="flex  items-center gap-3  bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition duration-200">
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
        <div
          data-aos="fade-up"
          className="flex-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition duration-200"
        >
          <div className="flex  items-center gap-3 ">
            <div>
              <h3 className="text-gray-500 pb-3">{t("Send a Message")}</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-2">
                  <input
                    {...register("name")}
                    className="p-2 w-full rounded-[5px] bg-[#f3f3f5] my-2"
                    placeholder={t("your name")}
                    type="text"
                  />
                  <input
                    {...register("email")}
                    className="p-2 w-full rounded-[5px] bg-[#f3f3f5] my-2"
                    type="text"
                    placeholder={t("Your email")}
                  />
                </div>
                {(errors.name || errors.email) && (
                  <span className="text-red-500 text-sm">
                    {errors.name ? errors.name.message : errors.email?.message}
                  </span>
                )}
                <input
                  {...register("subject")}
                  className="p-2 w-full rounded-[5px] bg-[#f3f3f5] my-2"
                  type="text"
                  placeholder={t("subject")}
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm">
                    {errors.subject.message}
                  </span>
                )}
                <textarea
                  {...register("message")}
                  className="p-2 w-full rounded-[5px] bg-[#f3f3f5] mt-2 h-[60px]"
                  placeholder={t("your message")}
                />
                {errors.message && (
                  <span className="block mb-2 text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
                <Button
                  disabled={loading}
                  className="w-full cursor-pointer py-4"
                >
                  {loading ? (
                    <TbLoader2 className="animate-spin " />
                  ) : (
                    <div className="flex justify-center items-center gap-1">
                      <FiSend />
                      {t("send message")}
                    </div>
                  )}
                </Button>
                <div
                  className={cn(
                    "font-semibold  text-center mt-2",
                    isSuccess ? "text-green-500" : "text-red-500",
                  )}
                >
                  {successMessage}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
