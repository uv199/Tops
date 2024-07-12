import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { Heart } from "lucide-react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  let [product, setProduct] = useState({});

  const paramsData = useParams();

  useEffect(() => {
    (async function fetchData() {
      try {
        let { data } = await axios.get(
          `https://fakestoreapi.com/products/${paramsData.id}`
        );
        setProduct(data);
      } catch (error) {
        console.log("-----------  error----------->", error);
      }
    })();
  }, []);

  return (
    <section className="py-16 px-8">
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
        <img src={product.image} alt="pink blazer" className="h-[36rem]" />
        <div>
          <Typography className="mb-4" variant="h3">
            {product.title}
          </Typography>
          <Typography variant="h5">${product.price}</Typography>
          <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
            {product.description}
          </Typography>
          <div className="my-8 flex items-center gap-2">
            {product?.rating?.rate && (
              <Rating
                value={Math?.round(product?.rating?.rate || 0)}
                className="text-amber-500"
              />
            )}
            <Typography className="!text-sm font-bold !text-gray-700">
              {product?.rating?.rate}/5 ({product?.rating?.count} reviews)
            </Typography>
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
