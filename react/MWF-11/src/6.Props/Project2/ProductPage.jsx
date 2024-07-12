import React from "react";
import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";

export default function ProductPage() {
  return (
    <section className="py-16 px-8">
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
        <img
          src="https://www.material-tailwind.com/image/product-4.png"
          alt="pink blazer"
          className="h-[36rem]"
        />
        <div>
          <Typography className="mb-4" variant="h3">
            Premium Blazer
          </Typography>
          <Typography variant="h5">$1,490</Typography>
          <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others. We get back stabbed by friends. It becomes harder for us to
            give others a hand. We get our heart broken by people we love, even
            that we give them all we have. Then we lose family over time. What
            else could rust the heart more over time? Blackgold.
          </Typography>
          <div className="my-8 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
              4.0/5 (100 reviews)
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
           
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}
