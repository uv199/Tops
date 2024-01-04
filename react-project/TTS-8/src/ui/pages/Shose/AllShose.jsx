import axios from "axios";
import React, { useEffect, useState } from "react";
import { BE_URL } from "../../../config";
import { toast } from "react-toastify";
import Card from "../../components/Card/Card";
import { Button } from "reactstrap";
import FilterCom from "./FilterCom";

export default function AllShose() {
  let [allProduct, setAllProduct] = useState([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  let [filter, setFilter] = useState({
    category: [],
    color: [],
    size: [],
    gender: "",
    price: {
      lt: "",
      gt: "",
    },
  });
  console.log("-----------  filter----------->", filter);

  useEffect(() => {
    axios({
      url: `${BE_URL}/product/getAll`,
      data:filter
    })
      .then((res) => {
        console.log("-----------  res.data----------->", res.data);
        setAllProduct(res?.data?.data);
      })
      .catch((error) => toast.error(error.message));
  }, [filter]);

  const handleCanvas = () => {
    console.log("----->");
    setShowOffcanvas(!showOffcanvas);
  };
  return (
    <>
      <div>
        <Button variant="primary" onClick={handleCanvas}>
          Open
        </Button>
        <FilterCom
          handleCanvas={handleCanvas}
          showOffcanvas={showOffcanvas}
          allShoseFilter={filter}
          allShoseSetFilter={setFilter}
        />
      </div>
      <div className="row p-4">
        {allProduct?.map((product) => {
          return (
            <div className="col-3" key={product?._id}>
              <Card key={product?._id} product={product} />
            </div>
          );
        })}
      </div>
    </>
  );
}
