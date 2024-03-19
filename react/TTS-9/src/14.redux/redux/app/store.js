import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../fetures/count";
import amountReducer from "../fetures/amount";
import userSlice from "../fetures/user";

export default configureStore({
  reducer: {
    COUNT: countReducer,
    amountReducer,
    userSlice,
  },
});

let store = {
  COUNT: {
    count: 999,
  },
  amountReducer: {
    amount: 0,
  },
};

// export default print("jghjgasdhjgfhjs");

// TODO
function print(params) {
  return "store";
}

print("jghjgasdhjgfhjs");
