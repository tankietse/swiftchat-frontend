"use client";

import { ReactNode, useEffect } from "react";
import { useAuth } from "./auth-provider";
import { useRouter } from "next/navigation";
import { ROLES } from "@/lib/api";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

export const ProtectedRoute = ({ 
  children, 
  allowedRoles = [ROLES.USER] 
}: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading, hasRole } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/auth/login");
      } else if (allowedRoles.length > 0 && !allowedRoles.some(role => hasRole(role))) {
        // Redirect to dashboard if user doesn't have required roles
        router.push("/dashboard");
      }
    }
  }, [isAuthenticated, isLoading, router, allowedRoles, hasRole]);

  if (isLoading) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  }

  // If user is not authenticated, don't render anything as they'll be redirected
  if (!isAuthenticated) {
    return null;
  }

  // If roles are specified and user doesn't have any of the required roles, don't render
  if (allowedRoles.length > 0 && !allowedRoles.some(role => hasRole(role))) {
    return null;
  }

  return <>{children}</>;
};
