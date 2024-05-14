import React from "react";
import Arrivals from "./Arrivals";
import Bestseller from "./Bestseller";
import PopularCat from "./PopularCat";
import Slider from "../../component/Slider/Slider";
import data from "./data.json";
import data3 from "./datathree.json";
import data2 from "./datatwo.json";

export default function Home() {
  return (
    <div className="px-4" >
      <Arrivals />
      <div>
        <Slider data={data} />
      </div>
      <div>
        <Bestseller />
      </div>
      <Slider data={data2} />
      <PopularCat />
      <Slider data={data3} />
    </div>
  );
}
