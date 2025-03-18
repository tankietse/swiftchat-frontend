"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/components/auth/auth-provider";
import { dashboardApi } from "@/lib/api";
import { User, MessageSquare, Users, FileText, Shield } from "lucide-react";
import Link from "next/link";

// Dashboard stat card component
interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
  link: string;
}

const StatCard = ({ title, value, icon: Icon, color, link }: StatCardProps) => (
  <Link 
    href={link}
    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
  >
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="ml-5">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </Link>
);

export default function DashboardPage() {
  const { user, isAdmin, isModerator } = useAuth();
  const [stats, setStats] = useState({
    totalMessages: 0,
    totalUsers: 0,
    totalChannels: 0,
    pendingReports: 0,
    activeUsers: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await dashboardApi.getStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back, {user?.name}!
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-6 h-28"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Messages"
            value={stats.totalMessages}
            icon={MessageSquare}
            color="bg-blue-500"
            link="/dashboard/messages"
          />
          
          {(isAdmin() || isModerator()) && (
            <StatCard
              title="Total Users"
              value={stats.totalUsers}
              icon={Users}
              color="bg-green-500"
              link="/dashboard/users"
            />
          )}
          
          <StatCard
            title="Channels"
            value={stats.totalChannels}
            icon={FileText}
            color="bg-purple-500"
            link="/dashboard/channels"
          />
          
          {(isAdmin() || isModerator()) && (
            <StatCard
              title="Pending Reports"
              value={stats.pendingReports}
              icon={Shield}
              color="bg-red-500"
              link="/dashboard/moderation"
            />
          )}
          
          {(isAdmin() || isModerator()) && (
            <StatCard
              title="Active Users"
              value={stats.activeUsers}
              icon={User}
              color="bg-amber-500"
              link="/dashboard/analytics"
            />
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {isLoading ? (
              <div className="space-y-3 animate-pulse">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-100 rounded"></div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No recent activity</p>
            )}
          </div>
        </div>

        {/* Quick Stats or Notifications */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Summary</h2>
          {isLoading ? (
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded"></div>
              <div className="h-4 bg-gray-100 rounded w-5/6"></div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Status:</span>
                <span className="text-sm font-medium text-green-500">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Account type:</span>
                <span className="text-sm font-medium">
                  {isAdmin() ? 'Administrator' : isModerator() ? 'Moderator' : 'User'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Last login:</span>
                <span className="text-sm font-medium">Today</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
