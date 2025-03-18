"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/components/auth/auth-provider";
import { ROLES } from "@/lib/api";

// Icons
import {
  Menu,
  X,
  Home,
  Users,
  Settings,
  Shield,
  MessageSquare,
  User,
  BarChart2,
  Bell,
  LogOut,
  Search,
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout, isAdmin, isModerator } = useAuth();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home, roles: [ROLES.USER, ROLES.ADMIN, ROLES.MODERATOR] },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare, roles: [ROLES.USER, ROLES.ADMIN, ROLES.MODERATOR] },
    { name: "Profile", href: "/dashboard/profile", icon: User, roles: [ROLES.USER, ROLES.ADMIN, ROLES.MODERATOR] },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2, roles: [ROLES.ADMIN, ROLES.MODERATOR] },
    { name: "User Management", href: "/dashboard/users", icon: Users, roles: [ROLES.ADMIN] },
    { name: "Moderation", href: "/dashboard/moderation", icon: Shield, roles: [ROLES.ADMIN, ROLES.MODERATOR] },
    { name: "Settings", href: "/dashboard/settings", icon: Settings, roles: [ROLES.USER, ROLES.ADMIN, ROLES.MODERATOR] },
  ];

  // Filter navigation options based on user roles
  const filteredNavigation = navigation.filter(item => {
    if (isAdmin()) return true;
    if (isModerator() && item.roles.includes(ROLES.MODERATOR)) return true;
    return item.roles.includes(ROLES.USER);
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:z-auto`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="SwiftChat Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-medium text-gray-900">SwiftChat</span>
          </Link>
          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
          <nav className="mt-5 px-2 space-y-1">
            {filteredNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      isActive ? "text-blue-600" : "text-gray-500"
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 relative">
              <Image
                src={user?.avatar || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user?.name || "User")}
                alt={user?.name || ""}
                className="rounded-full"
                fill
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="mt-4 flex items-center text-sm text-gray-700 hover:text-gray-900"
          >
            <LogOut size={18} className="mr-2" />
            Sign out
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <button
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            <div className="flex-1 flex items-center justify-between">
              {/* Search bar */}
              <div className="max-w-xs w-full hidden md:block">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search"
                  />
                </div>
              </div>

              {/* Right side actions */}
              <div className="flex items-center">
                <button className="p-1 text-gray-400 hover:text-gray-500 rounded-full">
                  <Bell size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
