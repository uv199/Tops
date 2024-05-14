import React from "react";
import { Card } from "flowbite-react";
import { IoIosArrowForward } from "react-icons/io";

export default function CollectionCard({ data = [1, 2, 3] }) {
  return (
    <div>
      <div className="mt-[2rem] mb-[4rem] px-20 flex gap-4">
        {data?.map((e, i) => {
          return (
            <span className="w-[80%]" key={i}>
              <Card
                className=" hover:shadow-lg hover:shadow-[#E1CCD1] rounded-1 [&>img]:rounded-1"
                imgSrc="../../../../public/Gender/Men.jpg"
              >
                <span className="flex justify-between">
                  <h5
                    className="font-semibold text-xl"
                    style={{ color: "#832729" }}
                  >
                    Men
                  </h5>
                  <p className="font-normal text-gray-500 dark:text-gray-400 flex gap-4 items-center ">
                    Explore <IoIosArrowForward className="text-xl" />
                  </p>
                </span>
              </Card>
            </span>
          );
        })}
      </div>
    </div>
  );
}
