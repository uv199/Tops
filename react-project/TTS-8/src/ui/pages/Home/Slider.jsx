import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const images = [
    "../../../../public/img_1.webp",
    "../../../../public/img_2.webp",
    "../../../../public/img_3.webp",
    "../../../../public/img_4.webp",
  ];

  return (
    <Zoom
      autoplay={true}
      infinite={true}
      arrows={false}
      scale={1.4}
      indicators={true}
    >
      {images.map((each, index) => (
        <div key={index} style={{ height: "90vh", width: "100%" }}>
          <img
            style={{ objectFit: "cover", width: "100%" }}
            alt="Slide Image"
            src={each}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default Slider;
