import { z } from "zod";

export const minEmail = 5;
export const maxEmail = 100;
export const minSubject = 5;
export const maxSubject = 300;
export const minMessage = 5;
export const maxMessage = 500;

export const FormSchema = z.object({
  email: z
    .string()
    .min(minEmail, {
      message: "Email must be at least 5 characters",
    })
    .max(maxEmail, {
      message: "Email must be at most 100 characters",
    })
    .email({
      message: "Invalid email address",
    }),
  subject: z
    .string()
    .min(minSubject, {
      message: "Subject must be at least 5 characters",
    })
    .max(maxSubject, {
      message: "Subject must be at most 300 characters",
    }),
  message: z
    .string()
    .min(minMessage, {
      message: "Message must be at least 5 characters",
    })
    .max(maxMessage, {
      message: "Subject must be at most 1000 characters",
    }),

  confirm__name: z.string(),
});

export type FormDataType = z.infer<typeof FormSchema>;
