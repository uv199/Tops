import { combineReducers } from "redux";
import { countReducer } from "./count/reducer";
import { amountReducer } from "./amount/Reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  COUNT: countReducer,
  AMOUNT: amountReducer,
  USER: userReducer,
});
