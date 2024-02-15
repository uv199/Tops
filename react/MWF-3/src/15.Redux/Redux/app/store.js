import { configureStore } from "@reduxjs/toolkit";

import countReducer from "../features/counter";
import amountReducer from "../features/amount";

export const store = configureStore({
  reducer: {
    countReducer: countReducer,
    amountReducer,
  },
});

// store = {
//   countReducer: {
//     count: 900,
//   },
// };
