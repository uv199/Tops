import { Button } from "@material-tailwind/react";
import { LogOut, ShoppingCart, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Profile() {
  let [cookies, setCookies, removeCookie] = useCookies(["token", "user"]);
  let [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(cookies?.user);
  }, []);
  const logoutHadler = () => {
    console.log("---->");
    removeCookie("token");
    removeCookie("user");
  };
  return (
    <div className="p-14">
      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <Button className="btn flex items-center gap-[10px]">
              <User />
              Profile
            </Button>
          </li>
          <li>
            <Button className="btn flex items-center gap-[10px]">
              <ShoppingCart />
              Orders
            </Button>
          </li>
          <li>
            <Button
              className="btn flex items-center gap-[10px]"
              onClick={() => logoutHadler()}
            >
              <LogOut />
              SignOut
            </Button>
          </li>
        </ul>
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          {["name", "email", "number"].map((e,i) => {
            return (
              <h1 key={i}>
                <span className="font-semibold text-black capitalize">{e}</span>:{" "}
                {console.log(userData)}
                {userData?.[e]}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}
