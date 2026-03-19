import { useTranslation } from "react-i18next"
import { MdOutlineEmail } from "react-icons/md"
import { CiPhone } from "react-icons/ci"
import { IoLocationOutline } from "react-icons/io5"
import { Button } from "./ui/button"
import { FiSend } from "react-icons/fi"
import { useForm, type SubmitHandler } from "react-hook-form"
import { boolean, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from "emailjs-com"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { TbLoader2 } from "react-icons/tb"
export default function Contact() {
  const { t } = useTranslation()
  const [successMessage, setSuccessMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(Boolean)

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
    formState: { isSubmitted, isLoading },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  const onSubmit: SubmitHandler<FormData> = (data) => {
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
  }
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
                <input
                  {...register("subject")}
                  className="p-2 w-full rounded-[5px] bg-[#f3f3f5] my-2"
                  type="text"
                  placeholder={t("subject")}
                />
                <textarea
                  {...register("message")}
                  className="p-2 w-full rounded-[5px] bg-[#f3f3f5] my-2 h-[60px]"
                  placeholder={t("your message")}
                />
                <Button className="w-full cursor-pointer py-4">
                  {isLoading ? (
                    <span>
                      <TbLoader2 className="animate-spin " />
                    </span>
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
                    isSubmitted ? "text-green-500" : "text-red-500",
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
