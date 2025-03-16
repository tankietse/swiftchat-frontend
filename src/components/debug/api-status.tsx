"use client";

import { useState, useEffect } from "react";
import { checkApiHealth } from "@/lib/health-check";

export default function ApiStatus() {
  const [status, setStatus] = useState<{ isHealthy: boolean; message: string } | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkStatus = async () => {
    setIsChecking(true);
    try {
      const result = await checkApiHealth();
      setStatus(result);
    } catch (error) {
      setStatus({
        isHealthy: false,
        message: `Error checking API status: ${error instanceof Error ? error.message : String(error)}`,
      });
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-medium text-lg mb-2">API Connection Status</h2>
      
      {status ? (
        <div className={`mt-2 p-3 rounded ${status.isHealthy ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          <p className="font-medium">{status.isHealthy ? 'Connected' : 'Connection Failed'}</p>
          <p className="text-sm mt-1">{status.message}</p>
          {!status.isHealthy && (
            <div className="mt-2 text-sm">
              <p>API URL: {process.env.NEXT_PUBLIC_API_BASE_URL || 'Not defined'}</p>
              <p className="mt-1">
                Tips:
                <ul className="list-disc list-inside mt-1 ml-2">
                  <li>Check if your backend server is running</li>
                  <li>Verify the API URL in .env.local file</li>
                  <li>Ensure you`re using the correct protocol (http/https)</li>
                </ul>
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
          <span>Checking API connection...</span>
        </div>
      )}
      
      <button
        onClick={checkStatus}
        disabled={isChecking}
        className="mt-3 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50"
      >
        {isChecking ? 'Checking...' : 'Check Again'}
      </button>
    </div>
  );
}
