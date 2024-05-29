import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instanceApi } from "../Api/axiosconfig";

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

export default function Reg() {
    let [user, setUser] = useState(initialUser);
    let [address, setAddress] = useState(initialAddress);
    let [errors, setErrors] = useState({});
    const [cookie, setCookie] = useCookies(["token", "user"]);

    const navigate = useNavigate();

    const validateForm = () => {
        let tempErrors = {};
        const nameFormat = /^[a-zA-Z ]{2,30}$/;
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const addressFormat = /^[a-zA-Z0-9\s,'-]{15,}$/;
        const numberFormat = /^[0-9]{10}$/;
        const ageFormat = /^[0-9]{1,2}$/;
        const pinCodeFormat = /^[0-9]{6}$/;

        if (!nameFormat.test(user.name)) {
            tempErrors.name = "Invalid name, Only alphabets allowed.";
        }

        if (!mailFormat.test(user.email)) {
            tempErrors.email = "Invalid email address.";
        }

        if (!numberFormat.test(user.number)) {
            tempErrors.number = "Invalid number. Must be a 10 digit number.";
        }

        if (!ageFormat.test(user.age)) {
            tempErrors.age = "Must be a number between 1 and 99.";
        }

        if (!user.gender) {
            tempErrors.gender = "Please select a gender";
        }

        if (!address.add || !addressFormat.test(address.add)) {
            tempErrors.add = "Address must contain at least 15 characters and can include alphanumeric characters, spaces, commas, apostrophes, and hyphens.";
        }

        if (!address.city) {
            tempErrors.city = "Enter your city name.";
        }

        if (!address.state) {
            tempErrors.state = "State is required.";
        }

        if (!pinCodeFormat.test(address.pinCode)) {
            tempErrors.pinCode = "Invalid pin code. Must be a 6 digit number.";
        }

        if (user.password !== user.conPassword) {
            tempErrors.password = "Passwords do not match.";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const registerHandler = async () => {
        if (validateForm()) {
            toast.success("Registration successful!");
            navigate("/");
        } else {
            let mainData = {
                ...user,
                address: [address],
            };
            try {
                let data = await instanceApi.post("/user/signup", mainData);
                console.log("---->", data.data.data);
                console.log("---->", data.data.token);
                setCookie("user", data.data.data);
                setCookie("token", data.data.token);
                navigate("/");
            } catch (error) {
                console.log("errror", error);
                toast.error("Somthing went wrong");
            }
        };
    }

    const handleGenderChange = (e) => {
        setUser({ ...user, gender: e.target.value });
    };

    return (
        <div className="text-center py-8 flex flex-col items-center ">
            <h1 className="font-medium text-3xl mb-12">CREATE AN ACCOUNT</h1>
            <div className="py-9 text-sm flex flex-col w-[50%] px-8 items-start border">
                <h3 className="font-medium mb-5 text-xl">PERSONAL INFORMATION</h3>
                <label htmlFor="name" className=" w-[100%] flex justify-between">
                    <span>Name*</span>{" "}
                    <span className="text-gray-400">*Required Fields</span>
                </label>
                <input
                    type="text"
                    className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                    placeholder="Enter your name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                {errors.name && <span className="text-red-600">{errors.name}</span>}
                <label htmlFor="email">Email*</label>
                <input
                    className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                    type="text"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Enter your email"
                    id="email"
                />
                {errors.email && <span className="text-red-600">{errors.email}</span>}
                <label htmlFor="number">Number*</label>
                <input
                    className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                    type="text"
                    onChange={(e) => setUser({ ...user, number: e.target.value })}
                    placeholder="Enter your number"
                    maxLength={10}
                    id="number"
                />
                {errors.number && <span className="text-red-600">{errors.number}</span>}
                <label htmlFor="age">Age*</label>
                <input
                    className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                    type="text"
                    onChange={(e) => setUser({ ...user, age: e.target.value })}
                    placeholder="Enter your age"
                    maxLength={2}
                    id="age"
                />
                {errors.age && <span className="text-red-600">{errors.age}</span>}
                <label className="mt-3">Gender*</label>
                <div className="flex gap-4 mb-2 mt-1">
                    <div>
                        <input
                            type="radio"
                            value="male"
                            checked={user.gender === "male"}
                            onChange={handleGenderChange}
                            className="focus:ring-0 mr-2 "
                        />
                        <label>Male</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            value="female"
                            checked={user.gender === "female"}
                            onChange={handleGenderChange}
                            className="focus:ring-0 mr-2 "
                        />
                        <label>Female</label>
                    </div>
                    {errors.gender && <span className="text-red-600">{errors.gender}</span>}
                </div>
                <label htmlFor="add">Address-1*</label>
                <input
                    className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                    type="text"
                    value={address.add} // Ensure the value is correctly set
                    onChange={(e) => setAddress({ ...address, add: e.target.value })}
                    placeholder="Enter your address"
                    id="add"
                />
                <label htmlFor="city">City*</label>
                <input
                    className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                    type="text"
                    value={address.city} // Ensure the value is correctly set
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    placeholder="Enter your city"
                    id="city"
                />
                <label htmlFor="state">State*</label>
                <input
                    className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                    type="text"
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    placeholder="Enter your state"
                    id="state"
                />
                <label htmlFor="pincode">Pincode*</label>
                <input
                    className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                    type="text"
                    onChange={(e) => setAddress({ ...address, pinCode: e.target.value })}
                    placeholder="Enter your pincode"
                    id="pincode"
                />
                {errors.pinCode && <span className="text-red-600">{errors.pinCode}</span>}
                <label htmlFor="password">Password*</label>
                <input
                    className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                    type="password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Enter your password"
                    id="password"
                />
                <label htmlFor="ConPassword">Confirm Password*</label>
                <input
                    className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                    type="password"
                    onChange={(e) => setUser({ ...user, conPassword: e.target.value })}
                    placeholder="Enter your confirm password"
                    id="ConPassword"
                />
                {errors.password && <span className="text-red-600">{errors.password}</span>}
                <div>
                    <button
                        onClick={registerHandler}
                        className="mt-4 ring-2 ring-red-600 px-6 py-2 rounded-md text-red-600 hover:bg-red-600 hover:text-white"
                    >
                        REGISTER
                    </button>
                </div>
            </div>
        </div>
    );
}
``
