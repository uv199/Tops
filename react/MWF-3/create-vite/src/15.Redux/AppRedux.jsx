import React from "react";
import Counter from "./Redux/ui/pages/Counter";
import { Provider } from "react-redux";
import { store } from "./Redux/app/store";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
