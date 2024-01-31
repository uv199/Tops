import { configureStore } from "@reduxjs/toolkit";
import UReducer from "../fetures/user";

export const store = configureStore({
  reducer: {
    userReducer: UReducer,
  },
});

// store = {
//   userReducer: { user: [] },
// };
