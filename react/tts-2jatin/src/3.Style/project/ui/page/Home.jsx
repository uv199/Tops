import React, { useState } from "react";
import img from "../../../../../public/headphone.png";
import CardCom from "../components/CardCom";
import axios from "axios";
import { Button } from "@material-tailwind/react";

export default function Home() {
  let [data, setData] = useState([]);
  const callApi = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      console.log("-----------  response----------->");
      setData(response.data);
    } catch (error) {
      alert("Somthing went wrong");
    }
  };

  return (
    <div>
      <div className="bg-purple-50 flex items-center justify-around">
        <div>
          <h1 className="text-7xl leading-[90px] mb-4">
            Roco <br />
            WireLess <br />
            HeadPhones
          </h1>
          <button className="border-b-4 hover:bg-purple-300 hover:text-white border border-black bg-white py-2 px-5 rounded-[20px] font-semibold ">
            Shop Now
          </button>
        </div>
        <img src={img} alt="" />
      </div>

      <Button onClick={() => callApi()}>call-API</Button>
      {data.map((e) => {
        console.log("-----------  e----------->", e);
        return (
          <div>
            <img className="w-[50px]" src={e.image} alt="" />
            <li>{e.title}</li>;
          </div>
        );
      })}
      <div className="grid grid-cols-4 gap-4 p-[20px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
          return <CardCom />;
        })}
      </div>
    </div>
  );
}
