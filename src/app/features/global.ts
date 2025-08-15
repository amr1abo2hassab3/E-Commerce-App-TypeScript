import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IResponse, JWtDecode } from "../../interfaces";

export interface GlobalState {
  userData: IResponse | null;
  productsIdFavorite: string[];
  countWishlist: number;
  jwtDecode: JWtDecode;
}

const initialState: GlobalState = {
  userData: null,
  productsIdFavorite: [],
  countWishlist: 0,
  jwtDecode:{} as JWtDecode ,
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
    setJwtDecode:(state, action: PayloadAction<JWtDecode>) => {
      state.jwtDecode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTokenFromCookie , setProductsIdFavorite , setCountWishList , setJwtDecode } = globalSlice.actions;

export default globalSlice.reducer;
