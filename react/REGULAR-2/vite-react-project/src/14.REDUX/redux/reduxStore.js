import { combineReducers, createStore } from "redux";
import { countReducer } from "./count/reducer";
import { amountReducer } from "./amount/Reducer";

let rootReducer = combineReducers({
  COUNT: countReducer,
  AMOUNT: amountReducer,
});

export const store = createStore(rootReducer);
