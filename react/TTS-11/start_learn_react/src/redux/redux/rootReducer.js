import { countReducer } from "./count/reducer";
import { amountReducer } from "./amount/reducer";
import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  COUNT: countReducer,
  AMOUNT: amountReducer,
  USER: userReducer,
});
