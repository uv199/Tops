import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Card({ userId }) {
  let [useData, setuseData] = useState();
  console.log("useData", useData);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/users/${userId}`,
    })
      .then((resData) => {
        setuseData(resData.data);
        console.log("---resData---", resData);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }, [userId]);

  return (
    <>
      <h1>My name is {useData?.name}</h1>
    </>
  );
}
