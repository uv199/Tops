import React, { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './BestSellingLaptopSkin.css'
import jediattack from '../../../../../../../public/jediattack-logo.webp'
import universe from '../../../../../../../public/universe-logo.webp'
import manda from '../../../../../../../public/manda-logo.webp'
import cybermind from '../../../../../../../public/cybermind-logo.webp'
import magma from '../../../../../../../public/magma-logo.webp'
import chaos from '../../../../../../../public/chaos-logo.webp'
import abstrack from '../../../../../../../public/abstrack-logo.webp'
import oceanic from '../../../../../../../public/oceanic-logo.webp'

export default function BestSellingLaptopSkin() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    let laptopData = [
        {
            laptopImg: jediattack,
            laptopText: "Select your Device",
            laptopBlog: "New Skin",
            laptopType: "Deadpool",
            laptopPrice: "₹ 1199"
        },
        {
            laptopImg: universe,
            laptopText: "Select your Device",
            laptopBlog: "New Skin",
            laptopType: "The Avengers",
            laptopPrice: "₹ 1199"
        },
        {
            laptopImg: manda,
            laptopText: "Select your Device",
            laptopBlog: "New Skin",
            laptopType: "Captain America Legacy",
            laptopPrice: "₹ 1199"
        },
        {
            laptopImg: cybermind,
            laptopText: "Select your Device",
            laptopType: "Since 1963",
            laptopPrice: "₹ 1099"
        },
        {
            laptopImg: magma,
            laptopText: "Select your Device",
            laptopType: "Earth's Mightiest Heroes",
            laptopPrice: "₹ 1099"
        },
        {
            laptopImg: chaos,
            laptopText: "Select your Device",
            laptopType: "Deadpool Attack",
            laptopPrice: "₹ 1099"
        },
        {
            laptopImg: abstrack,
            laptopText: "Select your Device",
            laptopType: "Moon knight rising",
            laptopPrice: "₹ 1099"
        },
        {
            laptopImg: oceanic,
            laptopText: "Select your Device",
            laptopType: "Astonishing Ant-Man",
            laptopPrice: "₹ 1099"
        }
    ]

    return (
        <>
            <h1 className='text-center mt-3 mb-3' style={{ fontWeight: "400", padding: "15px" }}>Best Selling Laptop Skins</h1>
            <div className='laptop'>
                <div className="container">
                    <div className="laptop_grid">
                        {
                            laptopData?.map((e, i) => {
                                return (
                                    <div key={i} className='laptop_skin'>
                                        <NavLink to={"/collect"} className="text-decoration-none text-black">
                                            <div className='laptop_image'>
                                                <img src={e?.laptopImg} alt="" style={{ height: "auto", maxWidth: "100%" }} />
                                                <span className='text-white laptop_hover'>{e?.laptopText}</span>
                                                {i < 3 && <span className='laptop_blog'>{e?.laptopBlog}</span>}
                                            </div>
                                            <div className='d-flex justify-content-between pt-3 pb-3'>
                                                <span className='laptop_text'>{e?.laptopType}</span>
                                                <span>{e?.laptopPrice}</span>
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