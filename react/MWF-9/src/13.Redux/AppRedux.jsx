import React from "react";
import CountComponenet from "./componenets/CountComponenet";
import { Provider } from "react-redux";
import { store } from "./Redux/app/store";
import AmountCom from "./componenets/AmountCom";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <CountComponenet />
        <hr />
        <AmountCom />
      </Provider>
    </div>
  );
}
