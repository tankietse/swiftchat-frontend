"use client";

import { ReactNode } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { AuthProvider } from "@/components/auth/auth-provider";
import { ProtectedRoute } from "@/components/auth/protected-route";
import { ROLES } from "@/lib/api";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ProtectedRoute allowedRoles={[ROLES.USER, ROLES.ADMIN, ROLES.MODERATOR]}>
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </ProtectedRoute>
    </AuthProvider>
  );
}
