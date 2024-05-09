import React, { useState } from "react";
const initialUser = {
  name: "",
  email: "",
  number: "",
  password: "",
  conPassword: "",
  gender: "",
  age: "",
};
const initialAddress = {
  add: "",
  city: "",
  state: "",
  pinCode: "",
};
export default function SignUp() {
  let [user, setUser] = useState(initialUser);
  let [address, setAddress] = useState(initialAddress);

  const registerHandler = async () => {};

  return (
    <>
      <div className="text-center py-8 flex flex-col items-center ">
        <h1 className="font-medium text-3xl mb-12">CREATE AN ACCOUNT</h1>
        <div className="py-9 text-sm flex flex-col w-[50%] px-8 items-start border">
          <h3 className="font-medium mb-5 text-xl">PERSONAL INFORMATION</h3>
          <label htmlFor="name" className=" w-[100%] flex justify-between">
            <span>Name*</span>{" "}
            <span className="text-gray-400">*Required Fields</span>*
          </label>
          <input
            onChange={(e) => setUser({ ...user, name: e?.target?.value })}
            value={user.name}
            type="text"
            className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
            placeholder="Enter your name"
            id="name"
          />
          <label htmlFor="email">Email*</label>
          <input
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
            value={user.email}
            className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your email"
            id="email"
          />
          <label htmlFor="number">Number*</label>
          <input
            onChange={(e) => setUser({ ...user, number: e?.target?.value })}
            value={user.number}
            className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your number"
            id="number"
          />
          <label htmlFor="age">Age*</label>
          <input
            onChange={(e) => setUser({ ...user, age: e?.target?.value })}
            value={user.age}
            className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your age"
            id="age"
          />
          <label className="mt-3">Gender*</label>
          <div className="flex gap-4 mb-2 mt-1">
            <div>
              <input
                onChange={(e) => setUser({ ...user, gender: "male" })}
                type="radio"
                checked={user.gender === "male"}
                className="focus:ring-0 mr-2 "
              />
              <label htmlFor="">Male*</label>
            </div>
            <div>
              <input
                onChange={(e) => setUser({ ...user, gender: "female" })}
                type="radio"
                checked={user.gender === "female"}
                className="focus:ring-0 mr-2 "
              />
              <label htmlFor="">Female*</label>
            </div>
          </div>
          <label htmlFor="add">Address-1*</label>
          <input
            onChange={(e) => setAddress({ ...address, add: e?.target?.value })}
            value={address.add}
            className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your add"
            id="add"
          />
          <label htmlFor="city">City*</label>
          <input
            onChange={(e) => setAddress({ ...address, city: e?.target?.value })}
            value={address.city}
            className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your city"
            id="city"
          />
          <label htmlFor="state">State*</label>
          <input
            onChange={(e) =>
              setAddress({ ...address, state: e?.target?.value })
            }
            value={address.state}
            className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your state"
            id="state"
          />
          <label htmlFor="pincode">Pincode*</label>
          <input
            onChange={(e) =>
              setAddress({ ...address, pinCode: e?.target?.value })
            }
            value={address.pinCode}
            className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
            type="text"
            placeholder="Enter your pincode"
            id="pincode"
          />
          <label htmlFor="password">Password*</label>
          <input
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
            value={user.password}
            className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
            type="password"
            placeholder="Enter your password"
            id="password"
          />
          <label htmlFor="ConPassword">Confirm Password*</label>
          <input
            onChange={(e) =>
              setUser({ ...user, conPassword: e?.target?.value })
            }
            value={user.conPassword}
            className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
            type="password"
            placeholder="Enter your confirm password"
            id="ConPassword"
          />
          <div>
            <button
              onClick={() => registerHandler()}
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

let user = {
  name: "mr. gray",
  userType: "customer",
  email: "gray@gmail.com",
  number: "7895461230",
  password: "$2b$12$XjY0awULd6KWNX1aQ3fKGeEv6I2nDbTyeKYlVnY5ZAq.Qho5Y/d8O",
  age: 23,
};

let address = {
  add: "01",
  city: "city name",
  state: "state name",
  pinCode: "city name",
};

let finalObj = {
  ...user,
  address: [address],
};
