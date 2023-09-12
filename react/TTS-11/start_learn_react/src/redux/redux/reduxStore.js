import { createStore } from "redux";
import { amountReducer } from "./amount/reducer";

export const store = createStore(amountReducer);
export default store;
