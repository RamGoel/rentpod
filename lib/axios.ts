import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://10.0.2.2:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
