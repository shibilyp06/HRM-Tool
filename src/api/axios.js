import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});
instance.interceptors.request.use(
  (config) => {
    console.log("HII from the axios");
    const token = localStorage.getItem("jwtToken");
    console.log("TOKEN FROM localstorage", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
  },
  (error) => {
    console.log("ERROR", error);
    return Promise.reject(error);
  }
);
export default instance;
