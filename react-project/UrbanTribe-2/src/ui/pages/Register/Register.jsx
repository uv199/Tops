import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  let [cookies, setCookie, removeCookie] = useCookies([]);
  let [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  let [userAddress, setUserAddress] = useState({
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });
  const submitHandler = async () => {
    let mainData = {
      ...user,
      address: [userAddress],
    };
    try {
      let response = await axios.post(
        "http://localhost:9999/user/signup",
        mainData
      );
      setCookie("token", response.data.token);
      setCookie("user", response.data.data);
      navigate("/");
    } catch (error) {
      alert("something is wrong please try again after some time");
    }
  };

  return (
    <>
      <div className="text-center py-8 flex flex-col items-center ">
        <h1 className="font-medium text-3xl mb-12">CREATE AN ACCOUNT</h1>
        <div className="py-9 text-sm flex flex-col w-[50%] px-8 items-start border">
          <h3 className="font-medium mb-5 text-xl">PERSONAL INFORMATION</h3>
          <label htmlFor="name" className=" w-[100%] flex justify-between">
            <span>Name*</span>
            <span className="text-gray-400">*Required Fields</span>*
          </label>
          <input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type="text"
            className="rounded-md mb-3 mt-2 w-full border-none h-8 pl-2 bg-gray-200 focus:!ring-red-600 focus:ring-1"
            placeholder="Enter your name"
            id="name"
          />
          <label htmlFor="email">Email*</label>
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="rounded-md mb-3 mt-2 w-full border-none h-8 pl-2 bg-gray-200 focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your email"
            id="email"
          />
          <label htmlFor="number">Number*</label>
          <input
            value={user.number}
            onChange={(e) => setUser({ ...user, number: e.target.value })}
            className="rounded-md mb-3 mt-2 w-full border-none h-8 pl-2 bg-gray-200 focus:!ring-red-600 focus:ring-1"
            type="number"
            placeholder="Enter your number"
            id="number"
          />
          <label htmlFor="age">Age*</label>
          <input
            value={user.age}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
            className="rounded-md mb-3 mt-2 w-full border-none h-8 pl-2 bg-gray-200 focus:!ring-red-600 focus:ring-1"
            type="number"
            placeholder="Enter your age"
            id="age"
          />
          <label className="mt-3">Gender*</label>
          <div className="flex gap-4 mb-2 mt-1">
            <div>
              <input type="radio" className="focus:ring-0 mr-2 " />
              <label htmlFor="">Male*</label>
            </div>
            <div>
              <input type="radio" className="focus:ring-0 mr-2 " />
              <label htmlFor="">Female*</label>
            </div>
          </div>
          <label htmlFor="add">Address-1*</label>
          <input
            value={userAddress.address}
            onChange={(e) =>
              setUserAddress({ ...userAddress, address: e.target.value })
            }
            className="rounded-md mb-3 mt-2 w-full border-none h-8 pl-2 bg-gray-200 focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your add"
            id="add"
          />
          <label htmlFor="city">City*</label>
          <input
            value={userAddress.city}
            onChange={(e) =>
              setUserAddress({ ...userAddress, city: e.target.value })
            }
            className="rounded-md mb-3 mt-2 w-full border-none h-8 pl-2 bg-gray-200 focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your city"
            id="city"
          />
          <label htmlFor="state">State*</label>
          <input
            value={userAddress.state}
            onChange={(e) =>
              setUserAddress({ ...userAddress, state: e.target.value })
            }
            className="rounded-md mb-3 mt-2 w-full border-none h-8 pl-2 bg-gray-200 focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your state"
            id="state"
          />
          <label htmlFor="pincode">Pincode*</label>
          <input
            value={userAddress.pinCode}
            onChange={(e) =>
              setUserAddress({ ...userAddress, pinCode: e.target.value })
            }
            className="rounded-md mb-3 mt-2 w-full border-none h-8 pl-2 bg-gray-200 focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your pincode"
            id="pincode"
          />
          <label htmlFor="password">Password*</label>
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="rounded-md mb-3 mt-2 w-full border-none h-8 pl-2 bg-gray-200 focus:!ring-red-600 focus:ring-1"
            type="password"
            placeholder="Enter your password"
            id="password"
          />
          <label htmlFor="ConPassword">Confirm Password*</label>
          <input
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            className="rounded-md mb-3 mt-2 w-full border-none h-8 pl-2 bg-gray-200 focus:!ring-red-600 focus:ring-1"
            type="password"
            placeholder="Enter your confirm password"
            id="ConPassword"
          />
          <div>
            <button
              onClick={() => submitHandler()}
              className="mt-4 ring-2 ring-red-600 px-6 py-2 rou rounded-md text-red-600 hover:bg-red-600 hover:text-white"
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

let data = {
  name: "mr. gray",
  userType: "customer",
  email: "gray@gmail.com",
  number: "7895461230",
  password: "$2b$12$XjY0awULd6KWNX1aQ3fKGeEv6I2nDbTyeKYlVnY5ZAq.Qho5Y/d8O",
  age: 23,
  address: [
    {
      add: "01",
      city: "city name",
      state: "state name",
      pinCode: "city name",
    },
  ],
};
