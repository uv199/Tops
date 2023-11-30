import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  let [allData, setAllData] = useState([]);

  const navigate = useNavigate();
  const redirect = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then((res) => {
      console.log("res", res.data);
      setAllData(res.data);
    });
  }, []);

  return (
    <>
      <div
        style={{ width: "80vw", backgroundColor: "lightcoral" }}
        className="d-flex justify-content-evenly p-3  align-content-center gap-3 flex-wrap"
      >
        {allData.map((e, i) => {
          return (
            <img
              role="button"
              style={{ width: "8%" }}
              className=" rounded "
              onClick={() => redirect(e.id)}
              src={e.image}
              alt=""
            />
          );
        })}
      </div>
    </>
  );
}
