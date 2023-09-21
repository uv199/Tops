import React, { useState } from "react";
import { Button, Table } from "reactstrap";

export default function MultipleInput() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    address: {
      pincode: "",
      city: "",
    },
  });
  const [dataArr, setDataArr] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setDataArr([...dataArr, user]);
    setUser({
      name: "",
      email: "",
      number: "",
      address: {
        pincode: "",
        city: "",
      },
    });
  }
  return (
    <>
      <form className="d-flex flex-column">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={user?.name}
          onChange={(e) => setUser({ ...user, name: e?.target?.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={user?.email}
          onChange={(e) => setUser({ ...user, email: e?.target?.value })}
        />
        <label htmlFor="number">Number</label>
        <input
          type="number"
          id="number"
          value={user?.number}
          onChange={(e) => setUser({ ...user, number: e?.target?.value })}
        />
        <label htmlFor="city">City</label>

        <input
          type="text"
          id="city"
          value={user?.address?.city}
          onChange={(e) =>
            setUser({
              ...user,
              address: { ...user?.address, city: e?.target?.value },
            })
          }
        />

        <label htmlFor="pincode">Pincode</label>
        <input
          type="number"
          value={user?.address?.pincode}
          id="pincode"
          onChange={(e) =>
            setUser({
              ...user,
              address: { ...user?.address, pincode: e?.target?.value },
            })
          }
        />
        <input
          type="submit"
          className="mt-3"
          onClick={(e) => submitHandler(e)}
        />
      </form>

      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {dataArr?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.email}</td>
                <td>{e?.number}</td>
                <td>{e?.address?.city}</td>
                <td>{e?.address?.pincode}</td>

                {/* {e?.size?.map?.((e) => {
                  return (
                    <td className=" border">
                      <Button className="border">{e}</Button>{" "}
                    </td>
                  );
                })} */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

// let obj = {
//   name: "urvish",
//   age: 23,
// };

// obj = {
//   ...obj,
//   age: 34,
// };

// // obj ?

// let data = {
//   name,
//   email,
//   password,
//   address: {
//     line1,
//     line2,
//     pincode,
//     city,
//     state,
//   },
//   vehicaleDetrails: ["passion"],
// };
