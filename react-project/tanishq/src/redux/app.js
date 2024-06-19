import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
  },
});
