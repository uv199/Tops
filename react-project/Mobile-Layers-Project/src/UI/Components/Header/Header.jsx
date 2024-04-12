import React, { useLayoutEffect, useState } from 'react'
import logo from '../../../../public/logo.webp'
import "./Header.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { BoxSeam, Cart } from 'react-bootstrap-icons'
import { CircleUserRound, Moon } from 'lucide-react'
import { useSelector } from 'react-redux'
import OffCanvas from '../OffCanvas/OffCanvas'
import { NavItem } from 'reactstrap'

export default function Header() {
    const data = useSelector((state) => state.authSlice)
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOffCanves = () => {
        setIsOpen(!isOpen)
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    // customer site
    const menuItems = [
        {
            label: 'Mobile Skin',
            submenu: [
                { label: 'iPhone', brand: 'Apple' },
                { label: 'Samsung', brand: 'Samsung' },
                { label: 'OnePlus', brand: 'OnePlus' },
                { label: 'Pixel', brand: 'Google' },
                // Add more submenu items as needed
            ]
        },
        {
            label: 'Laptop Skin',
            submenu: [
                { label: 'Macbook', brand: 'Apple Laptop' },
                { label: 'Windows', brand: 'window Laptop' },
                // Add more submenu items as needed
            ]
        },
        {
            label: 'Skin Collection',
            submenu: [
                { label: 'Dark' },
                { label: 'Cyberforce' },
                { label: 'Into the Woods' },
                // Add more submenu items as needed
            ]
        },
        { label: 'How to Apply', path: '/apply' }
    ]

    // admin site
    const adminMenuItems = [
        { label: 'Dashboard', link: '/dashboard' },
        { label: 'Product', link: '/admin-product' },
        { label: 'Order', link: '/order' },
        { label: 'User', link: '/user' }
    ];

    return (
        <>
            <div className="header" style={{ borderBottom: "1px solid #00000014" }}>
                <div className="container pt-3 pb-3">
                    <div className="head_box d-flex align-items-center">
                        <div className="logo" style={{ flex: "0.5" }}>
                            <NavLink to={"/"}>
                                <img src={logo} alt="" className='img-fluid image_logo' />
                            </NavLink>
                        </div>
                        <div className="nav w-100" style={{ flex: "3" }}>
                            {
                                data?.user?.userType !== "admin" ?
                                    <ul className='list-inline d-flex align-items-center justify-content-end w-100 m-0 nav'>
                                        {
                                            menuItems?.map((menuItem, index) => (
                                                <li key={index} className='disp_menu' style={{ padding: "15px 20px" }}>
                                                    {
                                                        menuItem?.submenu ? (
                                                            <NavLink className="text-decoration-none a">{menuItem?.label}
                                                                <ul className='show_menu list-inline'>
                                                                    {
                                                                        menuItem?.submenu?.map((subItem, subIndex) => (
                                                                            <li key={subIndex} style={{ padding: "5px 25px" }}>
                                                                                <NavLink to={"/mobile"} state={{ brand: subItem?.brand }} className="text-decoration-none a" style={{ fontWeight: "200", fontSize: "16px" }}>{subItem?.label}</NavLink>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </NavLink>
                                                        ) :
                                                            (
                                                                <NavLink to={"/apply"} className="text-decoration-none a">{menuItem.label}</NavLink>
                                                            )
                                                    }
                                                </li>
                                            ))
                                        }
                                        {
                                            data?.token ? (
                                                <CircleUserRound role='button' onClick={() => navigate("/profile")} />
                                            ) :
                                                (
                                                    <li style={{ padding: "15px 20px" }}>
                                                        <NavLink to={"/login"} className="text-decoration-none a">Login</NavLink>
                                                    </li>
                                                )
                                        }
                                        <li style={{ padding: "15px 20px" }}>
                                            <NavLink to={"/trackorder"} className="navlink1 fs-5">
                                                <BoxSeam className='box' />
                                            </NavLink>
                                        </li>
                                        <li style={{ padding: "15px 20px" }}>
                                            <NavLink to={"/search"} className="navlink1 fs-5">
                                                <FontAwesomeIcon icon={faSearch} />
                                            </NavLink>
                                        </li>
                                        <li style={{ padding: "15px 20px" }}>
                                            <NavLink className="navlink1 fs-5">
                                                <Cart onClick={toggleOffCanves} />
                                            </NavLink>
                                        </li>
                                        <li style={{ padding: "15px 0px" }}>
                                            <NavLink to={"/d&lmode"} className="navlink1 fs-5">
                                                <Moon />
                                            </NavLink>
                                        </li>
                                    </ul> :
                                    <>
                                        <ul className='list-inline d-flex align-items-center justify-content-center w-75 m-0 nav'>{
                                            // Admin menu items
                                            adminMenuItems?.map((menuItem, index) => (
                                                <NavItem key={index} style={{ padding: "15px 20px" }}>
                                                    <NavLink to={menuItem?.link} className="text-decoration-none">{menuItem?.label}</NavLink>
                                                </NavItem>
                                            ))}
                                        </ul>
                                        {
                                            data?.token ?
                                                <CircleUserRound role='button' onClick={() => navigate("/profile")} /> :
                                                <NavItem>
                                                    <NavLink to={"/login"} className="text-decoration-none">Login</NavLink>
                                                </NavItem>
                                        }
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <OffCanvas isOpen={isOpen} toggleOffCanves={toggleOffCanves} />
        </>
    )
}
