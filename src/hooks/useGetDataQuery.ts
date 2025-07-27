import axiosInstance from "../config/axios.config";
import type { AxiosRequestConfig } from "axios";
import { useQuery } from '@tanstack/react-query';

interface IAuthenticatedQuery {
    queryKey: string[];
    url: string;
    config?: AxiosRequestConfig;
}

const useGetDataQuery = ({queryKey ,url , config }:IAuthenticatedQuery) => {
      
   return useQuery({
        queryKey,
        queryFn: async () => {
          const { data } = await axiosInstance.get(url,config);
          return data;
        },
      });
}

export default useGetDataQuery