//  config store

import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./fetures/counterSlice";

export let store = configureStore({
  reducer: {
    counterSlice: counterSlice,
  },
});

const store2 = {
  counterSlice: { count: 100 },
};
