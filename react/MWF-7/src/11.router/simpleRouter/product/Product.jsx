import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import CardDefault from "./Card";

export default function Product() {
  let [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);
  return (
    <div className="bg-gray-200 p-5">
      {/* <Button }>Call Api</Button> */}
      <div className="grid grid-cols-5 gap-[20px]">
        {data.map((e, i) => {
          return <CardDefault data={e} />;
        })}
      </div>
    </div>
  );
}
