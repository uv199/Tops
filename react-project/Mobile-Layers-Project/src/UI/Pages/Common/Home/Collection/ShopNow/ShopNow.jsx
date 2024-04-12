import React, { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import shopnow from '../../../../../../../public/shopnow-logo.webp'

export default function ShopNow() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <NavLink to={"/collection"} role='button'>
                <img src={shopnow} alt="" style={{height: "auto", maxWidth: "100%"}} />
            </NavLink>
        </>
    )
}
