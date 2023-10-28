import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../fetures/amount/amountSlice";
import nameReducer from "../fetures/nameList/Name";

export const store = configureStore({
  reducer: {
    AMT: amountReducer,
    NAME: nameReducer,
  },
});

// const state = {
//   AMT: amountReducer,
//   NAME: { nameArr: ["test", "name"] },
// };
