import { Rating } from "flowbite-react";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function QuickView() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="quickView flex gap-10  m-10">
      <div className="perfume-imgs">
        <div className="rowSliderimgs">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/EM5_Aqua_50ml_P_01_150x.png?v=1693588304"
            alt=""
            className=" h-[170px] w-[280px]"
          />
        </div>
        <div className="rowSliderimgs">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/EM5_Aqua_50ml_P_02.png?v=1693588306"
            alt=""
            className=" h-[170px] w-[280px]"
          />
        </div>
        <div className="rowSliderimgs">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/EM5_Aqua_50ml_P_03_150x.png?v=1693588305"
            className=" h-[170px] w-[280px]"
            alt=""
          />
        </div>
        <div className="rowSliderimgs">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/EM5_Afgano_50ml_P_5_6ef333b5-b7d9-427f-974a-7af45a7c9cba_150x.jpg?v=1710331596"
            className=" h-[170px] w-[280px]"
            alt=""
          />
        </div>
        <div className="rowSliderimgs">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/EM5_Afgano_50ml_P_4_93f105f8-b3e9-45a2-9fda-950a50400fd5_150x.jpg?v=1710331596"
            className=" h-[170px] w-[280px]"
            alt=""
          />
        </div>
        <div className="rowSliderimgs">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Aqua-elements_150x.jpg?v=1710331596"
            className=" h-[170px] w-[280px]"
            alt=""
          />
        </div>
        <div className="rowSliderimgs">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Aqua_150x.jpg?v=1710331596"
            className=" h-[170px] w-[280px]"
            alt=""
          />
        </div>
        <div className="rowSliderimgs">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Icon-RealTime_150x.jpg?v=1710848084"
            className=" h-[170px] w-[280px]"
            alt=""
          />
        </div>
        <div className="rowSliderimgs">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Aqua-USPs_150x.jpg?v=1710331614"
            className=" h-[170px] w-[280px]"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className=" bg-danger " style={{ border: "1px solid grey" }}>
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Icon_800x.jpg?v=1706770809"
            alt=""
            srcSet=""
            className="img-fluid h-[1000px] w-[1400px]"
          />
        </div>
      </div>
      <div className="em5_txt m-">
        <div>
          <p>
            EM5™ Icon Perfume for Men | Aromatic Citrus Fresh Spicy Fragrance
            Accords | Eau De Parfum Spray | Luxury Gift for Him | Sizes
            Available: 50 ml / 15 ml
          </p>
        </div>
        <div className=" flex gap-10 mt-8 align-items-center ">
          <div>
            <img
              src="https://www.houseofem5.com/cdn/shop/files/Aromatic_7c93887a-3eaa-475e-a343-dac2bbabc49c.png?v=1668772774"
              alt=""
              srcSet=""
              className=" h-[90px] w-[90px]"
            />
          </div>
          <div>
            <img
              src="https://www.houseofem5.com/cdn/shop/files/Citrus_86348a64-8fc1-48eb-9b6b-2fdf7432c28f.png?v=1668769423"
              alt=""
              srcSet=""
              className=" h-[90px] w-[90px]"
            />
          </div>
          <div>
            <img
              src="https://www.houseofem5.com/cdn/shop/files/Fresh_Spicy_0f6f89c3-1aa2-419d-b36b-605bd9dc9a60.png?v=1668772789"
              alt=""
              srcSet=""
              className=" h-[90px] w-[90px]"
            />
          </div>
          <div>
            <img
              src="https://www.houseofem5.com/cdn/shop/files/Men_1e11bebe-80a2-4d59-ab68-0355ef453574.png?v=1668772789"
              alt=""
              srcSet=""
              className=" h-[90px] w-[90px]"
            />
          </div>
        </div>
        <div>
          <div className="rating-p ">
            <div className="">
              <Rating className="">
                <Rating.Star color=" gold" />
                <Rating.Star color=" gold" />
                <Rating.Star color=" gold" />
                <Rating.Star color=" gold" />
                <Rating.Star color=" gold" />
              </Rating>
            </div>
            <div className="ratenum">
              <p>(27)</p>
            </div>
            <div className="verify-1">
              <p>Verified Purchase</p>
            </div>
          </div>
          <div className="price">
            <div>
              <h3>Rs.899.00</h3>
            </div>
            <div className="strike-1">
              <strike>Rs.1,499.00</strike>
            </div>
          </div>
          <div style={{ fontSize: "18px", marginTop: "15px" }}>
            <p>Net Weight: 260 g</p>
          </div>
        </div>
        <div
          style={{ fontSize: "19px", marginTop: "15px", fontWeight: "inherit" }}
        >
          <p>Size Spray (50 ml)</p>
        </div>
        <div className="count-btn">
          <div className="counter">
            <button className=" pb-10" onClick={handleDecrement}>
              -
            </button>
            <span>{count}</span>
            <button className=" pb-10" onClick={handleIncrement}>
              +
            </button>
          </div>
          <div className="addCart ">
            <button className=" h-[60px] w-[300px] bg rgb(27, 24, 24)">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="logos">
          <div>
            <img
              src="https://www.houseofem5.com/cdn/shop/files/Non-irritating.png?v=1665643873"
              alt=""
              srcSet=""
            />
          </div>
          <div>
            <img
              src="https://www.houseofem5.com/cdn/shop/files/100_Vegan.png?v=1665643872"
              alt=""
              srcSet=""
            />
          </div>
          <div>
            <img
              src="https://www.houseofem5.com/cdn/shop/files/Free_from_Phthalates.png?v=1665643872"
              alt=""
              srcSet=""
            />
          </div>
          <div>
            <img
              src="https://www.houseofem5.com/cdn/shop/files/Silicone_Free_b1c4f0cc-4f65-43e4-949c-56570d913cb1.png?v=1667224683"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.houseofem5.com/cdn/shop/files/Non-Carcinogenic.png?v=1665643873"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.houseofem5.com/cdn/shop/files/Paraben_Free_b5d519e4-73c6-48eb-b78b-a8a1a715490e.png?v=1667224670"
              alt=""
            />
          </div>
        </div>

        <div className="details">
          <p>
            <span>
              🍃
              <strong>Fragrance: </strong>
              Compare the Fragrance with Cool Water by Daviddoff.
            </span>
          </p>
          <p>
            <span>
              🍃
              <strong>Concentration: </strong>
              Eau De Parfum (EDP) with 20%-25% of Perfume Concentration.
            </span>
          </p>{" "}
          <p>
            <span>
              🍃
              <strong>Longevity & Lasting: </strong>
              1-2 hrs of strong projection, 4-6hrs of sillage and 5-10hrs around
              close to skin. The performance of any fragrance also depends on
              Perfume Notes, Skin Type, Weather and Temperature, and Exposure.
            </span>
          </p>{" "}
          <p>
            <span>
              🍃
              <strong>Scent Notes: </strong>
              Top notes are Sea water, Lavender, Mint, Green Notes, Rosemary,
              Calone and Coriander; Middle notes are Sandalwood, Neroli,
              Geranium and Jasmine; and Base notes includes Musk, Oakmoss,
              Tobacco and Cedar.
            </span>
          </p>{" "}
          <p>
            <span>
              🍃
              <strong>Occasion:</strong>
              Premium long lasting fragrance crafted with unique ingredients for
              day and night.
            </span>
          </p>
        </div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
            marginTop: "25px",
          }}
        >
          <p>Read More</p>
        </div>
      </div>
    </div>
  );
}
