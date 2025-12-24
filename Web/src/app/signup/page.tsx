"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import { FormInput } from "@/components/ui/FormInput";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { useAuth } from "@/lib/features/auth/hooks/useAuth";
import { registerSchema } from "@/lib/validators/auth";
import type { RegisterCredentials } from "@/lib/types";

interface SignUpFormData extends RegisterCredentials {
  confirmPassword: string;
}

export default function SignUp() {
  const { register, loading, error, setError } = useAuth();
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setValidationErrors({});

    const result = registerSchema.safeParse(formData);
    
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) errors[err.path[0].toString()] = err.message;
      });
      setValidationErrors(errors);
      return;
    }

    const { confirmPassword, ...credentials } = result.data;
    
    try {
      await register(credentials);
    } catch {}
  };

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p className="text-gray-600">Join PropertyConnect today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <ErrorAlert message={error} onDismiss={() => setError("")} />

          <FormInput
            type="text"
            id="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            error={validationErrors.fullName}
            required
          />

          <FormInput
            type="email"
            id="email"
            label="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={validationErrors.email}
            required
          />

          <FormInput
            type="tel"
            id="phone"
            label="Phone (+216XXXXXXXX)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            error={validationErrors.phone}
            required
          />

          <PasswordInput
            id="password"
            label="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            error={validationErrors.password}
            required
          />

          <PasswordInput
            id="confirmPassword"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            error={validationErrors.confirmPassword}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-violet-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-violet-600 font-semibold hover:text-violet-700 transition-colors">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
