import React from "react";
import { NavLink } from "react-router-dom";

export default function BottomHeader() {
  return (
    <div className=" d-flex justify-content-centerflex-column align-items-center">
      <div className="flex justify-center  [&_*]:px-3 px-5 py-3 ">
        <NavLink className="hover:font-semibold" to={"jewellery"}>ALL JEWELLERY</NavLink>
        <NavLink className="hover:font-semibold" to="jewellery">BRACELET</NavLink>
        <NavLink className="hover:font-semibold" to={"jewellery"}>DIAMOND</NavLink>
        <NavLink className="hover:font-semibold" to={"jewellery"}>EARRINGS</NavLink>
        <NavLink className="hover:font-semibold" to={"jewellery"}>RINGS</NavLink>
        <NavLink className="hover:font-semibold" to={"jewellery"}>NECKLACE</NavLink>
        <NavLink className="hover:font-semibold" to={"jewellery"}>MEN KADA</NavLink>
        <NavLink className="hover:font-semibold" to={"jewellery"}>GOLD CHAINS</NavLink>
        <NavLink className="hover:font-semibold" to={"jewellery"}>GIFTING</NavLink>
      </div>
    </div>
  );
}
