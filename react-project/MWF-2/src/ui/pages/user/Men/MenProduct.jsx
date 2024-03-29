import axios from "axios";
import React, { useEffect, useState } from "react";
import { BE_URL } from "../../../../config";
import { toast } from "react-toastify";
import CardCom from "../../../components/Card/CardCom";

export default function MenProduct() {
  let [filter, setFilter] = useState({
    gender: "male",
    brand: "",
    mainCategory: "test",
    color: [],
    // price: {
    //   lt: 5000,
    //   gt: 0,
    // },
    // discountPercentage: {
    //   lt: 50,
    //   gt: 10,
    // },
    // size: ["48"],
    // category:["Cloths"]
  });
  let [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}/product/getAll`,
      params: filter,
    })
      .then((res) => {
        setData(res?.data?.data);
        console.log(
          "-----------  res?.data?.data----------->",
          res?.data?.data
        );
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);
  return (
    <div
      className="m-3 p-2 d-flex flex-wrap justify-content-around"
      style={{ backgroundColor: "#e8e8e6" }}
    >
      {data?.map?.((e) => {
        return <CardCom product={e} key={e?._id} />;
      })}
    </div>
  );
}
