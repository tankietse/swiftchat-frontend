"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RegisterForm } from "@/components/auth/register-form";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { authApi } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: { name: string; email: string; password: string }) => {
    try {
      setIsLoading(true);
      setError(null);
      
      await authApi.register(data.name, data.email, data.password);
      
      // Redirect to verification page
      router.push("/auth/verify?email=" + encodeURIComponent(data.email));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Enter your information to create a SwiftChat account
        </p>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <RegisterForm onSubmit={onSubmit} isLoading={isLoading} />
      
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
        Already have an account?{" "}
        <Link href="/auth/login" className="font-medium text-blue-600 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}
