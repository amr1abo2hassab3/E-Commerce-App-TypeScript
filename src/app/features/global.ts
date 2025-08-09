import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IResponse } from "../../interfaces";

export interface GlobalState {
  userData: IResponse | null;
}

const initialState: GlobalState = {
  userData: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTokenFromCookie: (state, action: PayloadAction<IResponse>) => {
      state.userData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTokenFromCookie } = globalSlice.actions;

export default globalSlice.reducer;
