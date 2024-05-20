import React from "react";
import { Card } from "flowbite-react";
import { IoIosArrowForward } from "react-icons/io";
import { CategoryData } from "../../../../Component/Card/Data";

export default function CategoryCard() {
  return (
    <div>
      <div className="grid grid-rows-2 grid-cols-6 gap-4 px-20 mb-[4rem]">
        {CategoryData?.map((item,index) => (
          <span key={index}>
            <Card
              className="max-w-sm hover:shadow-lg hover:shadow-[#E1CCD1] rounded-0 shadow-none  "
              imgSrc={item.img}
            >
              <span className="flex  flex-col justify-center gap-3">
                <h5
                  className="font-semibold"
                  style={{ color: "#832729", fontSize: "15px" }}
                >
                  {item.title} 
                </h5>
                <p className="font-normal text-gray-500 dark:text-gray-400 flex gap-4 items-center ">
                  Explore <IoIosArrowForward className="text-xl" />
                </p>
              </span>
            </Card>
          </span>
        ))}


      </div>
    </div>
  );
}
