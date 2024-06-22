import { Star } from "lucide-react";
import React, { useState } from "react";
import { Rating, RatingStar } from "flowbite-react";


const abc = [
  {
    img: "https://www.houseofem5.com/cdn/shop/files/WoodyOud_360x.jpg?v=1696180004",
    imghover: "https://www.houseofem5.com/cdn/shop/files/Nomade-Notes_4d0513ac-44b8-4261-b187-2c3ce6b1bdb4_360x.jpg?v=1703880477",
    title: "EM5™ Fireplace Unisex Perfume | Eau De Parfum ",
    dprice: "RS 499.00-999.00",
    cart: "Silect Option",
    

       
  },
  {
    img: "https://www.houseofem5.com/cdn/shop/files/WoodyOud_360x.jpg?v=1696180004",
     imghover: "https://www.houseofem5.com/cdn/shop/files/WoodyOud-Notes_360x.jpg?v=1696180007",
    title: "EM5™ Afgano Perfume Spray | Eau De Parfum for Men |",
    price: "Rs 1499",
    dprice: "RS 499.00-999.00",
    cart: "Add to cart",
    
  },
  {
    img: "https://www.houseofem5.com/cdn/shop/files/Afgano_360x.jpg?v=1693913981",
     imghover: "https://www.houseofem5.com/cdn/shop/files/Nomade-Notes_4d0513ac-44b8-4261-b187-2c3ce6b1bdb4_360x.jpg?v=1703880477",
    title: "EM5™ Neroli Unisex Perfume | Eau De Parfum Spray ",
    price: "Rs 1499",
    dprice: "RS 499.00-999.00",
    cart: "Add to cart",
  },
  {
    img: "https://www.houseofem5.com/cdn/shop/files/Afgano_360x.jpg?v=1693913981",
     imghover: "https://www.houseofem5.com/cdn/shop/files/Nomade-Notes_4d0513ac-44b8-4261-b187-2c3ce6b1bdb4_360x.jpg?v=1703880477",
    title: " EM5™ Aqua Perfume for Men | Eau De Parfum Spray |  ",
    price: "Rs 1499",
    dprice: "RS 499.00-999.00",
    cart: "Silect Option",
  },
  {
    img: "https://www.houseofem5.com/cdn/shop/files/WoodyOud_05d51f0f-ce13-4c6d-8f83-5b2c287cea54_360x.jpg?v=1718028653",
     imghover: "https://www.houseofem5.com/cdn/shop/files/WoodyOud-Box_445eb6d1-2bb9-4edf-ad2e-f1e1df4f83c2_360x.jpg?v=1718028653",
    title: " EM5™ Woody Oud | Solid Perfume for Men & Women | ",
    price: "Rs 1499",
    dprice: "RS 499.00-999.00",
    cart: "Add to cart",
  },
];

export default function Card2() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container-fluid d-flex gap-2 pb-[50px]">
      {abc.map((e, i) => {
        return (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative"
          >
            <div className="h-[60%] relative">
              <img
                src={hoveredIndex === i && e.imghover ? e.imghover : e.img}
                alt=""
                className=""
              />
            </div>
            <div>
              <h5 className="mt-[80px]">{e?.title}</h5>
              <div>
                <Rating className="rating">
                <Rating.Star color=" gold"/>
                <Rating.Star color=" gold" />
                <Rating.Star color=" gold" />
                <Rating.Star color=" gold" />
                <Rating.Star color=" gold" />
                <p className="fs-6">(27)</p>
                </Rating>
              </div>
            </div>
            <div className="d-flex justify-around">
              <div className="text-danger fs-6 ">{e?.dprice}</div>
              <strike><div className="fs-6">{e?.price}</div></strike>
              

            </div>
            <div className="text-center mt-4">
              <button className="border-2 border-black px-4 py-2 bg-black text-white fs-6">
                {e?.cart}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
