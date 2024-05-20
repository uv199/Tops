import React from "react";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";

export default function BottomHeader() {
  const [cookies] = useCookies(["user"]);
  // "ring",
  //   "earrings",
  //   "menKada",
  //   "bracelet",
  //   "goldChain",
  //   "necklace",
  //   "gifting",
  //   "goldCoin",
  return (
    <div className=" d-flex justify-content-center gap-5  flex-column align-items-center">
      {cookies?.user?.userType !== "admin" ? (
        <div className="flex justify-center gap-4 px-5 py-3 ">
          <NavLink to={"/jewellery/all"} className="hover:font-semibold ">
            ALL JEWELLERY
          </NavLink>
          <NavLink to="/jewellery/ring" className="hover:font-semibold ">
            RING
          </NavLink>
          <NavLink to={"/jewellery/menKada"} className="hover:font-semibold ">
            MENS KADA
          </NavLink>
          <NavLink to={"/jewellery/earrings"} className="hover:font-semibold ">
            ERRINGS
          </NavLink>
          <NavLink to={"/jewellery/bracelet"} className="hover:font-semibold ">
            BRACELET
          </NavLink>
          <NavLink to={"/jewellery/goldChain"} className="hover:font-semibold ">
            GOLD CHAIN
          </NavLink>
          <NavLink to={"/jewellery/necklace"} className="hover:font-semibold ">
            NECKLACE
          </NavLink>
          <NavLink to={"/jewellery/gifting"} className="hover:font-semibold ">
            GIFTING
          </NavLink>
          <NavLink to={"/jewellery/goldCoin"} className="hover:font-semibold ">
            GOLD COIN
          </NavLink>
        </div>
      ) : (
        <div className="flex justify-center gap-4 px-5 py-3 ">
          <NavLink to="/Userlist" className="hover:font-semibold ">
            USER
          </NavLink>
          <NavLink to={"/product"} className="hover:font-semibold ">
            PRODUCT
          </NavLink>
          <NavLink to={"Gold"} className="hover:font-semibold ">
            ORDER
          </NavLink>
        </div>
      )}
    </div>
  );
}
