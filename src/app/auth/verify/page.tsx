"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { authApi } from "@/lib/api";

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || searchParams.get("key");
  const email = searchParams.get("email");
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [verified, setVerified] = useState<boolean>(false);

  // If a token is provided, verify automatically
  useEffect(() => {
    if (token) {
      verifyEmail(token);
    }
  }, [token]);

  const verifyEmail = async (verificationToken: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      await authApi.verifyEmail(verificationToken);
      
      setVerified(true);
      
      // Redirect to main page after successful verification
      setTimeout(() => {
        router.push("/"); // Redirect to main page
      }, 3000);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to verify email. The link may be invalid or expired.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (verified) {
    return (
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Email verified!</h1>
          <p className="text-sm text-gray-500">
            Your email has been successfully verified. Redirecting to the main page...
          </p>
          <div className="pt-4">
            <Link href="/" className="font-medium text-blue-600 hover:underline">
              Go to main page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (token) {
    return (
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Verifying your email</h1>
          <p className="text-sm text-gray-500">
            Please wait while we verify your email address...
          </p>
          {isLoading && (
            <div className="flex justify-center pt-4">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
            </div>
          )}
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm mt-4">
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }

  // If no token but email exists, show "check your email" message
  if (email) {
    return (
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Verify your email</h1>
          <p className="text-sm text-gray-500">
            We`ve sent a verification link to <strong>{email}</strong>
          </p>
          <p className="text-sm text-gray-500 pt-2">
            Click the link in the email to verify your account
          </p>
        </div>
        <div className="text-center text-sm">
          <Link href="/auth/login" className="font-medium text-blue-600 hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  // Fallback if no email or token
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Invalid verification</h1>
        <p className="text-sm text-gray-500">
          The verification link is invalid or has expired.
        </p>
        <div className="pt-4">
          <Link href="/auth/login" className="font-medium text-blue-600 hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
