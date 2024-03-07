import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fetures/auth/authSlice";

export default configureStore({
  reducer: {
    authSlice: authReducer,
  },
});
