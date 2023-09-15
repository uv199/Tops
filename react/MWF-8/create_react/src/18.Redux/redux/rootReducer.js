import { combineReducers } from "redux";
import { amountReducer } from "./amount/reducer";
import { countReducer } from "./count/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  AMOUNT: amountReducer,
  COUNT: countReducer,
  USER: userReducer,
});
