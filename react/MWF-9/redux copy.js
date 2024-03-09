import redux, { applyMiddleware } from "redux";
import logger from "redux-logger";

// constatnt
const INC = "INC";
const DEC = "DEC";

// store
const store = redux.createStore(reducer, applyMiddleware(logger.default));

//reducer function
function reducer(state = { count: 0 }, action) {
  console.log("action", action)
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// action generator

function incAction() {
  return { type: INC };
}
function decAction() {
  return { type: DEC };
}

// dispatch method
store.dispatch(incAction());
store.dispatch(incAction());
store.dispatch(incAction());
store.dispatch(decAction());

/*
let obj = {
  count: 0,
};

// obj.count=obj.count+1
obj = {
  count: obj.count + 1,
};
console.log("====",obj)
*/
