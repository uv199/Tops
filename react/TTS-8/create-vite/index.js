/*

import redux, { applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";

// axios.get("url")
(function callApi(params) {
  axios
    .get("http://localhost:3000/users/1")
    .then((res) => {
      console.log("res", res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
})();

const INC = "INC";
const DEC = "DEC";
const INC_VALUE = "INC_VALUE";

const store = redux.createStore(reducer, applyMiddleware(logger.default));

function reducer(state = { count: 999 }, action) {
  console.log("action---->", action);
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    case INC_VALUE:
      return { count: state.count + action.value };
    default:
      return state;
  }
}

// action genarator

function incAction(params) {
  return { type: INC };
}

function decAction(params) {
  return { type: DEC };
}

function incByValueAction(x) {
  return { type: INC_VALUE, value: x };
}

let x = store.getState();
console.log("x", x);
// store.dispatch(incByValueAction(10000000));
// store.dispatch({ type: INC });
store.dispatch(incAction());
// store.dispatch(decAction());

let y = store.getState();
*/

function sum(no, action) {
  if (action.type === "inc_two") {
    return no + 2;
  } else if (action.type === "inc_three") {
    return no + 3;
  } else if (action.type === "inc_val") {
    return no + action.x;
  } else {
    return no;
  }
}
// action creator
function incAction(params) {
  return { type: "inc_two" };
}
function incthreeAction(params) {
  return { type: "inc_three" };
}
function incValAction(x) {
  return { type: "inc_val", x: x };
}

let number = 10;
number = sum(number, incAction());
number = sum(number, incthreeAction());
number = sum(number, incValAction(50));
console.log("number", number);
