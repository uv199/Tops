import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user"

export default
 configureStore ({
    reducer:{
        userSlice
    }
})
