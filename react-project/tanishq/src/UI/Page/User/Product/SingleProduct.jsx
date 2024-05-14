import React, { useRef, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import "./SingleProduct.css";

export default function SingleProduct() {
  const imgRef = useRef(null);
  const previewRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomSize, setZoomSize] = useState({ width: 0, height: 0 });

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const preview = previewRef.current;

    let x = preview.offsetWidth / 100;
    let y = preview.offsetHeight / 100;

    preview.style.backgroundImage = `url(${img.src})`;
    preview.style.backgroundSize = `${img.width * x}px ${img.height * y}px`;

    let posX = e.nativeEvent.offsetX;
    let posY = e.nativeEvent.offsetY;

    preview.style.backgroundPosition = `-${posX * x}px -${posY * y}px`;
  };

  const handleMouseOut = () => {
    const preview = previewRef.current;
    preview.style.backgroundImage = "none";
    setIsZoomed(false);
  };

  const handleMouseEnter = () => {
    const img = imgRef.current;
    setZoomSize({ width: img.width, height: img.height });
    setIsZoomed(true);
  };

  return (
    <div className="container mx-auto p-8 bg-white">
      {/* Product Image and Details */}
      <div className="flex flex-wrap justify-between items-start mb-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
          {/* Breadcrumb */}
          <div
            className="w-full mb-2 text-gray-500"
            style={{ fontSize: "18px", marginBottom: "20px" }}
          >
            Home | Product |{" "}
            <span style={{ color: "#832729" }}>
              Leafy Radiance Diamond Drop Earrings
            </span>
          </div>
          <img
            ref={imgRef}
            src="/SingleProduct/Card1.jpg"
            alt="Leafy Radiance Diamond Drop Earrings"
            className="mx-auto w-full rounded-lg shadow-md border border-gray-200"
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
            onMouseEnter={handleMouseEnter}
          />
          <div 
            ref={previewRef}
            className="zoom-preview absolute top-12 border border-gray-200 left-full transform-translate-x-4 transform-translate-y-4"
            style={{ width: `${zoomSize.width}px`, height: `${zoomSize.height}px` }}
          ></div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 text-left pl-0 md:pl-8">
          <p className="text-gray-600">50D3B3DHUAGA022BD000013</p>
          <h1 className="text-3xl font-semibold mb-4">
            Leafy Radiance Diamond Drop Earrings
          </h1>

          {/* Star Ratings */}
          <div className="flex items-center mb-4">
            <StarIcon
              className="text-yellow-400 mr-1"
              style={{ color: "#832729" }}
            />
            <StarIcon
              className="text-yellow-400 mr-1"
              style={{ color: "#832729" }}
            />
            <StarIcon
              className="text-yellow-400 mr-1"
              style={{ color: "#832729" }}
            />
            <StarIcon
              className="text-yellow-400 mr-1"
              style={{ color: "#832729" }}
            />
            <StarIcon
              className="text-yellow-400"
              style={{ color: "#832729" }}
            />
            <p className="text-gray-600 ml-2">1 Review</p>
          </div>
          <hr style={{ borderColor: "#832729" }} />

          {/* Description */}
          <p className="text-gray-700 mb-1 leading-relaxed mt-4">
            Add a leafy radiance to your style with these drop earrings, crafted
            in 18 karat yellow gold, studded with diamonds.
          </p>

          {/* Price */}
          {!isZoomed && (
            <div className="flex items-center relative mb-4">
              <div className="ribbon absolute top-8 z-10">Flat 5% off</div>
              <p className="text mr-2 font-semibold">Offer Price</p>
              <p className="text-2xl font-semibold">₹38,005</p>
              <p className="text line-through ml-4 text-gray-500">
                Price ₹40,005
              </p>
            </div>
          )}

          <p className="text text-gray-500 mb-4 mt-10">
            Price Inclusive of all taxes. See full{" "}
            <span className="font-semibold" style={{ color: "#832729" }}>
              Price Breakup
            </span>
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center">
              <p className="text-gray-700 font-semibold">
                Gold Purity: 18 Karat
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 font-semibold">
                Diamond weight: 0.145 c
              </p>
            </div>
            <p className="text mb-4  text-gray-500">
              Not sure what to buy? Check out our{" "}
              <span className="font-semibold" style={{ color: "#832729" }}>
                Buying Guides
              </span>
            </p>
          </div>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="flex space-x-8 mb-8">
            <button className="bg-white py-3 px-12 border border-black  hover:text-black text-lg rounded-md font-semibold">
              Add to Cart
            </button>
            <button
              className="text-white py-3 px-12 border border-#832729 hover:bg-#631617 text-lg rounded-md font-semibold"
              style={{ backgroundColor: "#832729" }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
