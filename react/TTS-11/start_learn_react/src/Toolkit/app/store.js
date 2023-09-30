import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/count/countSlice";
import amountReducer from "../features/amount/amountSlice";
import userReducer from "../features/User/userSlice";

export const store = configureStore({
  reducer: {
    COUNT: countReducer,
    AMOUNT: amountReducer,
    USER: userReducer,
  },
});
