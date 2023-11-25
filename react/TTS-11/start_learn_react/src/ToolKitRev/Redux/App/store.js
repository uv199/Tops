import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../fetures/count/count";
import userReducer from "../fetures/user/user";

export const store = configureStore({
  reducer: {
    COUNT: countReducer,
    USER: userReducer,
  },
});
