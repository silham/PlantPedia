import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

type Inputs = {
  name: string;
  email: string;
  title: string;
  content: string;
};

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_USER_ID")
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="Name" />
      {errors.name && <span>This field is required</span>}

      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <span>This field is required</span>}

      <input {...register("title", { required: true })} placeholder="Title" />
      {errors.title && <span>This field is required</span>}

      <textarea
        {...register("content", { required: true })}
        placeholder="Content"
      />
      {errors.content && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
