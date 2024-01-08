import React, { useState } from "react";
import { Provider } from "react-redux";
import FormCom from "./Component/FormCom";
import store from "./redux/App/store";
import UserTable from "./Component/UserTable";

export default function ReduxCrudApp() {
  let [updateData, setUpdateData] = useState({});
  let [index, setIndex] = useState("")
  return (
    <div>
      <Provider store={store}>
        <FormCom updateData={updateData}  />
        <UserTable setUpdateData={setUpdateData} />
      </Provider>
    </div>
  );
}
