"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ActivatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get("key");

  useEffect(() => {
    if (key) {
      // Redirect to the verify page with the key as token
      router.push(`/auth/verify?token=${key}`);
    } else {
      // If no key is provided, redirect to the home page
      router.push("/");
    }
  }, [key, router]);

  // Show loading while redirecting
  return (
    <div className="flex justify-center items-center h-full">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
      <span className="ml-2">Redirecting...</span>
    </div>
  );
}
