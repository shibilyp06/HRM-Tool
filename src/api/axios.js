import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken");
  console.log(token,"token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
  (error) => {
    return Promise.reject(error);
  };
});
export default instance;
