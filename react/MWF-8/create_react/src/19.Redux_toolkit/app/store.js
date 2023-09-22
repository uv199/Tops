import { configureStore } from "@reduxjs/toolkit";

import countReducer from "../fetures/count/countSlice";

export const store = configureStore({
  reducer: {
    COUNT: countReducer,
  },
});
