import React from "react";
import { ShoppingCart } from "lucide-react";
export default function MapKeyCom() {
  let array = [
    "wake up at 6 o'clock",
    "go for bath",
    "take breakFast",
    "ready for job",
    "go to job",
    "take lectures",
    "leave a office at 3:30",
    "come to home back",
    "do chill and watch movie",
  ];

  return (
    <div>
      <ShoppingCart />
      <h1>MY DAILY RUTINE </h1>

      <hr />
      <ul>
        {array?.map((e, i) => {
          return (
            <div key={i}>
              <li className="bg-gray-300">
                {i + 1}. {e}
              </li>
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
