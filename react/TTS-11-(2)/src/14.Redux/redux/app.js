import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import userSlice from "./user";
import productSlice from "./product"

export const store = configureStore({
  reducer: {
    COUNT: countSlice,
    userSlice: userSlice,
    productSlice:productSlice
  },
});

/*
const store = {
  COUNT: {
    count: 0,
  },
  userSlice:{
    user:[]
  }
};
*/
