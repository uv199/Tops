import React from "react";
import Divcom from "./Divcom";
import { store } from "./redux/reduxStore";
import { Provider } from "react-redux";

export default function AppCom() {
  return (
    <>
      <Provider store={store}>
        <h1>AppCom</h1>
        <Divcom />  
      </Provider>
    </>
  );
}
