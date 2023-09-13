import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const INTIAL_STATE = "INTIAL_STATE";
const INC_POINT = "INC_POINT";
const INC_AMT = "INC_AMT";

const rootReducer = combineReducers({
  AMT: amountreducer,
  POINT: pointReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger.default, thunk.default)
);

function amountreducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case INTIAL_STATE:
      return { amount: action.payload };
    case INC_AMT:
      return { amount: state.amount + 1 };
    default:
      return state;
  }
}

function pointReducer(state = { point: 0 }, action) {
  switch (action.type) {
    case INC_POINT:
      return { point: state.point + 1 };

    default:
      return state;
  }
}

function intialValyueAction(id) {
  return async (dispatch, getState) => {
    let { data } = await axios.get(`http://localhost:3000/user/${id}`);
    dispatch({ type: INTIAL_STATE, payload: data.amount });
  };
}

// to add 1 in point
function add_point() {
  return { type: INC_POINT };
}
function add_amt() {
  return { type: INC_AMT };
}

store.dispatch(intialValyueAction(2));

store.dispatch(add_point());
store.dispatch(add_amt());
