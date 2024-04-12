import React, { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import apple from '../../../../../../public/iPhone-logo.webp'
import dell from '../../../../../../public/dell.webp'
import lenovo from '../../../../../../public/Lenovo.webp'
import realme from '../../../../../../public/realme-logo.webp'
import xiaomi from '../../../../../../public/Xiaomi-logo.webp'
import microsoft from '../../../../../../public/Microsoft.webp'
import asus from '../../../../../../public/Asus-logo.webp'
import "./LaptopCollect.css"

export default function LaptopCollect() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    let brandData = [
        {
            brandImg: apple,
            brandText: "Select your Device",
        },
        {
            brandImg: dell,
            brandText: "Select your Device",
        },
        {
            brandImg: lenovo,
            brandText: "Select your Device",
        },
        {
            brandImg: asus,
            brandText: "Select your Device",
        },
        {
            brandImg: xiaomi,
            brandText: "Select your Device",
        },
        {
            brandImg: microsoft,
            brandText: "Select your Device",
        },
        {
            brandImg: realme,
            brandText: "Select your Device",
        },
    ]

    return (
        <>
            <div className='d-flex gap-3 ms-5 ps-4 pt-3 pb-3 collection'>
                <NavLink to={"/"} className="text-decoration-none home" style={{ color: "black", opacity: "0.58" }}>Home</NavLink>
                <div style={{ opacity: "0.58" }}>/</div>
                <div>Collection</div>
            </div>

            <h1 className='text-center mt-3 mb-3' style={{ fontWeight: "400", borderTop: "1px solid #00000014", padding: "15px" }}>Select Your Brand</h1>
            <div className='lapcollect'>
                <div className="container">
                    <div className='top'>
                        {
                            brandData.map((e, i) => {
                                return (
                                    <div key={i} className='laptop_collect'>
                                        <NavLink className="text-decoration-none text-black">
                                            <div className='laptop_collect_image'>
                                                <img src={e?.brandImg} alt="" style={{ height: "250px", maxWidth: "100%" }} />
                                                <span className='text-white laptop_collect_text'>{e?.brandText}</span>
                                            </div>
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}