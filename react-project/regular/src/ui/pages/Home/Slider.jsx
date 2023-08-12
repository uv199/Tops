import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "./slider.css";

let data = [
  {
    altText: "ADIDAS",
    caption: "KIDS",
    key: 1,
    src: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",
  },
  {
    altText: "ADIDAS",
    caption: "WOMEN",
    key: 2,
    src: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg",
  },
  {
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
    src: "https://picsum.photos/id/678/1200/600",
  },
];
export default function Slider() {
  return (
    <>
      <div className="w-100" style={{ height: "200px" }}>
        <UncontrolledCarousel items={data} className="slide" />
      </div>
    </>
  );
}
