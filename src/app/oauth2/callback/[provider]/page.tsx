"use client";

import { authApi, tokenStorage, userStorage } from "@/lib/api";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function OAuthCallbackPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);

  // Get the provider name from the dynamic route parameter
  const provider = params.provider as string;
  
  // Extract code and state parameters from the URL
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const errorParam = searchParams.get("error");
  
  useEffect(() => {
    async function handleOAuthCallback() {
      // Check for error in the URL parameters
      if (errorParam) {
        setError(`Authentication error: ${errorParam}`);
        setIsProcessing(false);
        return;
      }

      // Check if code is present
      if (!code) {
        setError("No authentication code received from the provider");
        setIsProcessing(false);
        return;
      }

      try {
        // Exchange the code for tokens
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        
        // Make a direct call to the backend API without using the authApi wrapper
        const response = await axios.post(
          `${API_BASE_URL}/auth/oauth2/${provider}/callback`, 
          { code, state: state || undefined }
        );

        // Save authentication data
        if (response.data.tokens) {
          tokenStorage.saveTokens(response.data.tokens);
        }
        
        if (response.data.user) {
          userStorage.saveUser(response.data.user);
        }
        
        // Show success notification
        toast.success(`Successfully signed in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`);
        
        // Redirect to dashboard or home page
        router.push("/dashboard");
      } catch (error) {
        console.error("OAuth callback error:", error);
        setError(error instanceof Error ? error.message : "Failed to complete authentication");
        toast.error("Authentication failed. Please try again.");
        setIsProcessing(false);
      }
    }
    
    handleOAuthCallback();
  }, [code, state, errorParam, provider, router]);

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <h1 className="text-xl font-bold text-red-600 mb-4">Authentication Error</h1>
          <p className="text-gray-700 mb-6">{error}</p>
          <button
            onClick={() => router.push('/auth/login')}
            className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md text-center">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Completing Sign In</h1>
        {isProcessing && (
          <div className="flex justify-center mb-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
          </div>
        )}
        <p className="text-gray-600">Please wait while we complete your authentication with {provider}...</p>
      </div>
    </div>
  );
}
