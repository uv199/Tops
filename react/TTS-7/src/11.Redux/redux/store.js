import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import amountSlice from "./amountSlice";

export let store = configureStore({
  reducer: {
    countSlice: countSlice,
    amountSlice: amountSlice,
  },
});

/*
let store = {
  countSlice: { count: 1020 },
};
*/
