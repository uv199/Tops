import React, { useEffect, useState } from 'react';
import logo from "../../../public/ajmallogo.svg";
import { Navbar, NavbarBrand, NavbarCollapse } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Heart, LogIn, Search, ShoppingCart, User, UserCheck, UserMinus } from "react-feather";
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";



export default function Header() {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // const [cookie, setCookie] = useCookies(["token"]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    let [cookie, setCookie] = useCookies(["token", "user"]);
    console.log("-----------  cookie----------->", cookie?.user?.userType);

    console.log("Cookie:", cookie);
    console.log("User Type:", cookie?.user?.userType);

    // useEffect(() => {
    //     console.log("Cookies:", cookie);
    //     if (cookie.user) {
    //         console.log("User Type:", cookie?.user?.userType);
    //     } else {
    //         console.log("User is not logged in or user object is missing.");
    //     }
    // }, [cookie]);


    return (
        <div className="relative">
            {/* Page content */}
            <Navbar fluid rounded className="m-0 py-4 border-b">
                <NavbarBrand className="pl-10">
                    <Link to="/">
                        <img src={logo} className="mr-3 h-[70px]" alt="Flowbite React Logo" />
                    </Link>
                </NavbarBrand>

                <NavbarCollapse>
                    <div className="w-[500px] ">
                        <div className="flex justify-center focus-within:border-gray-400 text-gray-400 border-2 border-gray-300 items-center p-0 m-0 bg-white rounded-3xl px-3 overflow-hidden mb-3 ">
                            <input
                                type="text"
                                placeholder="search your fragrance here..."
                                className="placeholder-gray-300 focus:ring-0 border-none w-full p-1 rounded-l-3xl"
                            />
                            <Search className="text-gray-400 rounded-r-3xl" />
                        </div>
                        <div className="flex justify-between [&_*]:font-bold [&_*]:text-gray-500 ">

                            {cookie?.user?.userType === "admin" ? (
                                <div className='flex gap-40 '>
                                    <NavLink to="/admin-product">PRODUCT</NavLink>
                                    <NavLink to="/admin-user">USER</NavLink>
                                    <NavLink to="/admin-order">ORDER</NavLink>
                                </div>
                            ) : (
                                <>
                                    <NavLink to="/">HOME</NavLink>
                                    <NavLink to="/shop">SHOP</NavLink>
                                    <NavLink to="/Ourstore">OUR STORES</NavLink>
                                    <NavLink to="/ajmalstudio">AJMAL STUDIO</NavLink>
                                    <NavLink to="#">ABOUT</NavLink>

                                </>
                            )}

                        </div>

                    </div>
                </NavbarCollapse >
                <div className="flex items-center [&_*]:mr-5 text-gray-400">
                    {cookie?.token ? (

                        <img src="../../../public/profile.jpg" className='size-[30px]'
                            onClick={() => navigate("/profile")} role='button' />

                    ) : (
                        <LogIn onClick={() => navigate("/login")} />
                    )}

                    {cookie?.user?.userType !== "admin" && (
                        <>
                            <ShoppingCart role='button' />
                            <Heart role='button' onClick={toggleSidebar} />
                        </>
                    )}
                </div>
            </Navbar >

            {/* Sidebar */}

            <div div className={`fixed inset-y-0 right-0 w-80 bg-slate-100 text-balck transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`
            } style={{ zIndex: 5555, top: 119 }}>
                <div className="p-4 flex justify-center items-center gap-3 ">
                    <Heart />
                    <h2 className='text-[23px] title'>My Wishlist</h2>
                    <Heart />
                </div>

                <hr />

                <div className="overflow-y-auto max-h-96">
                    a
                </div>
            </div >
        </div >
    );
}
