import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../fetures/count/countSlice";

export let store = configureStore({
  reducer: {
    countReducer: countReducer,
  },
});


/*
store = {
  countReducer: {
    count: 100,
  },
};
*/
