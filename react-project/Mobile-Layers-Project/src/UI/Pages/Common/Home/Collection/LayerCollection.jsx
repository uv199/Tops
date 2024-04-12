import React, { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import apple from '../../../../../../public/iPhone-logo.webp'
import samsung from '../../../../../../public/Samsung-logo.webp'
import onepuls from '../../../../../../public/OnePlus-logo.webp'
import google from '../../../../../../public/google-logo.webp'
import realme from '../../../../../../public/realme-logo.webp'
import xiaomi from '../../../../../../public/Xiaomi-logo.webp'
import oppo from '../../../../../../public/Oppo-logo.webp'
import nothing from '../../../../../../public/Nothing_logo.webp'
import iqoo from '../../../../../../public/iqoo-logo.webp'
import poco from '../../../../../../public/Poco-logo.webp'
import vivo from '../../../../../../public/Vivo-logo.webp'
import "./LayerCollection.css"

export default function LayerCollection() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    let brandData = [
        {
            brandImg: apple,
            brandText: "Select your Device",
        },
        {
            brandImg: samsung,
            brandText: "Select your Device",
        },
        {
            brandImg: onepuls,
            brandText: "Select your Device",
        },
        {
            brandImg: nothing,
            brandText: "Select your Device",
        },
        {
            brandImg: google,
            brandText: "Select your Device",
        },
        {
            brandImg: xiaomi,
            brandText: "Select your Device",
        },
        {
            brandImg: iqoo,
            brandText: "Select your Device",
        },
        {
            brandImg: poco,
            brandText: "Select your Device",
        },
        {
            brandImg: realme,
            brandText: "Select your Device",
        },
        {
            brandImg: oppo,
            brandText: "Select your Device",
        },
        {
            brandImg: vivo,
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
            <div className='layer_collection'>
                <div className="container">
                    <div className='layers_collect'>
                        {
                            brandData.map((e, i) => {
                                return (
                                    <div key={i} className='layer_collect'>
                                        <NavLink className="text-decoration-none text-black">
                                            <div className='layer_collect_image'>
                                                <img src={e?.brandImg} alt="" style={{ height: "250px", maxWidth: "100%" }} />
                                                <span className='text-white layer_collect_text'>{e?.brandText}</span>
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