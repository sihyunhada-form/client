import axios from "axios";

export const MainApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 1000,
});
