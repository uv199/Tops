import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../fetures/count";

export const store = configureStore({
  reducer: {
    countReducer,
  },
});

// let store = {
//   countReducer: { count: 1999 },
// };
