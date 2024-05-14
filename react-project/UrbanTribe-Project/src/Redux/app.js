import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";


export const store = configureStore({
  reducer: {
    cartSlice,
  },
});
