"use client";

import { useState } from "react";
import Link from "next/link";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { authApi } from "@/lib/api";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const onSubmit = async (data: { email: string }) => {
    try {
      setIsLoading(true);
      setError(null);
      setEmail(data.email);
      
      // Use the corrected API endpoint
      await authApi.forgotPassword(data.email);
      
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send reset link. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Check your email</h1>
          <p className="text-sm text-gray-500">
            We`ve sent a password reset link to <strong>{email}</strong>
          </p>
        </div>
        <div className="text-center">
          <Link href="/auth/login" className="font-medium text-blue-600 hover:underline text-sm">
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Forgot password</h1>
        <p className="text-sm text-gray-500">
          Enter your email and we`ll send you a reset link
        </p>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <ForgotPasswordForm onSubmit={onSubmit} isLoading={isLoading} />
      
      <div className="text-center text-sm">
        <Link href="/auth/login" className="font-medium text-blue-600 hover:underline">
          Back to login
        </Link>
      </div>
    </div>
  );
}
