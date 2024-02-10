import { configureStore } from "@reduxjs/toolkit";
import UReducer from "../fetures/user";
import PReducer from "../fetures/product";

export const store = configureStore({
  reducer: {
    userReducer: UReducer,
    PReducer
  },
});

// store = {
//   userReducer: { user: [] },
// };
