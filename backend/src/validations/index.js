import { z } from "zod";

const requiredString = (field) =>
  z.string().trim().min(1, `${field} is required`);

export const registerSchema = z
  .object({
    name: requiredString("Name"),
    email: requiredString("Email").email({ message: "Invalid email address" }),
    password: requiredString("Password")
      .min(6, "Password must be at least 6 characters")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
    confirmPassword: requiredString("Confirm Password").min(
      6,
      "Confirm Password is required",
    ),
    imageUrl: z.string().url("Invalid image URL").optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const updateProfileSchema = z.object({
  name: requiredString("Name"),
  imageUrl: z.string().optional(),
});

export const loginSchema = z.object({
  email: requiredString("Email").email({ message: "Invalid email address" }),
  password: requiredString("Password").min(6, {
    message: "Password must be at least 6 characters in length",
  }),
});

export const serviceSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z.string().min(1, "Slug is required"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .refine(
      (val) => val.trim().split(/\s+/).length <= 100,
      "Description must be at most 100 words",
    ),
  price: z.coerce.number().min(1, "Price is required"),
  imageUrl: z
    .string()
    .min(1, "Image is required")
    .url("Image URL must be a valid URL"),
  category: z.string().min(1, "Category is required"),
  address: z.string({ required_error: "Address is required" }).min(5),
});

export const bookingSchema = z.object({
  serviceTakingDate: z.preprocess((date) => new Date(date), z.date()),
  address: z
    .string({ required_error: "Address is required" })
    .min(5, "Address is too short"),
});
