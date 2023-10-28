import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../fetures/amount/amountSlice";

export const store = configureStore({
  reducer: {
    AMT: amountReducer,
  },
});
