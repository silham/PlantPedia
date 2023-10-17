"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

type Inputs = {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
};

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const user_id = process.env.NEXT_PUBLIC_EMAIL_USER_ID;
    if (service_id && template_id && user_id) {
      emailjs.send(service_id, template_id, data, user_id);
      reset();
    } else {
      console.error(".env fetching error");
    }
  };

  return (
    <div className="flex rounded-xl bg-custom-blue-green w-full pb-6 my-[5vh] flex-col shadow-md overflow-hidden px-8">
      <div className="w-full text-[52px] font-black text-center text-white">
        <h3>Contact Us</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mt-6"
      >
        <div className="flex flex-row w-full justify-between">
          <input
            {...register("user_name", { required: true })}
            placeholder="Name"
            className={`${
              errors.user_name ? "outline outline-red-600" : "outline-none"
            } w-[48%] font-medium text-[16px] text-gray-900 rounded-md border-gray-700 bg-[#9AEB59] h-[40px] px-2 placeholder:text-gray-600 placeholder:text-opacity-50`}
          />

          <input
            {...register("user_email", { required: true })}
            type="email"
            placeholder="Email"
            className={`${
              errors.user_email ? "outline outline-red-600" : "outline-none"
            } w-[48%] font-medium text-[16px] text-gray-900 rounded-md border-gray-700 bg-[#9AEB59] h-[40px] px-2 placeholder:text-gray-600 placeholder:text-opacity-50`}
          />
        </div>

        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          className={`${
            errors.subject ? "outline outline-red-600" : "outline-none"
          } w-full font-medium text-[16px] text-gray-900 rounded-md border-gray-700 bg-[#9AEB59] h-[40px] px-2 placeholder:text-gray-600 placeholder:text-opacity-50`}
        />

        <textarea
          {...register("message", { required: true })}
          placeholder="Message"
          className={`${
            errors.message ? "outline outline-red-600" : "outline-none"
          } w-full font-medium text-[16px] text-gray-900 rounded-md border-gray-700 bg-[#9AEB59] h-[200px] px-2 placeholder:text-gray-600 placeholder:text-opacity-50`}
        />
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="hover:scale-110 py-2 px-6 bg-[#9AEB59] w-fit font-semibold text-[16px] text-gray-900 rounded-md"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
