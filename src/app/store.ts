import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/LoginSlice";
import RegisterSlice from "./features/RegisterSlice";
import ForgotPasswordsSlice from "./features/ForgotPasswordsSlice";
import CartSlice from "./features/CartSlice/CartSlice";
import globalSlice from "./features/global";
import whishListSlice from "./features/wishListSlice/wishListSlice";

export const store = configureStore({
  reducer: {
    global:globalSlice,
    login: loginSlice,
    register: RegisterSlice,
    sentEmail: ForgotPasswordsSlice,
    cart: CartSlice,
    whishList:whishListSlice ,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
