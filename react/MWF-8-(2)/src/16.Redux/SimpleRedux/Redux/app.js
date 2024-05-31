//  config store

import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./fetures/counterSlice";
import amountSlice from "./fetures/amountSlice";

export let store = configureStore({
  reducer: {
    counterSlice: counterSlice,
    amountSlice: amountSlice,
  },
});

const store2 = {
  counterSlice: { count: 100 },
  amountSlice: { amount: 100 },
};
