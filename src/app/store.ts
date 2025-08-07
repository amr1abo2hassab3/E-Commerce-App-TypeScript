import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/LoginSlice";
import RegisterSlice from "./features/RegisterSlice";
import ForgotPasswordsSlice from "./features/ForgotPasswordsSlice";
import CartSlice from "./features/CartSlice/CartSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    register: RegisterSlice,
    sentEmail: ForgotPasswordsSlice,
    cart: CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
