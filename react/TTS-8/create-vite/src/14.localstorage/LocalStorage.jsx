import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { toast } from "react-toastify";

export default function LocalStorage() {
  const [data, setData] = useState({
    name: "",
    city: "",
  });
  let [arr, setArr] = useState([]);

  // useEffect
  useEffect(() => {
    let data = localStorage.getItem("userArr");
    console.log("data", typeof data);
    const normalData = JSON.parse(data);
    console.log("normalData", normalData);
    setArr(normalData);
  }, []);

  function getData(e) {
    e.preventDefault();
    if (data.name.length > 0 && data.city.length > 0) {
      setArr([...arr, data]);
      setData({
        name: "",
        city: "",
      });
      localStorage.setItem("userArr", JSON.stringify([...arr, data]));
    } else {
      toast.error("please enter data");
    }
  }

  return (
    <>
      <div>
        <form
          onSubmit={(e) => getData(e)}
          className="d-flex flex-column p-3 border-0 rounded-4 m-3"
          style={{ backgroundColor: "lightcoral" }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={data?.name}
            onChange={(e) => setData({ ...data, name: e?.target?.value })}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={data?.city}
            onChange={(e) => setData({ ...data, city: e?.target?.value })}
          />
          <input type="submit" className="mt-3" />
        </form>

        <Table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>User Name</th>
              <th>City Name</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name}</td>
                  <td>{e?.city}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
