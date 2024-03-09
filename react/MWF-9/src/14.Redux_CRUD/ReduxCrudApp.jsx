import React, { useState } from "react";
import { Provider } from "react-redux";
import FormCom from "./Component/FormCom";
import store from "./redux/App/store";
import UserTable from "./Component/UserTable";

export default function ReduxCrudApp() {
  let [updateData, setUpdateData] = useState({
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    gender: "",

  });



  let [index, setIndex] = useState("")
  
  return (
    <div>
      <Provider store={store}>
        <FormCom updateData={updateData} index={index}  />
        <UserTable setUpdateData={setUpdateData} setIndex={setIndex} />
      </Provider>
    </div>
  );
}
