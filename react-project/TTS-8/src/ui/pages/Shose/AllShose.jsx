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
    brand: "", // take single select
    price: {
      lt: 10000,
      gt: 0,
    },
    // isAvailable: false,
  });

  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("---=-=-=->");
    axios({
      method: "get",
      url: `${BE_URL}/product/getAll`,
      params: { ...filter, ...(searchText && { search: searchText }) },
    })
      .then((res) => {
        console.log("-----------  res.data----------->", res.data);
        setAllProduct(res?.data?.data);
      })
      .catch((error) => toast.error(error.res?.data.message));
  }, [filter, searchText]);

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
