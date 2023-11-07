import axios from "axios";
import redux, { applyMiddleware } from "redux";
import logger from "redux-logger";

// constatnt
const ADD_USER = "ADD_USER";

// store
const store = redux.createStore(reducer, applyMiddleware(logger.default));

//reducer function
function reducer(state = { user: [] }, action) {
  console.log("state", state);
  // console.log("action----->", action);

  switch (action.type) {
    case ADD_USER:
      return { user: [...state.user, action.payload] };
    default:
      return state;
  }
}

// action generator
function addUserToStore(data) {
  // console.log("data", data);

  let newObj = {
    id: data.id,
    email: data.email,
    username: data.username,
  };
  return { type: ADD_USER, payload: newObj };
}

function addUser(id) {
  axios({
    method: "get",
    url: `https://fakestoreapi.com/users/${id}`,
  })
    .then((res) => {
      store.dispatch(addUserToStore(res.data));
    })
    .catch((err) => {});
}

addUser(1);
addUser(2);
addUser(3);
addUser(4);
