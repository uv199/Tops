import React from "react";
import CountCom from "./CountCom";
import { Provider } from "react-redux";
import { store } from "./store";
import TaskTodo from "./TaskTodo";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        {/* <CountCom /> */}
        <TaskTodo />
      </Provider>
    </div>
  );
}
