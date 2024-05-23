import React from "react";

export default function ProductForm() {
  return <div>ProductForm</div>;
}

let data = {
  gender: "kids", // radio kids - lable unisex
  title: "Aqua", // text
  description: "Ut quod dolorem enim .", // text
  price: 3155, // number
  discountPercentage: 9, // number -max 100 
  availableStock: 17, // number
  brand: "diwaliSale", // text
  category: ["aqua", "light"], // select - multi
  mainCategorie: "perfume", // select - single
  size: ["100ml", "50ml", "150ml", "10ml"], // checkBox 10,50,100,150,200
  thumbnail:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11785242/2022/8/1/2f3f908a-87be-4aa5-a32e-de8639d21dd11659356765426SKINNbyTitanWomenCelesteFragrance-50ML2.jpg", // text
};
