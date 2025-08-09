import { createAsyncThunk } from "@reduxjs/toolkit";
import { cookiesUserDataKey } from "../../../../data";
import type { IApiError, IResponse } from "../../../../interfaces";
import CookieServices from "../../../../Services/CookieServices";
import type {  CartValues } from "../../../../interfaces/cartInterfaces";
import type { AxiosError } from "axios";
import axiosInstance from "../../../../config/axios.config";
import type { addWishListResponse } from "../../../../interfaces/wishListInterfaces";
import { toast } from "react-toastify";

const userDataToken: IResponse | undefined = CookieServices.get(cookiesUserDataKey)


export const addToWishList = createAsyncThunk<
  addWishListResponse,
  CartValues,
  { rejectValue: IApiError }
>("whishList/addToWishList", async (userData: CartValues, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const request = axiosInstance.post<addWishListResponse>(
      `/api/v1/wishlist`,
        userData, {
            headers: {
              token:userDataToken?.token
          } ,
      }
      );  
       const {data} = await toast.promise(
        request,
        {
          pending: "Adding product to wishList...",
          success: "Product added successfully! ♥",
          error: "Failed to add product! ❌",
        },
        { autoClose: 1500 }
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
