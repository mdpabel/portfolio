"use client";
import { Button } from "@/components/Button";
import Spinner from "@/components/Spinner";
import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const FormSubmissionButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="flex space-x-2 px-5 py-3 text-sm font-medium text-center text-white bg-black rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
    >
      Send message {pending ? <Spinner /> : null}
    </Button>
  );
};

export default FormSubmissionButton;
