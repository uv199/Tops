import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fetures/auth/auth";
import productReducer from "../fetures/product/product";

export const store = configureStore({
  reducer: { authReducer, productReducer },
});

/*

state= {
    authReducer: {
             user: {},
            token: "teshghjag",
        },
    productReducer : { products: [] }
}
*/
