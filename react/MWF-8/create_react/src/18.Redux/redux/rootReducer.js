import { amountReducer } from "./amount/reducer";
import { countReducer } from "./count/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  AMOUNT: amountReducer,
  COUNT: countReducer,
});
