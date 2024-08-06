import React from "react";
import Carousel from "../../component/Carousel/Carousel";
import BestSeller from "./BestSeller";
import TopCategories from "./TopCategories";
import VideoPage from "./VideoPage";
import NewArrivals from "./NewArrivals";
import AboutUs from "./AboutUs";
import RiskFreeShopping from "./RiskFreeShopping";
import Spot from "./Spot";

export default function Home() {
  return (
    <div>
      <Carousel />
      <BestSeller />
      <TopCategories />
      <VideoPage />
      <NewArrivals />
      <AboutUs />
      {/* <Geeks/> */}
      <RiskFreeShopping />
      <Spot />
    </div>
  );
}
