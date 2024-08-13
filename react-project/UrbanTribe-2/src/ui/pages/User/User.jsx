import { log } from "async";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function User() {
  let [data, setData] = useState({});
  let [x, setX] = useState(true);

  const refetch = () => setX(!x);

  useEffect(() => {
    (async function fetchData(params) {
      let responseData = await axios.get("http://localhost:9999/user/getAll");
      console.log(responseData.data);
      setData(responseData.data.data);
    })();
  }, [x]);
  console.log(data);
  const editHandler = () => {
    console.log("edithandler called");
  };
  const deleteHandler = async (id) => {
    console.log("deleteHandler called");
    try {
      let response = await axios.delete(
        `http://localhost:9999/user/delete/${id}`
      );
      refetch();
    } catch (error) {
      alert("Somthing wrong");
    }
  };
  //  call api and display data
  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>number</th>
          <th>age</th>
          <th>city</th>
          <th>pincode</th>
          <th>Action</th>
        </tr>
        {data?.map?.((e) => {
          return (
            <tr key={e._id}>
              <td>{e?.name}</td>
              <td>{e?.email}</td>
              <td>{e?.number}</td>
              <td>{e?.age}</td>
              <td>{e?.address?.[0]?.city}</td>
              <td>{e?.address?.[0]?.pinCode}</td>
              <td>
                <button onClick={() => editHandler()}>edit</button>
                <button onClick={() => deleteHandler(e?._id)}>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
