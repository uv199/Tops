import React from "react";
import Router from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./redux/app/app";

export default () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
