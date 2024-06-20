import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  let [data, setData] = useState({});

  let paramsData = useParams();
  
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        "https://fakestoreapi.com/products/" + paramsData.id
      );
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <img className="w-[100px]" src={data.image} alt="" />
      <h1>{data.id}</h1>
      <h1>{data.title}</h1>
    </div>
  );
}
