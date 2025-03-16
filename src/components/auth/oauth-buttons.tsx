"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

interface OAuthButtonsProps {
  isLoading: boolean;
}

export function OAuthButtons({ isLoading: parentIsLoading }: OAuthButtonsProps) {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
  const isLoading = parentIsLoading || !!loadingProvider;

  const handleOAuthSignIn = (provider: string) => {
    try {
      setLoadingProvider(provider);
      
      // Direct browser redirect to our API route - no AJAX call
      window.location.href = `/api/auth/${provider}`;
      
      // No need for catch block since this is a direct browser navigation
    } catch (error) {
      // This will only execute if there's an error before the redirect
      console.error(`Error initiating ${provider} sign in:`, error);
      toast.error(`Failed to connect with ${provider}. Please try again.`);
      setLoadingProvider(null);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={() => handleOAuthSignIn("google")}
        disabled={isLoading}
        className="flex items-center justify-center w-full gap-2 rounded-md bg-white border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loadingProvider === "google" ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        )}
        Sign in with Google
      </button>

      <button
        onClick={() => handleOAuthSignIn("facebook")}
        disabled={isLoading}
        className="flex items-center justify-center w-full gap-2 rounded-md bg-[#1877F2] px-3 py-2 text-sm font-medium text-white hover:bg-[#166FE5] focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loadingProvider === "facebook" ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-white"></span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
          </svg>
        )}
        Sign in with Facebook
      </button>
{/* 
      <button
        onClick={() => handleOAuthSignIn("apple")}
        disabled={isLoading}
        className="flex items-center justify-center w-full gap-2 rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loadingProvider === "apple" ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-white"></span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M11.6734 7.2221C10.7974 7.2221 9.4534 6.2261 8.1374 6.2541C6.4294 6.2821 4.8614 7.2361 3.9854 8.8041C2.2334 11.9401 3.5214 16.5601 5.2174 19.1121C6.0514 20.3721 7.0474 21.7721 8.3914 21.7161C9.6514 21.6601 10.1234 20.8821 11.6454 20.8821C13.1674 20.8821 13.6114 21.7161 14.9294 21.6881C16.2754 21.6601 17.1514 20.4001 17.9854 19.1401C18.9534 17.6741 19.3394 16.2461 19.3674 16.1621C19.3394 16.1341 16.9014 15.1941 16.8734 12.0861C16.8454 9.5341 18.8114 8.4261 18.9254 8.3421C17.7214 6.5341 15.8574 6.2821 15.1834 6.2261C13.5034 6.0861 11.9914 7.2221 11.6734 7.2221ZM14.7054 4.6261C15.4074 3.7781 15.8574 2.6141 15.7174 1.4501C14.7334 1.5061 13.5314 2.0901 12.8014 2.9381C12.1554 3.6961 11.5934 4.8881 11.7614 6.0241C12.8574 6.1081 13.9774 5.4741 14.7054 4.6261Z" />
          </svg>
        )}
        Sign in with Apple
      </button> */}
    </div>
  );
}
