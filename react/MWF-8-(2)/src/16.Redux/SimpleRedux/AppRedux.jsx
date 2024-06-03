import React from "react";
import Home from "../SimpleRedux/Home";
import { Provider } from "react-redux";
import { store } from "./redux/app";

export default function AppRedux() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
