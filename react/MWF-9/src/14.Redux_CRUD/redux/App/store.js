import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../feature/formSlice"

export default configureStore({
    reducer: {
        formReducer
    }
}) 
