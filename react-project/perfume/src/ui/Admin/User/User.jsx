import React, { useEffect } from "react";
import { instanceApi } from "../../../Api/axiosconfig";

export default function User() {
  useEffect(() => {
    async function getUser(params) {
      let response = await instanceApi.get("/user/getAll");
      console.log("-----------  response----------->", response.data.data);
    }
    getUser();
  }, []);
  return <div>User</div>;
}
