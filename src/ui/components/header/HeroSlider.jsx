import React from "react";
import SimpleImageSlider from "react-simple-image-slider/dist/ImageSlider";

export default function HeroSlider() {
  const images = [
    { url: "./Images/photo-1557827983-012eb6ea8dc1.avif" },
    { url: "./Images/AdobeStock_615232130_Preview.jpeg" },
    { url: "./Images/AdobeStock_670750462_Preview.jpeg" },
  ];
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
      />
    </div>
  );
}
