import React from "react";
import Images1 from "../../Images/Bag1.webp";
import Images2 from "../../Images/Bag2.webp";
import Images3 from "../../Images/Bag3.webp";
import Images4 from "../../Images/Bag4.webp";
import ImagesHover1 from "../../Images/BagHover1.webp";

export default function Card() {
  return (
    <>
      <div>
        <div className="pt-5 text-center text-2xl font-bold">
          <h1>OUR COLLECTIONS</h1>
        </div>
        <div className="flex gap-5 justify-center items-center pt-10">
          <div>
            <img
              src={Images1}
              alt=""
            />
            <img
              src={ImagesHover1}
              alt=""
              className=""
            />
            <div className="pt-4">
              <p className="text-center">Fitpack Neo</p>
              <p className="text-red-600 text-center">
                Rs. 1,499.00
                <span className="pl-2 line-through text-black">
                  Rs. 2,899.00
                </span>
              </p>
            </div>
          </div>

          <div>
            <img
              src={Images2}
              alt=""
            />
            <div className="pt-4">
              <p className="text-center">Accelerator</p>
              <p className="text-red-600 text-center">
                Rs. 1,299.00
                <span className="pl-2 line-through text-black">
                  Rs. 2,399.00
                </span>
              </p>
            </div>
          </div>
          <div>
            <img
              src={Images3}
              alt=""
            />
            <div className="pt-4">
              <p className="text-center">Amigo Backpack</p>
              <p className="text-red-600 text-center">
                Rs. 1,781.00
                <span className="pl-2 line-through text-black">
                  Rs. 3,299.00
                </span>
              </p>
            </div>
          </div>
          <div>
            <img
              src={Images4}
              alt=""
            />
            <div className="pt-4">
              <p className="text-center">Amigo Backpack</p>
              <p className="text-red-600 text-center">
                Rs. 1,781.00
                <span className="pl-2 line-through text-black">
                  Rs. 3,299.00
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
