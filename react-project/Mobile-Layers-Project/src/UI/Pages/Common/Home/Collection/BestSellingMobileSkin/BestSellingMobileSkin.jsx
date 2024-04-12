import React, { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './BestSellingMobileSkin.css'
import deadpool from '../../../../../../../public/Deadpool-logo.webp'
import avengers from '../../../../../../../public/avengers-logo.webp'
import captainamerica from '../../../../../../../public/captainamerica-logo.webp'
import since from '../../../../../../../public/since-logo.webp'
import heroes from '../../../../../../../public/heroes-logo.webp'
import attack from '../../../../../../../public/attack-logo.webp'
import MoonKnightRising from '../../../../../../../public/Moon_Knight_Rising-logo.webp'
import astonishing from '../../../../../../../public/astonishing-logo.webp'

export default function BestSellingMobileSkin() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    let mobileData = [
        {
            mobileImg: deadpool,
            mobileText: "Select your Device",
            mobileType: "Deadpool",
            MobilePrice: "₹ 699"
        },
        {
            mobileImg: avengers,
            mobileText: "Select your Device",
            mobileType: "The Avengers",
            MobilePrice: "₹ 699"
        },
        {
            mobileImg: captainamerica,
            mobileText: "Select your Device",
            mobileType: "Captain America Legacy",
            MobilePrice: "₹ 699"
        },
        {
            mobileImg: since,
            mobileText: "Select your Device",
            mobileType: "Since 1963",
            MobilePrice: "₹ 699"
        },
        {
            mobileImg: heroes,
            mobileText: "Select your Device",
            mobileType: "Earth's Mightiest Heroes",
            MobilePrice: "₹ 699"
        },
        {
            mobileImg: attack,
            mobileText: "Select your Device",
            mobileType: "Deadpool Attack",
            MobilePrice: "₹ 699"
        },
        {
            mobileImg: MoonKnightRising,
            mobileText: "Select your Device",
            mobileType: "Moon knight rising",
            MobilePrice: "₹ 699"
        },
        {
            mobileImg: astonishing,
            mobileText: "Select your Device",
            mobileType: "Astonishing Ant-Man",
            MobilePrice: "₹ 699"
        }
    ]
    
    return (
        <>
            <h1 className='text-center mt-3 mb-3' style={{ fontWeight: "400", padding: "15px" }}>Best Selling Mobile Skins</h1>
            <div className='mobile'>
                <div className="container">
                    <div className="mobile_grid">
                        {
                            mobileData.map((e, i) => {
                                return (
                                    <div key={i} className='mobile_skin'>
                                        <NavLink to={"/layercollect"} className="text-decoration-none text-black">
                                            <div className='mobile_image'>
                                                <img src={e?.mobileImg} alt="" style={{ height: "auto", maxWidth: "100%" }} />
                                                <span className='text-white mobile_text'>{e?.mobileText}</span>
                                            </div>
                                            <div className='d-flex justify-content-between pt-3 pb-3'>
                                                <span className='skin_text'>{e?.mobileType}</span>
                                                <span>{e?.MobilePrice}</span>
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