import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../fetures/amount/amountSlice";
import nameReducer from "../fetures/nameList/Name";
import countReducer from "../fetures/count/countslice";

export const store = configureStore({
  reducer: {
    AMT: amountReducer,
    NAME: nameReducer,
    COUNT: countReducer,
  },
});

// const state = {
//   AMT: amountReducer,
//   NAME: { nameArr: ["test", "name"] },
// };
