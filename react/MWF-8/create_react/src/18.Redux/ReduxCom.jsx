import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// action name constatant
const incrementByAmount = "incrementByAmount";
const increment = "increment";
const decrement = "decrement";
const init = "init";
const store = createStore(
  combineReducers({
    acccount: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

// bonus reducer
function bonusReducer(state = { points: 1 }, action) {
  switch (action.type) {
    case increment:
      return { points: state.points + 1 };
    default:
      return state;
  }
}
// account reducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case increment:
      return { amount: state.amount + 1 };
    case decrement:
      return { amount: state.amount - 1 };
    case incrementByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

// global state

store.getState();
console.log("store.getState():", store.getState());

// action creater
function inc(params) {
  return { type: increment };
}
function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/account/${id}`);
    dispatch(initUser(data.amount));
  };
}
function initUser(value) {
  return { type: init, payload: value };
}
function dec(params) {
  return { type: decrement };
}
function incByAmt(amt) {
  return { type: incrementByAmount, payload: amt };
}

// store.dispatch(inc())
// store.dispatch(dec())
// store.dispatch(getUser(2))
store.dispatch(incByAmt(5));

console.log("store.getState():", store.getState());

// async function getUser(id) {
//     const { data } = await axios.get(`http://localhost:3000/account/${id}`)
// }
// getUser(1)
