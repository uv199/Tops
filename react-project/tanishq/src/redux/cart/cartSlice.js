import { APIinstance } from "../../UI/Api/axiosConfig";
import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCartApi=createAsyncThunk("fetchcart",(token)=>{
    return APIinstance.get("/cart/getAll",{
        headers:{
            authorization:"bearer " + token
        }
    }).then((res)=>{
        // console.log("====>res",res);
        return res.data;
    })
    // .catch((err) => {
    //     console.log("🚀 ~ file: cartSlice.js:12 ~ fetchCartApi ~ err:", err)
     
    // })
})

let cartSlice=createSlice({
    name:"cart",
    initialState:{cart:[],cartId:""},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCartApi.fulfilled,(state,action) => {
            // console.log(" ~ action:", action.payload)
           state.cart=action.payload.data;
           state.cartId=action.payload.cartId;

        });
    },
})
export default cartSlice.reducer;
