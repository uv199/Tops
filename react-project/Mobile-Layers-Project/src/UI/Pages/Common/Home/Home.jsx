import React, { useLayoutEffect } from 'react'
import Caro from './Carousel'
import Carou from './Carou'
import { NavLink } from 'react-router-dom'
import SelectBrand from './Collection/SelectBrand/SelectBrand'
import LayersOriginalDesigns from './Collection/LayersOriginalDesigns/LayersOriginalDesigns'
import BestSellingMobileSkin from './Collection/BestSellingMobileSkin/BestSellingMobileSkin'
import BestSellingLaptopSkin from './Collection/BestSellingLaptopSkin/BestSellingLaptopSkin'
import ShopNow from './Collection/ShopNow/ShopNow'
import FollowPage from './Collection/FollowPage/FollowPage'
import ProductDispatch from './Collection/ProductDispatch/ProductDispatch'

export default function Home() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <NavLink to={"/brand"}>
                <Caro />
            </NavLink>
            <SelectBrand />
            <LayersOriginalDesigns />
            <NavLink to={"/brand"}>
                <Carou />
            </NavLink>
            <BestSellingMobileSkin />
            <ShopNow />
            <BestSellingLaptopSkin />
            <FollowPage />
            <ProductDispatch />
        </>
    )
}