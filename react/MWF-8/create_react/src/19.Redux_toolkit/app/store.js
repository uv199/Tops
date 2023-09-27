import { configureStore } from "@reduxjs/toolkit";

import countReducer from "../fetures/count/countSlice";
import amountReducer from "../fetures/amount/amountslice";
import userReducer from "../fetures/user/userSlice";

export const store = configureStore({
  reducer: {
    COUNT: countReducer,
    AMOUNT: amountReducer,
    USER: userReducer,
  },
});
