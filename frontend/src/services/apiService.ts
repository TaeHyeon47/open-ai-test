import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const openRouterService = {
  sendQuestion: async (
    question: string,
    modelName: string,
    modelId: string
  ) => {
    console.log('modelId', modelId);
    console.log('modelName', modelName);

    try {
      if (modelId.includes('openrouter')) {
        const response = await apiService.post('/api/openrouter', {
          question,
          modelName,
        });
        return response.data;
      } else if (modelId.includes('googledev')) {
        const response = await apiService.post('/api/gemini', {
          question,
          modelName,
        });
        return response.data;
      } else if (modelId.includes('localdev')) {
        const response = await apiService.post('/api/localai', {
          question,
          modelName,
        });
        return response.data;
      }
    } catch (error) {
      console.error('Error sending question:', error);
      throw error;
    }
  },
};

export { openRouterService };
export default apiService;
