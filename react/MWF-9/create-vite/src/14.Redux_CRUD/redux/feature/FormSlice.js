import { createSlice } from "@reduxjs/toolkit";

let FormSlice =  createSlice  ({

    name : "user",
    initialState : { name: "", age: 12, city:"", Gender: ""},
    reducers: {
        addData :(state, action)=>{

        }
    }
})
export default FormSlice.reducer
