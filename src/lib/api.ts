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

// Add response interceptor for error handling
// Define interfaces for error response
interface ApiErrorResponse {
  message?: string;
}

// Define interface for auth tokens
interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
}

apiClient.interceptors.response.use(
  <T>(response: AxiosResponse<T>) => {
    return response.data;
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
  login: async (email: string, password: string) => {
    return apiClient.post('/auth/login', { email, password });
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
  oauthCallback: async (provider: string, code: string, state?: string) => {
    return apiClient.post(`/auth/oauth2/${provider}/callback`, { code, state });
  },
};

/**
 * Auth token management
 */
export const tokenStorage = {
  saveTokens: (tokens: AuthTokens) => {
    localStorage.setItem('auth_tokens', JSON.stringify(tokens));
  },
  
  getTokens: (): AuthTokens | null => {
    const tokens = localStorage.getItem('auth_tokens');
    return tokens ? JSON.parse(tokens) : null;
  },
  
  clearTokens: () => {
    localStorage.removeItem('auth_tokens');
  }
};

/**
 * User data interface
 */
export interface User {
  id: string;
  name: string;
  email: string;
  [key: string]: string | number | object ;
}

/**
 * User data storage
 */
export const userStorage = {
  saveUser: (user: User) => {
    localStorage.setItem('user_data', JSON.stringify(user));
  },
  
  getUser: (): User | null => {
    const user = localStorage.getItem('user_data');
    return user ? JSON.parse(user) : null;
  },
  
  clearUser: () => {
    localStorage.removeItem('user_data');
  }
};
