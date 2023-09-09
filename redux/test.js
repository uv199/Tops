import redux from "redux";

const DEC = "decrement";
const INC = "increment";
const INC_BY_VALUE = "incByValue";
let store = redux.createStore(reducer);

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    case INC_BY_VALUE:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

// action generator
function incrementFun(params) {
  return { type: INC };
}
function decrementFun(params) {
  return { type: DEC };
}
function incByValFun(x) {
  return { type: INC_BY_VALUE, payload: x };
}

let x = store.getState();
store.dispatch(incByValFun(10));
store.dispatch(incByValFun(10));
let y = store.getState();
console.log("🚀 ~ file: index.js:35 ~ y:", y);
