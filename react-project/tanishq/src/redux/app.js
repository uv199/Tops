import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    // cartSlice:cartSlice,
    cartSlice,
  },
});


/*

const dispatch = useDisplatch()
dispatch(action())

let data = useSlector((store)=>{
  return store.sliceName (key name) 
  })

*/
