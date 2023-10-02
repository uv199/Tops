import React from "react";
import CardDiv from "./CardDiv";

const data = [
  {
    img: "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Perfume-1",
    price: "500",
  },
  {
    img: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Perfume-2",
    price: "1000",
  },
];

export default function ProjectProps() {
  return (
    <>
      <h1>Data</h1>
      {data?.map?.((e, i) => {
        return <CardDiv key={i} data={e} />;
      })}

      {/* <CardDiv
        img={
          "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        title={"Perfume-1"}
        price={500}
      />
      <CardDiv
        img={
          "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        title={"Perfume-2"}
        price={1000}
      /> */}
    </>
  );
}
