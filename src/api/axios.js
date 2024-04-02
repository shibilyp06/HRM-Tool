import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",

  // 51.20.35.150  MY EC2 IP
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
