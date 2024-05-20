import React from "react";
import { Card } from "flowbite-react";
import { IoIosArrowForward } from "react-icons/io";
import { GenderData } from "../../../../Component/Card/Data";

export default function SopByGenderCard() {
  return (
    <div>
      <div className="mt-[2rem] mb-[4rem] px-20 flex gap-4">
        {GenderData.map((item,index)=>(
      <span className="w-[80%]" key={index}>
      <Card
        className=" hover:shadow-lg hover:shadow-[#E1CCD1] rounded-1 [&>img]:rounded-1"
        imgSrc={item.img}

      >
        <span className="flex justify-between">
          <h5
            className="font-semibold text-xl"
            style={{ color: "#832729" }}
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
