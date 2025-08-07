import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ClearResponseCart } from "../../../../interfaces/cartInterfaces";
import type { IApiError, IResponse } from "../../../../interfaces";
import CookieServices from "../../../../Services/CookieServices";
import { cookiesUserDataKey } from "../../../../data";
import axiosInstance from "../../../../config/axios.config";
import type { AxiosError } from "axios";

const userDataToken: IResponse | undefined =
  CookieServices.get(cookiesUserDataKey);

export const clearCart = createAsyncThunk<
  ClearResponseCart,
  void,
  { rejectValue: IApiError }
>("cart/clearCart", async (_, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const { data } = await axiosInstance.delete<ClearResponseCart>(
      `/api/v1/cart`,
      {
        headers: {
          token: userDataToken?.token,
        },
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
