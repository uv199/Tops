import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Fetures/Auth/AuthSlice";
import cartReducer from "../Fetures/cart/cart";

export default configureStore({
  reducer: {
    authSlice: authReducer,
    cartSlice: cartReducer,
  },
});
