import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";



export default function Profile() {
    let [cookie, setCookie, removeCookie] = useCookies([]);


    const navigate = useNavigate();
    const logoutHandler = () => {
        removeCookie("token");
        removeCookie("user");
        navigate("/");
        window.scrollTo(0, 0);
    };



    return (
        <div className="ml-36 mr-36 mt-3">
            <h1 className="text-center mb-14 text-4xl font-semibold">ACCOUNT</h1>
            <h3 className="font-semibold   text-xl mb-9">ACCOUNT DETAILS</h3>
            <div>
                <ul>
                    <li className="py-3 border-b-2">
                        Name : {cookie?.user?.name || "User"}{" "}
                    </li>
                    <li className="py-3 border-b-2">Email : {cookie?.user?.email} </li>
                    <li className="py-3 border-b-2">
                        ADDRESS : {cookie?.user?.address?.[0]?.add}
                    </li>
                    <li className="py-3 border-b-2">COUNTRY: India</li>
                    <li className="py-3 border-b-2">
                        ZIP: {cookie?.user?.address?.[0]?.pincode}
                    </li>
                    <li className="py-3 mb-5 border-b-2">
                        PHONE: {cookie?.user?.number}
                    </li>
                </ul>
                <button
                    className="p-2 rounded-md border !border-red-600	bg-white text-red-600 hover:text-white hover:bg-red-600"
                    onClick={() => logoutHandler()}
                >
                    LOGOUT{" "}
                </button>
            </div>
        </div>
    );
}