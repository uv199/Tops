import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { loginApi } from "../../redux/fetures/user";
import { toast } from "react-toastify";

export default function User() {
  let [data, setData] = useState({});
  let [input, setInput] = useState({
    email: "admin@admin.com",
    password: "123456",
  });
  const dispatch = useDispatch();
  const { pending, user, error } = useSelector((state) => state.userSlice);
  useEffect(() => {
    if (error) alert(error);
    setData(user);
  }, []);

  return (
    <>
      {pending ? (
        <h1>Loading...!</h1>
      ) : (
        <div>
          <h1>email : {data.email}</h1>
          <Button onClick={() => dispatch(loginApi(input))}>Call Api</Button>
        </div>
      )}
    </>
  );
}
