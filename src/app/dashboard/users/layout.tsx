"use client";

import { ReactNode } from "react";
import { ProtectedRoute } from "@/components/auth/protected-route";
import { ROLES } from "@/lib/api";

export default function UsersLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
      {children}
    </ProtectedRoute>
  );
}
