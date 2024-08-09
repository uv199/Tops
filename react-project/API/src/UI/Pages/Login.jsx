import { Button, Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    age: "",
  });

  let [address, setAddress] = useState({
    pinCode: "",
    city: "",
    state: "",
    add: "",
  });

  let [updateMode, setUpdateMode] = useState(false);
  const navigate = useNavigate();

  let data = useLocation();
  console.log("-----------  data----------->", data);
  useEffect(() => {
    if (data.state) {
      setAddress(data.state.address[0]);
      setUser(data.state);
      setUpdateMode(true);
    }
  }, []);

  const submitHandler = async () => {
    console.log(address);
    let mainData = {
      ...user,
      address: [address],
    };

    try {
      const response = await axios.post(
        "http://localhost:9999/user/signup",
        mainData
      );
      navigate("/profile");
    } catch (error) {
      alert("somthing went wrong");
    }
  };

  const updateHandler = async () => {
    console.log(address);
    let mainData = {
      ...user,
      address: [address],
    };

    try {
      const response = await axios.post(
        `http://localhost:9999/user/update/${data?.state?._id}`,
        mainData
      );
      navigate("/profile");
    } catch (error) {
      alert("somthing went wrong");
    }
  };

  return (
    <div>
      <form action="">
        {/* <div>
          <li>{user.name}</li>
          <li>{address.add}</li>
          <li>{address.city}</li>
          <li>{address.state}</li>
        </div> */}
        <div className="w-72 mt-5 m-auto border-2 border-black p-8 flex flex-col gap-5">
          <Input
            label="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <Input
            label="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            label="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Input label="Confirm Password" />
          <Input
            label="Number"
            value={user.number}
            onChange={(e) => setUser({ ...user, number: e.target.value })}
          />
          <Input
            label="Age"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
          />
          <Input
            label="Pincode"
            value={address.pinCode}
            onChange={(e) =>
              setAddress({ ...address, pinCode: e.target.value })
            }
          />
          <Input
            label="Address"
            value={address.add}
            onChange={(e) => setAddress({ ...address, add: e.target.value })}
          />
          <div>
            <Select
              label="Select City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e })}
            >
              <Option value="surat">Surat</Option>
              <Option value="ahmedabad">Ahmedabad</Option>
              <Option value="vadodara">Vadodara</Option>
            </Select>
          </div>
          <div>
            <Select
              label="Select State"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e })}
            >
              <Option value="gujarat">Gujarat</Option>
              <Option value="rajasthan">Rajasthan</Option>
              <Option value="maharastra">Maharastra</Option>
            </Select>
          </div>
          <div>
            {updateMode ? (
              <Button className="w-full" onClick={() => updateHandler()}>
                Update
              </Button>
            ) : (
              <Button className="w-full" onClick={() => submitHandler()}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </form>
      <Button onClick={() => navigate("/profile")}>Got to Profile Page</Button>
    </div>
  );
}
