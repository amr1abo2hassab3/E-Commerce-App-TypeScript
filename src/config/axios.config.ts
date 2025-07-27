import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://ecommerce.routemisr.com',
    timeout: 0,
});
  
export default axiosInstance;