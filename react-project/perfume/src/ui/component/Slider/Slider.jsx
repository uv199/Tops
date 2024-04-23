import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import default carousel styles
import data from "../../pages/Home/data.json";
import Cardcom from "../Card/Cardcom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7, // Adjusted items to display 7 items
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = ({ data }) => {
  return (
    <div className="w-[1320px] mx-auto">
      <Carousel
        responsive={responsive}
        showDots={false} // Hide dots navigation
        arrows={true} // Show arrows navigation
        infinite={false} // Enable infinite loop
      >
        {data.map((item) => (
          <Cardcom key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
