import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { IApiError } from "../../../interfaces";
import { toast } from "react-toastify";
import type { CartResponse } from "../../../interfaces/cartInterfaces";
import { addToCart } from "./actions/addToCart";
import { clearCart } from "./actions/clearCart";
import { removeItem } from "./actions/removeItem";
import { updateQuntity } from "./actions/updateQuntity";

export interface ICartSlice {
  loading: boolean;
  data: CartResponse | null;
  error: IApiError | null;
}

const initialState: ICartSlice = {
  loading: false,
  data: null,
  error: null,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add to cart action 
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
    // clear cart action 
    builder
    .addCase(clearCart.pending, (state) => {
      state.loading = true;
    })
    .addCase(clearCart.fulfilled, (state) => {
      state.loading = false;
    })
    // remove item from cart
        builder
      .addCase(removeItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        removeItem.fulfilled,
        (state, action: PayloadAction<CartResponse>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(removeItem.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Unknown error",
          statusMsg: (action.payload as IApiError)?.statusMsg || "Error",
          };
           toast.error(`${action.payload?.message}`);
      });
    // update product quntity 
        builder
      .addCase(updateQuntity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateQuntity.fulfilled,
        (state, action: PayloadAction<CartResponse>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(updateQuntity.rejected, (state, action) => {
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
