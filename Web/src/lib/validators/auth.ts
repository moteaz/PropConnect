import { z } from 'zod';

const PHONE_REGEX = /^\+216\d{8}$/;
const MIN_PASSWORD_LENGTH = 8;
const MIN_NAME_LENGTH = 3;

export const loginSchema = z.object({
  email: z.string().email('Invalid email address').trim().toLowerCase(),
  password: z.string().min(1, 'Password is required'),
});

export const registerSchema = z.object({
  fullName: z.string().min(MIN_NAME_LENGTH, `Full name must be at least ${MIN_NAME_LENGTH} characters`).trim(),
  email: z.string().email('Invalid email address').trim().toLowerCase(),
  phone: z.string().regex(PHONE_REGEX, 'Phone must be in format +216XXXXXXXX'),
  password: z.string().min(MIN_PASSWORD_LENGTH, `Password must be at least ${MIN_PASSWORD_LENGTH} characters`),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
