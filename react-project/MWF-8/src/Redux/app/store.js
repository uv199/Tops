import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fetures/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
