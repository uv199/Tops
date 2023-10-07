import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fetures/authSlice/authSlice";
import productReducer from "../fetures/ProductSlice/productSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    productReducer,
  },
});
