"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { authApi } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Check for successful verification or password reset
  const verified = searchParams.get("verified") === "true";
  const resetSuccess = searchParams.get("resetSuccess") === "true";

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await authApi.login(data.email, data.password);
      
      // Store the token from the response data
      localStorage.setItem('token', response.data.token);
      
      // Redirect after successful login
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid email or password");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Enter your email and password to sign in to your account
        </p>
      </div>
      
      {verified && (
        <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm">
          Email verified successfully! You can now sign in.
        </div>
      )}
      
      {resetSuccess && (
        <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm">
          Password reset successfully! You can now sign in with your new password.
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      
      <OAuthButtons isLoading={isLoading} />
      
      <div className="text-center text-sm">
        Don`t have an account?{" "}
        <Link href="/auth/register" className="font-medium text-blue-600 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
