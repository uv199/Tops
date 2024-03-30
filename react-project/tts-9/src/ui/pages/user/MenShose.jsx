import axios from "axios";
import React, { useEffect, useState } from "react";
import { Input, Label } from "reactstrap";
import FilterCom from "./FilterCom";
import CardCom from "../../component/CardCom/CardCom";

export default function MenShose() {
  let [data, setData] = useState([]);

  let [filter, setFilter] = useState({
    gender: "male",
    rating: 0,
    search: "",
    color: [],
    brand: "",
    size: [],
    price: {},
    discountPercentage: {},
  });
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
      params: filter,
    }).then((res) => {
      console.log("-----------  res.data.data----------->", res.data.data);
      setData(res.data.data);
    });
  }, [filter]);

  return (
    <div>
      <h1>men product</h1>
      <FilterCom setFilter={setFilter} filter={filter} />
      <div className="d-flex flex-wrap gap-2 justify-content-around ">
        {data.map((e) => {
          return <CardCom product={e} key={e._id} />;
        })}
      </div>
    </div>
  );
}
