import React from "react";
import Card from "./Card";

let data = [
  {
    img: "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600",
    productName: "shose",
    price: 1000,
    description: "shose",
  },
  {
    img: "https://images.pexels.com/photos/13316724/pexels-photo-13316724.jpeg?auto=compress&cs=tinysrgb&w=600",
    productName: "shirt",
    price: 2000,
    description: "checks shirt",
  },
  {
    img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600",
    productName: "t-shirt",
    price: 500,
    description: "plain t-shirt",
  },
];

export default function MapCom() {
  return (
    <>
      {data.map((e, i) => {
        return <Card cardData={e} key={i} />;
      })}
    </>
  );
}
/*

let arr= [a,b,c,d,e,f,g,h,i,j,]
arr.map((e)=>{
 print(e);
})
function print(props){
  console.log(props.e)
}
console.log(arr[1])
console.log(arr[2])
*/
