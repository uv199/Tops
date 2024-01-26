import { configureStore } from "@reduxjs/toolkit";

import countReducer from "../features/count/counter";

export const store = configureStore({
  reducer: {
    countReducer: countReducer,
  },
});

// store = {
//   countReducer: {
//     count: 900,
//   },
// };
