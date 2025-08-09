import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { IApiError } from "../../../interfaces";
import { toast } from "react-toastify";

import type { addWishListResponse } from "../../../interfaces/wishListInterfaces";
import { addToWishList } from "./actions/addToWishList";
import { removeItemFromWishList } from "./actions/removeFromWishlist";

export interface IWishListSlice {
  loading: boolean;
  data: addWishListResponse | null;
  error: IApiError | null;
}

const initialState: IWishListSlice = {
  loading: false,
  data: null,
  error: null,
};

export const whishListSlice = createSlice({
  name: "whishList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add to whishList action 
    builder
      .addCase(addToWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addToWishList.fulfilled,
        (state, action: PayloadAction<addWishListResponse>) => {
          state.loading = false;
            state.data = action.payload;
        }
      )
      .addCase(addToWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Unknown error",
          statusMsg: (action.payload as IApiError)?.statusMsg || "Error",
          };
           toast.error(`${action.payload?.message}`);
      });
    // Remove product from whishList action 
    builder
      .addCase(removeItemFromWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        removeItemFromWishList.fulfilled,
        (state, action: PayloadAction<addWishListResponse>) => {
          state.loading = false;
            state.data = action.payload;
        }
      )
      .addCase(removeItemFromWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Unknown error",
          statusMsg: (action.payload as IApiError)?.statusMsg || "Error",
          };
           toast.error(`${action.payload?.message}`);
      });
  },
});

export default whishListSlice.reducer;
