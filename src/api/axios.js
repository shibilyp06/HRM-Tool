import axios from "axios";

const instance = axios.create({
  baseURL: "http://51.20.35.150:5000",
});
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("ERROR", error);
    // return Promise.reject(error);
  }
);
export default instance;
