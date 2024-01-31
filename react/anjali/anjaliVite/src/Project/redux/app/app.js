import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../fetures/count";
import pointReducer from "../fetures/point";
import todoReducer from "../fetures/todo";
import productReducer from "../fetures/product";

export const store = configureStore({
  reducer: {
    countReducer,
    pointReducer,
    todoReducer,
    productReducer,
  },
});

// let store = {
//   countReducer: { count: 1999 },
//   pointReducer: { point: 0 },
//   todoReducer :[]
//   productReducer :{ product : [] }
// };
