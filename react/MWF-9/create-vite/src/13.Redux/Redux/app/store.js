import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../fetures/count/countSlice";
import amountReducer from "../fetures/Amount/amount";

export let store = configureStore({
  reducer: {
    countReducer: countReducer,
    amountReducer,
  },
});

/*
store = {
  countReducer: {
    count: 100,
  },
  amountReducer:{
    amount: 999
  }

};
*/
