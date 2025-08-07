import { createAsyncThunk } from "@reduxjs/toolkit";
import { cookiesUserDataKey } from "../../../../data";
import type { IApiError, IResponse } from "../../../../interfaces";
import CookieServices from "../../../../Services/CookieServices";
import type { CartResponse, vlauesQuntity } from "../../../../interfaces/cartInterfaces";
import type { AxiosError } from "axios";
import axiosInstance from "../../../../config/axios.config";

const userDataToken: IResponse | undefined = CookieServices.get(cookiesUserDataKey)


export const updateQuntity = createAsyncThunk<
  CartResponse,
  vlauesQuntity,
  { rejectValue: IApiError }
>("cart/updateQuntity", async (userData: vlauesQuntity, thunkApi) => {
    const { rejectWithValue } = thunkApi;    
  try {
    const { data } = await axiosInstance.put<CartResponse>(
      `/api/v1/cart/${userData.productId}`,
        {count:userData.count}, {
            headers: {
              token:userDataToken?.token
          } ,
      }
    );
    return data;
  } catch (error) {
    const err = error as AxiosError<IApiError>;
    console.log(error);

    return rejectWithValue({
      message: err?.response?.data?.message || "Unknown error",
      statusMsg: err?.response?.data?.statusMsg || "Error",
    });
  }
});
