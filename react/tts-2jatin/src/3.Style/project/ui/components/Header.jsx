import { CircleUser, Heart, Search, ShoppingCart } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="w-full">
      <div className="bg-red-200 w-full">Header</div>
      <div className="flex justify-between py-4 px-5 shadow-md border-b border-gray-400">
        <h1 className="text-2xl font-[800] text-red-300">SmartGadgets</h1>
        <ul className="flex gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Shop</li>
        </ul>
        <div className="flex gap-3">
          <ShoppingCart />
          <Heart />
          <CircleUser />
          <Search />
        </div>
      </div>
    </div>
  );
}
