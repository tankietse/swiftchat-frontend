/**
 * Health check utility to verify API connectivity
 */
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function checkApiHealth(): Promise<{
  isHealthy: boolean;
  message: string;
}> {
  if (!API_BASE_URL) {
    return {
      isHealthy: false,
      message: 'API_BASE_URL is not defined in environment variables',
    };
  }

  try {
    // Use axios to check if the API is accessible
    await axios.get(`${API_BASE_URL}/health`, {
      timeout: 5000, // 5 seconds timeout
    });

    return {
      isHealthy: true,
      message: 'Successfully connected to API',
    };
  } catch (error) {
    console.error('API health check failed:', error);
    
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        return {
          isHealthy: false,
          message: 'Connection to API timed out. The server might be slow or unreachable.',
        };
      }
      
      if (error.response) {
        // The request was made and the server responded with a status code outside of 2xx
        return {
          isHealthy: false,
          message: `API responded with status: ${error.response.status} ${error.response.statusText}`,
        };
      }
      
      if (error.request) {
        // The request was made but no response was received
        return {
          isHealthy: false,
          message: 'Could not connect to API. Check if the server is running and the URL is correct.',
        };
      }
    }
    
    return {
      isHealthy: false,
      message: `Error connecting to API: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}
