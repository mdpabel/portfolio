import React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "./EmailTemplate";
import FormSubmitionButton from "./FormSubmitionButton";

const resend = new Resend(process.env.RESEND_API_KEY);

const Form = () => {
  const handleFormSubmission = async (formData: FormData) => {
    "use server";
    try {
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;
      const subject = formData.get("subject") as string;

      const emailOptions = {
        from: "From mdpabel.com <onboarding@resend.dev>",
        to: [process.env.TO_EMAIL],
        subject: subject,
        reply_to: email,
        react: EmailTemplate({ message, email }),
      };
      // @ts-ignore
      await resend.emails.send(emailOptions);

      formData.set("email", "");
      formData.set("message", "");
      formData.set("subject", "");
    } catch (error) {}
  };

  return (
    <form action={handleFormSubmission} className="px-10 space-y-4">
      <div>
        <input
          type="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
          placeholder="name@mdpabel.com"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="subject"
          className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Subject..."
          required
        />
      </div>
      <div className="sm:col-span-2">
        <textarea
          name="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <FormSubmitionButton />
    </form>
  );
};

export default Form;
