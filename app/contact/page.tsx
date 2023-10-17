import React from "react";
import Form from "./Form";
import {
  FBIcon,
  LocationIcon,
  PhoneIcon,
  TwitterIcon,
  EmailIcon,
} from "@/components/icons";

export const dynamic = "force-static";

const Contact = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto pt-12 md:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="bg-white/50 flex flex-col items-center justify-center p-5 rounded-lg">
            <div className="space-y-4">
              <h2 className="mb-4 text-4xl font-semibold text-gray-600 ">
                Contact Me
              </h2>
              <div className="flex gap-4">
                <LocationIcon />
                <span>Cumilla, BD</span>
              </div>

              <div className="flex gap-4">
                <PhoneIcon />
                <span>+8801761442268</span>
              </div>

              <div className="flex gap-4">
                <EmailIcon />
                <span>mdpabel385@gmail.com</span>
              </div>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
