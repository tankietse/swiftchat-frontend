/**
 * API client for SwiftChat backend using Axios
 */
import axios, { AxiosError, AxiosResponse } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  console.warn('API_BASE_URL is not defined in environment variables');
}

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Add request interceptor to include auth token
apiClient.interceptors.request.use(
  (config) => {
    const tokens = tokenStorage.getTokens();
    if (tokens?.accessToken) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Define interfaces for error response
interface ApiErrorResponse {
  message?: string;
}

// Define interface for auth tokens
interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
}

// Define API response interfaces
interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  user: User;
}

// Define dashboard response interfaces
interface StatsResponse {
  userCount: number;
  messageCount: number;
  activeUsers: number;
}

interface UsersResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
}

// API response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response.data);
  },
  (error: AxiosError<ApiErrorResponse>) => {
    let errorMessage = 'An unexpected error occurred';
    
    if (error.response) {
      // The request was made and the server responded with a status code outside of 2xx range
      errorMessage = error.response.data?.message || `Error ${error.response.status}: ${error.response.statusText}`;
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = 'Unable to connect to the server. Please check your internet connection or try again later.';
    } else {
      // Something happened in setting up the request
      errorMessage = error.message;
    }
    
    return Promise.reject(new Error(errorMessage));
  }
);

/**
 * Authentication API functions
 */
export const authApi = {
  /**
   * Login with email and password
   */
  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      // Using axios directly to bypass the interceptor that automatically resolves to data
      const response = await axios.post<AuthResponse>(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      
      console.log('Login response:', response);
      
      // Store tokens - make sure we're accessing the right properties
      if (response.data) {
        const authData = response.data;
        console.log('Auth data to store:', authData);
        
        tokenStorage.saveTokens({
          accessToken: authData.accessToken,
          refreshToken: authData.refreshToken,
        });
        
        if (authData.user) {
          userStorage.saveUser(authData.user);
        }
      }
      
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      handleApiError(error);
      throw error;
    }
  },
  
  register: async (name: string, email: string, password: string) => {
    return apiClient.post('/auth/register', { name, email, password });
  },
  
  verifyEmail: async (token: string) => {
    return apiClient.get(`/auth/verify?token=${token}`);
  },
  
  forgotPassword: async (email: string) => {
    return apiClient.post('/auth/reset-password/request', { email });
  },
  
  resetPassword: async (resetToken: string, newPassword: string) => {
    return apiClient.post('/auth/reset-password/confirm', { resetToken, newPassword });
  },
  
  oauthLogin: async (provider: string) => {
    return apiClient.get(`/auth/oauth2/${provider}`);
  },
  
  // New function to exchange OAuth code for tokens
  oauthCallback: async (provider: string, code: string, state?: string): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(`/auth/oauth2/${provider}/callback`, { code, state });
    if (response.data.accessToken) {
      tokenStorage.saveTokens({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken
      });
      
      if (response.data.user) {
        userStorage.saveUser(response.data.user);
      }
    }
    return response.data;
  },
  
  logout: () => {
    tokenStorage.clearTokens();
    userStorage.clearUser();
  },
  
  getCurrentUser: async (): Promise<User> => {
    return apiClient.get('/users/me');
  }
};

/**
 * Auth token management
 */
export const tokenStorage = {
  saveTokens: (tokens: AuthTokens) => {
    try {
      console.log('Saving tokens:', tokens);
      localStorage.setItem('auth_tokens', JSON.stringify(tokens));
      
      // Also set in sessionStorage as backup
      sessionStorage.setItem('auth_tokens', JSON.stringify(tokens));
    } catch (error) {
      console.error('Failed to save tokens to storage:', error);
    }
  },
  
  getTokens: (): AuthTokens | null => {
    try {
      // Try localStorage first, then sessionStorage as fallback
      let tokens = localStorage.getItem('auth_tokens');
      if (!tokens) {
        tokens = sessionStorage.getItem('auth_tokens');
      }
      
      const parsedTokens = tokens ? JSON.parse(tokens) : null;
      console.log('Retrieved tokens:', parsedTokens);
      return parsedTokens;
    } catch (error) {
      console.error('Failed to retrieve tokens from storage:', error);
      return null;
    }
  },
  
  clearTokens: () => {
    try {
      localStorage.removeItem('auth_tokens');
      sessionStorage.removeItem('auth_tokens');
    } catch (error) {
      console.error('Failed to clear tokens from storage:', error);
    }
  }
};

/**
 * User data interface
 */
export interface User {
  id: string;
  name: string;
  email: string;
  roles?: string[];
  avatar?: string;
  [key: string]: string | number | object | undefined | string[];
}

/**
 * Role constants - store in environment variables for better security
 * Use these constants to avoid hardcoding role IDs
 */
export const ROLES = {
  USER: process.env.NEXT_PUBLIC_ROLE_USER_ID || '',
  ADMIN: process.env.NEXT_PUBLIC_ROLE_ADMIN_ID || '',
  MODERATOR: process.env.NEXT_PUBLIC_ROLE_MODERATOR_ID || ''
};

/**
 * User data storage
 */
export const userStorage = {
  saveUser: (user: User) => {
    try {
      localStorage.setItem('user_data', JSON.stringify(user));
    } catch (error) {
      console.error('Failed to save user data to localStorage:', error);
    }
  },
  
  getUser: (): User | null => {
    try {
      const user = localStorage.getItem('user_data');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Failed to retrieve user data from localStorage:', error);
      return null;
    }
  },
  
  clearUser: () => {
    try {
      localStorage.removeItem('user_data');
    } catch (error) {
      console.error('Failed to clear user data from localStorage:', error);
    }
  },
  
  hasRole: (roleId: string): boolean => {
    const user = userStorage.getUser();
    return user?.roles?.includes(roleId) || false;
  },
  
  isAdmin: (): boolean => {
    return userStorage.hasRole(ROLES.ADMIN);
  },
  
  isModerator: (): boolean => {
    return userStorage.hasRole(ROLES.MODERATOR);
  }
};

/**
 * Dashboard API
 */
export const dashboardApi = {
  getStats: async (): Promise<StatsResponse> => {
    return apiClient.get('/dashboard/stats');
  },
  
  getUsers: async (page = 1, limit = 10): Promise<UsersResponse> => {
    return apiClient.get(`/admin/users?page=${page}&limit=${limit}`) as Promise<UsersResponse>;
  },
  
  updateUser: async (userId: string, data: Partial<User>) => {
    return apiClient.put(`/admin/users/${userId}`, data);
  },
  
  deleteUser: async (userId: string) => {
    return apiClient.delete(`/admin/users/${userId}`);
  },
  
  getReports: async (page = 1, limit = 10) => {
    return apiClient.get(`/moderation/reports?page=${page}&limit=${limit}`);
  },
  
  resolveReport: async (reportId: string, resolution: string) => {
    return apiClient.post(`/moderation/reports/${reportId}/resolve`, { resolution });
  }
};

// Error handling utility
function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiErrorResponse>;
    
    if (axiosError.response) {
      // The request was made and the server responded with a status code outside of 2xx
      const message = axiosError.response.data?.message || 
                     `Server error: ${axiosError.response.status}`;
      throw new Error(message);
    } else if (axiosError.request) {
      // The request was made but no response was received
      throw new Error('No response received from server. Please check your connection.');
    }
  }
  
  // For non-axios errors or unexpected errors
  throw error instanceof Error ? error : new Error('An unexpected error occurred');
}
