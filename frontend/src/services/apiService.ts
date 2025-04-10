import axios from 'axios';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const openRouterService = {
  sendQuestion: async (question: string, modelName: string) => {
    try {
      const response = await apiService.post('/api/openrouter', {
        question,
        modelName,
      });
      return response.data;
    } catch (error) {
      console.error('Error sending question:', error);
      throw error;
    }
  },
};

export { openRouterService };
export default apiService;
