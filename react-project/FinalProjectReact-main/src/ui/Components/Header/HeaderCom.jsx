import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import "./HeaderCom.css"
import { User } from 'lucide-react'

export default function HeaderCom() {
    const token = useSelector(state => state?.authReducer?.token)
    return (
        <>
            <div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                <div className="site-logo">
                                    <a href="index.html">
                                        <img src="img/logo.png" alt="" />
                                    </a>
                                </div>

                                <nav className="main-menu">


                                    <ul>
                                        {
                                            true ? <>
                                                <li>
                                                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                                                </li>
                                                <li>                                        <NavLink to={'/product'}>Product</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/orders'}>Order</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/users'}>User</NavLink>
                                                </li>
                                            </>
                                                :
                                                <>
                                                    <li>                                        <NavLink to={'/about'}>About</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/pages'}>Pages</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/news'}>News</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/contact'}>Contact</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={'/shop'}>Shop</NavLink>
                                                    </li>
                                                </>
                                        }

                                        <li>
                                            {token?.length > 0 ?

                                                <NavLink to={"/profile"}>
                                                    <User />
                                                </NavLink> : <NavLink to={"/login"}>
                                                    <Button className='btn'>
                                                        SIGN IN
                                                    </Button>
                                                </NavLink>

                                            }
                                        </li>

                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



