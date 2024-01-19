// state management
import { applyMiddleware } from "redux";
import { createStore, combineReducers } from "redux";
import logger from "redux-logger";

// constant
const INC = "INC";
const INC_2 = "INC_2";
const INC_AMT = "INC_AMT";

// count
function reducer(state = { count: 900 }, action) {
  if (action.type === INC) {
    return { count: state.count + 1 };
  } else if (action?.type === INC_2) {
    return { count: state.count + 2 };
  } else {
    return state;
  }
}

// amount
function reducerAmt(state = { amount: 100 }, action) {
  if (action.type === INC_AMT) {
    return { amount: state.amount + action.payload };
  } else {
    return state;
  }
}

let cmdReducer = combineReducers({ AMT: reducerAmt, COUNT: reducer });

const store = createStore(cmdReducer, applyMiddleware(logger.default));

let data = store.getState();
console.log("-----------  data----------->", data);

// action generator

function inc2Action(params) {
  return { type: INC_2 };
}

function incAction(params) {
  return { type: INC };
}

// store.dispatch(incAction());
// store.dispatch(inc2Action());
// let data2 = store.getState();
// console.log("-----------  data2----------->", data2);

function incAmtAction(no) {
  return { type: INC_AMT, payload: no };
}
store.dispatch(incAmtAction(10));
store.dispatch(incAmtAction(100));
