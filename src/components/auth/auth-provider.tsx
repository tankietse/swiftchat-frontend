"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { authApi, User, userStorage, tokenStorage } from "@/lib/api";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasRole: (roleId: string) => boolean;
  isAdmin: () => boolean;
  isModerator: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [authChecked, setAuthChecked] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // Check if we have a token and try to get the user
    const checkAuth = async () => {
      try {
        const tokens = tokenStorage.getTokens();
        console.log("Auth check - tokens:", tokens);
        
        if (tokens?.accessToken) {
          console.log("Token found, fetching user data");
          // Try to fetch current user
          const userData = await authApi.getCurrentUser();
          console.log("User data fetched:", userData);
          
          // Update user in storage and state
          userStorage.saveUser(userData);
          setUser(userData);
        } else {
          console.log("No valid token found");
          // No token or expired, clear user
          setUser(null);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        // If there's an error, clear tokens and user
        authApi.logout();
        setUser(null);
      } finally {
        setIsLoading(false);setAuthChecked(true);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      console.log("Auth provider login attempt");
      const response = await authApi.login(email, password);
      console.log("Auth provider login response:", response);
      
      // Double check tokens were saved
      const savedTokens = tokenStorage.getTokens();
      console.log("Tokens after login:", savedTokens);
      
      if (!savedTokens || !savedTokens.accessToken) {
        throw new Error("No token received after login");
      }
      
      // Set user from the login response
      if (response.user) {
        userStorage.saveUser(response.user);
        setUser(response.user);
      } else {
        // If user data is not included in the login response, fetch it separately
        console.log("Fetching user data separately");
        const userData = await authApi.getCurrentUser();
        userStorage.saveUser(userData);
        setUser(userData);
      }
      
      // Redirect to dashboard after login
      console.log("Redirecting to dashboard from auth provider");
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed in auth provider:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authApi.logout();
    setUser(null);
    router.push("/auth/login");
  };

  const hasRole = (roleId: string): boolean => {
    return userStorage.hasRole(roleId);
  };

  const isAdmin = (): boolean => {
    return userStorage.isAdmin();
  };

  const isModerator = (): boolean => {
    return userStorage.isModerator();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        hasRole,
        isAdmin,
        isModerator
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
