import { provider } from "../provider";

export const createStudentApi = async (payload) => {
    try {
      const response = await provider.post('/student', payload);
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
};


export const getStudentListApi = async (payload) => {
  try {
    const response = await provider.get('/student', payload);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};