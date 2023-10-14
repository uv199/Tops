import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/cartslice";

export const store = configureStore({
  reducer: {
    authReducer,
    productReducer,
    cartReducer,
  },
});
