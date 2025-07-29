import axiosInstance from "../config/axios.config";
import type { AxiosRequestConfig } from "axios";
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

interface IUseGetDataQuery {
    queryKey: string[];
    url: string;
    config?: AxiosRequestConfig;
}

const useGetDataQuery = <T>({queryKey ,url , config }:IUseGetDataQuery): UseQueryResult<T, Error> => {
      
   return useQuery({
        queryKey,
        queryFn: async () => {
          const { data } = await axiosInstance.get(url,config);
          return data;
        },
      });
}

export default useGetDataQuery