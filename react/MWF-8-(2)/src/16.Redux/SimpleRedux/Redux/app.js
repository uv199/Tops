import { configureStore } from "@reduxjs/toolkit";

import countreSlice from "./counterSlice";
export const store = configureStore({
  reducer: {
    COUNT: countreSlice,
  },
});

const stored = {
  COUNT: { count: 0 },
};

let data = stored.COUNT;
// data  = {count:20} // data.count
