import { Button, Input, option, Select } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
    password: "",
  });

  let [address, setAddress] = useState({
    pincode: "",
    city: "",
    state: "",
    add: "",
  });
  const navigate = useNavigate();

  const submitHandler = async () => {
    // console.log("user", user);
    // console.log("address", address);

    let mainData = {
      ...user,
      address: [address],
    };

    try {
      const response = await axios.post(
        "http://localhost:9999/user/signup",
        mainData
      );
      console.log("-----------response----------->", response.data);
      navigate("/user");
    } catch (error) {
      alert("somthing went wrong");
    }
  };

  return (
    <div className=" bg-red-500 flex justify-center">
      <form className="flex flex-col gap-4 m-auto">
        <div>
          <label htmlFor="">Name</label>
          <Input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <label htmlFor="">Email</label>
          <Input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label htmlFor="">Password</label>
          <Input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <label htmlFor="">Confirm Password</label>
          <Input />
          <label htmlFor="">Number</label>
          <Input
            value={user.number}
            onChange={(e) => setUser({ ...user, number: e.target.value })}
          />
          <label htmlFor="">Age</label>
          <Input
            value={user.age}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
          />
          <label htmlFor="">Pincode</label>
          <Input
            value={address.pincode}
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
          />
          <label htmlFor="">City</label>
          <select
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
          >
            <option>Select</option>
            <option>Surat</option>
            <option>Navsari</option>
            <option>Valsad</option>
          </select>
          <br />
          <br />
          <label htmlFor="">State</label>
          <select
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
          >
            <option>Select</option>
            <option>Gujarat</option>
            <option>Maharastra</option>
            <option>Goa</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Add</label>
          <Input
            value={address.add}
            onChange={(e) => setAddress({ ...address, add: e.target.value })}
          />
          <Button onClick={() => submitHandler()}>Submit</Button>
        </div>
      </form>
    </div>
  );
}
