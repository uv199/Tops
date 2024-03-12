import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fetures/auth/authSlice";
import productReducer from "../fetures/product/product";

export default configureStore({
  reducer: {
    authSlice: authReducer,
    productSlice: productReducer,
  },
});
