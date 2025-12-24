"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import { FormInput } from "@/components/ui/FormInput";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { useAuth } from "@/lib/features/auth/hooks/useAuth";
import { loginSchema } from "@/lib/validators/auth";
import type { LoginCredentials } from "@/lib/types";

export default function Login() {
  const { login, loading, error, setError } = useAuth();
  const [formData, setFormData] = useState<LoginCredentials>({ email: "", password: "" });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setValidationErrors({});

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) errors[err.path[0].toString()] = err.message;
      });
      setValidationErrors(errors);
      return;
    }

    try {
      await login(result.data);
    } catch {}
  };

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to PropertyConnect</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <ErrorAlert message={error} onDismiss={() => setError("")} />

          <FormInput
            type="email"
            id="email"
            label="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={validationErrors.email}
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-violet-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-violet-600 font-semibold hover:text-violet-700 transition-colors">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
