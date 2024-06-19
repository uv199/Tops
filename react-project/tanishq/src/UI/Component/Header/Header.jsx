import React, { useEffect } from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import { fetchCartApi } from "../../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

export default function Header() {
  const [cookie] = useCookies(["token"]);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartApi(cookie.token));
  }, []);
  return (
    <div>
      <div>
        <TopHeader />
        <BottomHeader />
      </div>
    </div>
  );
}
