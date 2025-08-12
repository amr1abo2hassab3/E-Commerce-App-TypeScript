import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IResponse } from "../../interfaces";

export interface GlobalState {
  userData: IResponse | null;
  productsIdFavorite: string[];
  countWishlist: number;
}

const initialState: GlobalState = {
  userData: null,
  productsIdFavorite: [],
  countWishlist:0 ,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTokenFromCookie: (state, action: PayloadAction<IResponse>) => {
      state.userData = action.payload;
    },
    setProductsIdFavorite:(state, action: PayloadAction<string[]>) => {
      state.productsIdFavorite = action.payload;
    },
    setCountWishList:(state, action: PayloadAction<number>) => {
      state.countWishlist = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTokenFromCookie , setProductsIdFavorite , setCountWishList } = globalSlice.actions;

export default globalSlice.reducer;
