import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import amountSlice from "./amountSlice";
import todoSlice from "./todoSlice";
import productSlice from "./productSlice";

export let store = configureStore({
  reducer: {
    countSlice: countSlice,
    amountSlice: amountSlice,
    productSlice,
    todoSlice, // todoSlice:todoSlice => todoSlice
    // if key and values name will same then you can write only once
  },
});

/*
let store = {
  countSlice: { count: 1020 },
};
*/
