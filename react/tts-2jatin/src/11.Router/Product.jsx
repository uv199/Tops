import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  let [productData, setProductData] = useState([]);
  console.log("-----------  productData----------->", productData);
  useEffect(() => {
    async function fetchData(params) {
      let response = await axios.get("https://fakestoreapi.com/products");
      setProductData(response.data);
    }
    fetchData();
  }, []);

  const navigate = useNavigate()
  return (
    <div className="p-3">
      <div className="grid grid-cols-5 gap-3">
        {productData.map((e) => {
            console.log("--->",e)
          return (
            <Card onClick={()=>navigate(`/product/${e.id}`)} className="mt-6 border border-gray-400">
              <CardHeader color="blue-gray" className="border border-black relative h-56">
                <img src={e.image} alt="card-image" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {e.title}
                </Typography>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
