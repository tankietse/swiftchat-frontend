"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { authApi, tokenStorage } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Check for successful verification or password reset
  const verified = searchParams.get("verified") === "true";
  const resetSuccess = searchParams.get("resetSuccess") === "true";
  
  // Check if user is already logged in
  useEffect(() => {
    const tokens = tokenStorage.getTokens();
    if (tokens?.accessToken) {
      console.log("User already logged in, redirecting to dashboard");
      router.push("/dashboard");
    }
  }, [router]);

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log("Attempting login for:", data.email);
      
      // Call the login API
      const response = await authApi.login(data.email, data.password);
      console.log("Login successful:", response);
      
      // Verify token was saved
      const savedTokens = tokenStorage.getTokens();
      console.log("Saved tokens after login:", savedTokens);
      
      if (!savedTokens?.accessToken) {
        throw new Error("Authentication failed - no token received");
      }
      
      // Delay the redirect slightly to ensure token is fully saved
      setTimeout(() => {
        console.log("Redirecting to dashboard...");
        router.push("/dashboard");
      }, 100);
      
    } catch (err) {
      console.error("Login error:", err);
      setError(err instanceof Error ? err.message : "Invalid email or password");
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
