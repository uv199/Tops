//  config store

import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./fetures/task";

export let store = configureStore({
  reducer: {
    taskSlice: taskSlice,
  },
});
