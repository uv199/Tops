import redux, { combineReducers, createStore } from "redux";

const INC = "increment";
const DEC = "decrement";
const INTIAL = "intial";
const DEC_BY_VAL = "decByValue";
const NUM_INC = "numInc";

// const store = createStore(
//   combineReducers({
//     count: countReducer,
//     number: numberReducer,
//   })
// );
const store = createStore(countReducer);

function countReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INTIAL:
      return { count: action.payload };
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    case DEC_BY_VAL:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

function numberReducer(state = { number: 0 }, action) {
  switch (action.type) {
    case NUM_INC:
      return { number: state.number + 1 };
    default:
      return state;
  }
}

let x = store.getState();
console.log("x:", x);

// action creatar

function incAction() {
  return { type: INC };
}

function intialAction(value) {
  return { type: INTIAL, payload: value };
}

function decByValAction(value) {
  return { type: DEC_BY_VAL, payload: value };
}

function decAction() {
  return { type: DEC };
}
function numIncAction() {
  return { type: NUM_INC };
}

store.dispatch(intialAction(10));
store.dispatch(decByValAction(5));

// store.dispatch(numIncAction());

let y = store.getState();
console.log("y:", y);
