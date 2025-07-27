import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios.config";
import type { AxiosError } from "axios";
import type { IApiError, IResponse, ILoginValues } from "../../interfaces";
import { toast } from "react-toastify";

export interface ILoginSlice {
  loading: boolean;
  data: IResponse | null;
  error: IApiError | null;
}

const initialState: ILoginSlice = {
  loading: false,
  data: null,
  error: null,
};

export const userLogin = createAsyncThunk<
  IResponse,
  ILoginValues,
  { rejectValue: IApiError }
>("login/userLogin", async (userData: ILoginValues, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const { data } = await axiosInstance.post<IResponse>(
      `/api/v1/auth/signin`,
      userData
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

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userLogin.fulfilled,
        (state, action: PayloadAction<IResponse>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Unknown error",
          statusMsg: (action.payload as IApiError)?.statusMsg || "Error",
          };
           toast.error(`${action.payload?.message}`);
      });
  },
});

export default loginSlice.reducer;
