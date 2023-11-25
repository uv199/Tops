import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { addUser, removeUser, updateUser } from "./Redux/fetures/user/user";

export default function User() {
  const [name, setName] = useState("");
  const [index, setIndex] = useState(null);
  let data = useSelector((state) => {
    return state.USER.users;
  });

  const dispatch = useDispatch();
  const addData = () => {
    dispatch(addUser(name));
    setName("");
  };

  const deleteHandler = (index) => {
    dispatch(removeUser(index));
  };

  const updateHandler = (data, index) => {
    console.log("data,index", data, index);
    setName(data);
    setIndex(index);
  };

  const updateData = () => {
    dispatch(updateUser({ newData: name, index }));
    setName("");
    setIndex(null);
  };

  return (
    <>
      <hr />
      <input
        type="text"
        onChange={(e) => setName(e?.target?.value)}
        value={name}
      />
      <Button onClick={addData}>Add User</Button>
      <Button onClick={updateData}>Update User</Button>
      <div>
        {data.map((e, i) => {
          return (
            <>
              <h1>
                {i + 1}. {e}
              </h1>
              <Button onClick={() => deleteHandler(i)}>Delete</Button>
              <Button onClick={() => updateHandler(e, i)}>update</Button>
            </>
          );
        })}
      </div>
    </>
  );
}
