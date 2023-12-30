import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../feature/FormSlice"

export default configureStore({
    reducer: {
        formReducer
    }
}) 
