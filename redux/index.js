import redux, { combineReducers } from "redux";

const INC = "increment";

let store = redux.createStore(
  combineReducers({
    countReducer,
    numberReducer,
  })
);

function countReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INC:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

function numberReducer(state = { number: 0 }, action) {
  switch (action.type) {
    case INC:
      if (action.payload > 100) {
        return { number: state.number + 1 };
      } else {
        return state;
      }
    default:
      return state;
  }
}

let x = store.getState();
console.log("x", x);

// action genarator
function incAction(no) {
  return { type: INC, payload: no };
}
function incAction_num() {
  // return { type: "numb_inc" };
  return { type: INC };
}

store.dispatch(incAction(1000));
// store.dispatch(incAction_num());

let y = store.getState();
console.log("y", y);

// let obj1 = {
//   count: 0,
// };

// let obj2 = {
//   number: 0,
// };

// state = { countReducer: { count: 0 }, numberReducer: { number: 0 } };
