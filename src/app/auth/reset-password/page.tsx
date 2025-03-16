"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { authApi } from "@/lib/api";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Validate token exists
  if (!token) {
    return (
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Invalid reset link</h1>
          <p className="text-sm text-gray-500">
            The password reset link is invalid or has expired.
          </p>
          <div className="pt-4">
            <Link href="/auth/forgot-password" className="font-medium text-blue-600 hover:underline">
              Request a new reset link
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const onSubmit = async (data: { password: string; confirmPassword: string }) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Use the corrected API endpoint
      await authApi.resetPassword(token as string, data.password);
      
      // Redirect after successful reset
      router.push("/auth/login?resetSuccess=true");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reset password. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Reset your password</h1>
        <p className="text-sm text-gray-500">
          Enter your new password below
        </p>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <ResetPasswordForm onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
}
