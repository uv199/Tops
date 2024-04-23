import React from "react";

export default function Arrivals() {
  return (
    <div class="py-10 flex justify-between items-center ">
      <i class="text-5xl title font-italic">New Arrivals </i>
      <a
        href="#"
        class="flex items-center inherit-color text-black hover:text-blue-500"
      >
        Discover all{" "}
        <img class="ms-1" width="18px" src="/public/arrow-right.svg" alt="" />{" "}
      </a>
    </div>
  );
}
