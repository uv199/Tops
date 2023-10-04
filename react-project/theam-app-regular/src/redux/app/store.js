import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/ProductSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    productReducer,
  },
});
