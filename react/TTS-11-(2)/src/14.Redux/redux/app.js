import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

export const store = configureStore({
  reducer: {
    COUNT: countSlice,
  },
});

/*
const store = {
  COUNT: {
    count: 0,
  },
};
*/
