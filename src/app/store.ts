import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './features/LoginSlice'
import RegisterSlice from './features/RegisterSlice'
import ForgotPasswordsSlice from './features/ForgotPasswordsSlice'

export const store = configureStore({
    reducer: {
      login:loginSlice,
      register:RegisterSlice ,
      sentEmail:ForgotPasswordsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch