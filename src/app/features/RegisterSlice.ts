import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios.config";
import type { AxiosError } from "axios";
import type { IApiError, IResponse, IRegisterValues } from "../../interfaces";
import { toast } from "react-toastify";

export interface IRegisterSlice {
  loading: boolean;
  data: IResponse | null;
  error: IApiError | null;
}

const initialState: IRegisterSlice = {
  loading: false,
  data: null,
  error: null,
};

export const userRegister = createAsyncThunk<
  IResponse,
  IRegisterValues,
  { rejectValue: IApiError }
>("register/userRegister", async (userData: IRegisterValues, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const { data } = await axiosInstance.post<IResponse>(
      `/api/v1/auth/signup`,
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

export const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userRegister.fulfilled,
        (state, action: PayloadAction<IResponse>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Unknown error",
          statusMsg: (action.payload as IApiError)?.statusMsg || "Error",
          };
           toast.error(`${action.payload?.message}`);
      });
  },
});

export default RegisterSlice.reducer;
