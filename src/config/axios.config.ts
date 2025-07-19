import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://note-sigma-black.vercel.app/api/v1/',
    timeout: 0,
});
  
export default axiosInstance;