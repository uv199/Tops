import React from "react";
import { Card } from "flowbite-react";
import { IoIosArrowForward } from "react-icons/io";

export default function CollectionCard() {
  return (
    <div>
      <div className="mt-[2rem] mb-[4rem] px-20 flex gap-4">
        <span className="w-[80%]">
          <Card
            className=" hover:shadow-lg hover:shadow-[#E1CCD1] rounded-1 [&>img]:rounded-1"
            imgSrc="../../../../public/Collection/collection1.jpg"
          >
            <span className="flex justify-between">
              <h5
                className="font-semibold text-xl"
                style={{ color: "#832729" }}
              >
                String It
              </h5>
              <p className="font-normal text-gray-500 dark:text-gray-400 flex gap-4 items-center ">
                Explore <IoIosArrowForward className="text-xl" />
              </p>
            </span>
          </Card>
        </span>
        <span className="w-[80%]">
          <Card
            className="hover:shadow-lg hover:shadow-[#E1CCD1] rounded-1 [&>img]:rounded-1  "
            imgSrc="../../../../public/Collection/collection2.jpg"
          >
            <span className="flex justify-between">
              <h5
                className="font-semibold text-xl"
                style={{ color: "#832729" }}
              >
                The Italian Connection
              </h5>
              <p className="font-normal text-gray-500 dark:text-gray-400 flex gap-4 items-center ">
                Explore <IoIosArrowForward className="text-xl" />
              </p>
            </span>
          </Card>
        </span>
        <span className="w-[80%] ">
          <Card
            className=" hover:shadow-lg hover:shadow-[#E1CCD1] rounded-1 [&>img]:rounded-1  [&>img]:h-[300px] "
            imgSrc="../../../../public/Collection/collection3.jpg"
          >
            <span className="flex justify-between">
              <h5
                className="font-semibold text-xl"
                style={{ color: "#832729" }}
              >
                Engagement Rings
              </h5>
              <p className="font-normal text-gray-500 dark:text-gray-400 flex gap-4 items-center ">
                Explore <IoIosArrowForward className="text-xl" />
              </p>
            </span>
          </Card>
        </span>
      </div>
    </div>
  );
}
