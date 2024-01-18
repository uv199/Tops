import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProductPage() {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const fetchData = await axios({
          method: "get",
          url: "https://fakestoreapi.com/product/1",
        });
        setData(fetchData?.data);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);
  console.log("-----------  data----------->", data);
  return (
    <div style={{ width: "100vw" }} className="d-flex">
      <div className="w-25">
        {" "}
        <img className="w-100" src={data?.image} alt="" />
      </div>
      <div className="w-75">
        <h1>Name : {data?.title}</h1>
      </div>
    </div>
  );
}
