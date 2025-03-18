/**
 * Mock API implementation for development and testing
 * This can be used when the real backend is not available
 */

// Mock user data
const mockUsers = [
  {
    id: "1",
    name: "Test User",
    email: "test@example.com",
    roles: ["user"],
    avatar: "https://ui-avatars.com/api/?name=Test+User"
  },
  {
    id: "2",
    name: "Admin User",
    email: "admin@example.com",
    roles: ["user", "admin"],
    avatar: "https://ui-avatars.com/api/?name=Admin+User"
  }
];

// Mock authentication
export const mockAuthApi = {
  login: async (email: string, password: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simple validation
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    
    // Find user by email
    const user = mockUsers.find(u => u.email === email);
    
    if (!user) {
      throw new Error("User not found");
    }
    
    // In a real app, you'd verify the password here
    // For mock purposes, we'll accept any non-empty password
    
    // Return mock response with tokens
    return {
      accessToken: `mock-access-token-for-${user.id}`,
      refreshToken: `mock-refresh-token-for-${user.id}`,
      user
    };
  },
  
  getCurrentUser: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // For mock purposes, always return the test user
    return mockUsers[0];
  },
  
  register: async (name: string, email: string, password: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple validation
    if (!name || !email || !password) {
      throw new Error("Name, email, and password are required");
    }
    
    // Check if email already exists
    if (mockUsers.some(u => u.email === email)) {
      throw new Error("Email already registered");
    }
    
    // Return success message
    return {
      success: true,
      message: "Registration successful. Please check your email for verification."
    };
  }
};

// Export additional mock APIs as needed
