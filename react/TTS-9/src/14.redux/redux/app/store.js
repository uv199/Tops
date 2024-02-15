import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../fetures/count";

export default configureStore({
  reducer: {
    COUNT: countReducer,
  },
});

let store = {
  COUNT: {
    count: 999,
  },
};

function print(params) {
  return "store";
}

print("jghjgasdhjgfhjs");

// export default print("jghjgasdhjgfhjs");
