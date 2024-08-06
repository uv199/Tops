import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import taskSlice from "./taskSlice";

export let store = configureStore({
  reducer: {
    counterSlice: counterSlice,
    taskSlice: taskSlice,
  },
});
