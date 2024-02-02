import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fetures/auth/auth";

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
  },
});
