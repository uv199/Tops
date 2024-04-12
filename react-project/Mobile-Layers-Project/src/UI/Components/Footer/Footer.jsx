import React, { useLayoutEffect } from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })

    return (
        <>
            <div className='footer'>
                <div className="container">
                    <div className="footer_grid">
                        <div className="grid1">
                            <div className='footer_text'>
                                <span>Vision</span>
                            </div>
                            <p>Creativity, Expression, & Exploration</p>
                        </div>
                        <div className="grid1">
                            <div className="footer_text">
                                <span>pages</span>
                            </div>
                            <ul className='list-inline'>
                                <li className='footer_flex'>
                                    <NavLink to={"/about"}>About Us</NavLink>
                                </li>
                                <li className='footer_flex'>
                                    <NavLink to={"/contact"}>Contact Us</NavLink>
                                </li>
                                <li className='footer_flex'>
                                    <NavLink to={"/tandc"}>Terms and condition</NavLink>
                                </li>
                                <li className='footer_flex'>
                                    <NavLink to={"/privacy-policy"}>Privacy Policy</NavLink>
                                </li>
                                <li className='pb-2'>
                                    <NavLink to={"/refunds"} className="text-decoration-none footer_fex">
                                        <span className="footer_underline">Refunds/Cancellations/Shipping Policy</span>
                                    </NavLink>
                                </li>
                                <li className='footer_flex'>
                                    <NavLink to={"/faq"}>FAQ</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="grid1">
                            <div className="footer_text">
                                <span>My Accounts</span>
                            </div>
                            <ul className='list-inline'>
                                <li className='footer_flex'>
                                    <NavLink to={"/login"}>Login</NavLink>
                                </li>
                                <li className='footer_flex'>
                                    <NavLink to={"/signup"}>Register</NavLink>
                                </li>
                                <li className='footer_flex'>
                                    <NavLink to={"/trackorder"}>Track Order</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="grid1">
                            <div className='footer_text'>
                                <span>Follow Us</span>
                            </div>
                            <ul className='list-inline'>
                                <li className='footer_flex'>
                                    <div className='footer_icon'>
                                        <FontAwesomeIcon icon={faTwitter} className='pe-2' />
                                    </div>
                                    <a href="https://twitter.com" target='_blank'>Twitter</a>
                                </li>
                                <li className='footer_flex'>
                                    <div className='footer_icon'>
                                        <FontAwesomeIcon icon={faFacebookSquare} className='pe-2 footer_icon' />
                                    </div>
                                    <a href="https://www.facebook.com" target='_blank'>Facebook</a>
                                </li>
                                <li className='footer_flex'>
                                    <div className='footer_icon'>
                                        <FontAwesomeIcon icon={faYoutube} className='pe-2 footer_icon' />
                                    </div>
                                    <a href="https://www.youtube.com" target='_blank'>YouTube</a>
                                </li>
                                <li className='footer_flex'>
                                    <div className='footer_icon'>
                                        <FontAwesomeIcon icon={faInstagram} className='pe-2 footer_icon' />
                                    </div>
                                    <a href="https://www.instagram.com" target='_blank'>Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='pt-3 pb-4' style={{ borderTop: "1px solid #00000014" }}>Copyright © 2024 Layers</div>
                </div>
            </div>
        </>
    )
}
