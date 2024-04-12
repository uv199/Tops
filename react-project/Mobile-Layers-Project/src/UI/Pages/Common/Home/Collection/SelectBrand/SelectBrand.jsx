import React, { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import apple from '../../../../../../../public/iPhone-logo.webp'
import samsung from '../../../../../../../public/Samsung-logo.webp'
import onepuls from '../../../../../../../public/OnePlus-logo.webp'
import google from '../../../../../../../public/google-logo.webp'
import realme from '../../../../../../../public/realme-logo.webp'
import xiaomi from '../../../../../../../public/Xiaomi-logo.webp'
import oppo from '../../../../../../../public/Oppo-logo.webp'
import asus from '../../../../../../../public/Asus-logo.webp'
import nothing from '../../../../../../../public/Nothing_logo.webp'
import iqoo from '../../../../../../../public/iqoo-logo.webp'
import poco from '../../../../../../../public/Poco-logo.webp'
import vivo from '../../../../../../../public/Vivo-logo.webp'
import motorola from '../../../../../../../public/motoroloa-logo.png'
import lenovo from '../../../../../../../public/lenovo.png'

export default function SelectBrand() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    let brandData = [
        {
            brandImg: apple,
            brandName: "Apple"
        },
        {
            brandImg: samsung,
            brandName: "Samsung"
        },
        {
            brandImg: onepuls,
            brandName: "OnePlus"
        },
        {
            brandImg: google,
            brandName: "Google"
        },
        {
            brandImg: realme,
            brandName: "Realme"
        },
        {
            brandImg: xiaomi,
            brandName: "Xiaomi"
        },
        {
            brandImg: oppo,
            brandName: "Oppo"
        },
        {
            brandImg: asus,
            brandName: "Asus"
        },
        {
            brandImg: nothing,
            brandName: "Nothing"
        },
        {
            brandImg: iqoo,
            brandName: "iQoo"
        },
        {
            brandImg: poco,
            brandName: "Poco"
        },
        {
            brandImg: vivo,
            brandName: "Vivo"
        },
        {
            brandImg: motorola,
            brandName: "Motorola"
        },
        {
            brandImg: lenovo,
            brandName: "Lenovo"
        }
    ]

    return (
        <>
            <h1 className='text-center mt-3 mb-3' style={{ fontWeight: "400" }}>Select Your Brand</h1>
            <div className="owl-carousel owl-theme">
                {
                    brandData?.map((e, i) => {
                        return (
                            <div key={i}>
                                <NavLink className="text-center text-decoration-none text-black">
                                    <img src={e?.brandImg} alt="" className='img-fluid' style={{ margin: "auto", height: "150px", width: "150px", border: "1px solid #00000014", borderRadius: "50%" }} />
                                    <div>{e?.brandName}</div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}