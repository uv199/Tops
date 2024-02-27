import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProductPage() {
  let [data, setData] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${id}`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <img src={data.image} alt="" srcset="" />
    </div>
  );
}
