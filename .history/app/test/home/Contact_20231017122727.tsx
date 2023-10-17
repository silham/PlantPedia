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
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
      .send("service_vztfqy3", "template_8uumb6m", data, "G15n30binc7Gxi2oR")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex rounded-xl bg-custom-blue-green w-full h-[80vh] my-[5vh] flex-col shadow-md overflow-hidden px-8">
      <div className="w-full text-[52px] font-black text-center text-white">
        Contact Us
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
            placeholder="Email"
            className={`${
              errors.user_name ? "outline outline-red-600" : "outline-none"
            } w-[48%] font-medium text-[16px] text-gray-900 rounded-md border-gray-700 bg-[#9AEB59] h-[40px] px-2 placeholder:text-gray-600 placeholder:text-opacity-50`}
          />
          {errors.user_email && <span>This field is required</span>}
        </div>

        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
        />
        {errors.subject && <span>This field is required</span>}

        <textarea
          {...register("message", { required: true })}
          placeholder="Message"
        />
        {errors.message && <span>This field is required</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
