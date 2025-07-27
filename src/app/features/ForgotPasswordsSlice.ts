import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios.config";
import type { AxiosError } from "axios";
import type { IApiError, IForgotValues } from "../../interfaces";
import { toast } from "react-toastify";

export interface IRegisterSlice {
  loading: boolean;
  data: IApiError | null;
  error: IApiError | null;
}

const initialState: IRegisterSlice = {
  loading: false,
  data: null,
  error: null,
};

export const userSentEmail = createAsyncThunk<
  IApiError,
  IForgotValues,
  { rejectValue: IApiError }
>("sentEmail/userSentEmail", async (userData: IForgotValues, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const { data } = await axiosInstance.post<IApiError>(
      `/api/v1/auth/forgotPasswords`,
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

export const ForgotPasswordsSlice = createSlice({
  name: "sentEmail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userSentEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userSentEmail.fulfilled,
        (state, action: PayloadAction<IApiError>) => {
          state.loading = false;
            state.data = action.payload;
            toast.success(`${action.payload?.message}`);
        }
      )
      .addCase(userSentEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Unknown error",
          statusMsg: (action.payload as IApiError)?.statusMsg || "Error",
          };
           toast.error(`${action.payload?.message}`);
      });
  },
});

export default ForgotPasswordsSlice.reducer;
