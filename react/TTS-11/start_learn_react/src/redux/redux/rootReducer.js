import { countReducer } from "./count/reducer";
import { amountReducer } from "./amount/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  COUNT: countReducer,
  AMOUNT: amountReducer,
});
