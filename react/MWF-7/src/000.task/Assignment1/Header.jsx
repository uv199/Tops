import { Earth, Globe } from "lucide-react";
import React from "react";

export default function Header(props) {
  // console.log("props", props);
  return (
    <div>
      {/* <h1>{props.data}</h1> */}
      {/* ------------ top header------------ */}
      <div className="flex w-[100vw] justify-between text-[12px]">
        <div className="flex list-none gap-3">
          <li>About Us</li>
          <li>My Account</li>
          <li>Wish List</li>
          <li>Order Tracking</li>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        <div className="flex ">
          <p>contact us-1312323</p>
          <div className="flex h-[20px] justify-center items-center">
            <Globe size={15} />
            <select className="p-0 h-[20px] focus:!border-none ">
              <option>test1</option>
              <option>test2</option>
              <option>test3</option>
            </select>
          </div>
          <select>
            <option>test1</option>
            <option>test2</option>
            <option>test3</option>
          </select>
        </div>
      </div>
    </div>
  );
}
