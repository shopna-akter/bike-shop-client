import axios from "axios";

const API_URL = "https://bike-shop-server-jade.vercel.app/api/auth";

export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/register`, userData, {
    withCredentials: true,
  });
  return response.data;
};

export const loginUser = async (userData: { email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/login`, userData, {
    withCredentials: true,
  });
  return response.data.data;
};
