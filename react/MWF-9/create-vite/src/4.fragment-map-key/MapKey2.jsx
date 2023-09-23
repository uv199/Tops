import React, { Fragment, useId } from "react";
import { Table } from "reactstrap";
import FragmentCom from "./FragmentCom";
const data = [
  {
    city: "Delhi",
    state_name: "Delhi",
    population: "32226000",
  },
  {
    city: "Mumbai",
    state_name: "Mahārāshtra",
    population: "24973000",
  },
  {
    city: "Kolkāta",
    state_name: "West Bengal",
    population: "18502000",
  },
  {
    city: "Bangalore",
    state_name: "Karnātaka",
    population: "15386000",
  },
  {
    city: "Chennai",
    state_name: "Tamil Nādu",
    population: "12395000",
  },
];
export default function MapKey2() {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>SR.</th>
            <th>City</th>
            <th>State</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.((e, i) => {
            const id = useId();
            return (
              <tr key={id}>
                <th scope="row">{i + 1}</th>
                <td>{e?.city}</td>
                <td>{e?.state_name}</td>
                <td>{e?.population}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* {[1, 2, 3].map((e, i) => {
        return <FragmentCom key={i} />;
      })} */}
    </>
  );
}
