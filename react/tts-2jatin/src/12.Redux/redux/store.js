import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./Slice/countSlice";
import amountSlice from "./Slice/amountSlice";
import productSlice from "./Slice/productSlice";

export const store = configureStore({
  reducer: {
    COUNT: countSlice,
    amountSlice, // amountSlice:amountSlice === amountSlice, if key and values name are same then just define only once
    productSlice,
  },
});

/*
let store = {
  COUNT: { count: 0 },
  amountSlice: { amount: 0 },
};

*/
