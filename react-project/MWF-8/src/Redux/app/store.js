import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fetures/auth/authSlice";
import productReducer from "../fetures/product/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // productReducer: productReducer, // below and this line are same
    productReducer,
  },
});
