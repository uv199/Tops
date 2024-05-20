import React from "react";
import HeaderCom from "./HeaderCom";
import Footer from "./Footer";
import BodyCom from "./BodyCom";
// import img from "./path to image"
// import img from "./path2 to image"

export default function Home() {
  return (
    <div>
      {/* <img src={img} alt="" srcset="" /> */}
      <HeaderCom />
      <BodyCom />
      <Footer />
    </div>
  );
}
