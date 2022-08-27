import axios from "axios";

export const API_URL = `https://62989c54f2decf5bb7471410.mockapi.io/api/v1`;
const $api = axios.create({
  withCredentials: false,
  baseURL: API_URL,
});

// $api.interceptors.request.use(
//   (config: any) => {
//     if (config) {
//       config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//       return config;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default $api;
