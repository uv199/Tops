import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { Heart } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let [productData, setProductData] = useState([]);

  const data = useParams();
  console.log("-----------  data----------->", data);

  useEffect(() => {
    async function fetchData(params) {
      let response = await axios.get(
        `https://fakestoreapi.com/products/${data.id}`
      );
      setProductData(response.data);
    }
    fetchData();
  }, []);

  return (
    <section className="py-16 px-8">
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
        <img src={productData.image} alt="pink blazer" className="h-[36rem]" />
        <div>
          <Typography className="mb-4" variant="h3">
            {productData.title}
          </Typography>
          <Typography variant="h5">${productData.price}</Typography>
          <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
            {productData.description}
          </Typography>
          <div className="my-8 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
              {productData?.rating?.rate}/5 ({productData?.rating?.count}{" "}
              reviews)
            </Typography>
          </div>
          <Typography color="blue-gray" variant="h6">
            Color
          </Typography>
          <div className="my-8 mt-3 flex items-center gap-2">
            <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
          </div>
          <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
            <Button color="gray" className="w-52">
              Add to Cart
            </Button>
            <IconButton color="gray" variant="text" className="shrink-0">
              <Heart className="h-6 w-6" />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}
