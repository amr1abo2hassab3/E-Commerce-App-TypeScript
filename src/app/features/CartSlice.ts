import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios.config";
import type { AxiosError } from "axios";
import type { IApiError, IResponse } from "../../interfaces";
import { toast } from "react-toastify";
import type { CartResponse, ICartValues } from "../../interfaces/cartInterfaces";
import CookieServices from "../../Services/CookieServices";
import { cookiesUserDataKey } from "../../data";

export interface IRegisterSlice {
  loading: boolean;
  data: CartResponse | null;
  error: IApiError | null;
}

const initialState: IRegisterSlice = {
  loading: false,
  data: null,
  error: null,
};

const userDataToken: IResponse | undefined = CookieServices.get(cookiesUserDataKey)


export const addToCart = createAsyncThunk<
  CartResponse,
  ICartValues,
  { rejectValue: IApiError }
>("cart/addToCart", async (userData: ICartValues, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const { data } = await axiosInstance.post<CartResponse>(
      `/api/v1/cart`,
        userData, {
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

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addToCart.fulfilled,
        (state, action: PayloadAction<CartResponse>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Unknown error",
          statusMsg: (action.payload as IApiError)?.statusMsg || "Error",
          };
           toast.error(`${action.payload?.message}`);
      });
  },
});

export default CartSlice.reducer;
