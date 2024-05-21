import React from 'react'
import Cardcom from '../Cardcom'
import shopdata from "../shopdata.json"
import Footer from './Footer'

import { Dropdown } from "flowbite-react";



export default function Shop() {
    return (
        <>
            <div className='my-4 flex space-x-2 justify-center '>
                <Dropdown label="Short By recommended" dismissOnClick={false} className="bg-white border border-black " >
                    <Dropdown.Item>Size</Dropdown.Item>
                    <Dropdown.Item>Best Seller</Dropdown.Item>
                    <Dropdown.Item>Revenue</Dropdown.Item>
                    <Dropdown.Item>Most Viewed</Dropdown.Item>
                    <Dropdown.Item>Reviews Count</Dropdown.Item>
                    <Dropdown.Item>Top Rated</Dropdown.Item>
                    <Dropdown.Item>New </Dropdown.Item>
                    <Dropdown.Item>Biggest Saving </Dropdown.Item>
                    <Dropdown.Item>Price</Dropdown.Item>
                </Dropdown>

                <Dropdown label="Category" dismissOnClick={false} className="bg-white border border-black" >
                    <Dropdown.Item>All</Dropdown.Item>
                    <Dropdown.Item>Shop</Dropdown.Item>
                    <Dropdown.Item>Ramadan Sale</Dropdown.Item>
                    <Dropdown.Item>Combos</Dropdown.Item>
                    <Dropdown.Item>Perfumes</Dropdown.Item>
                    <Dropdown.Item>Men</Dropdown.Item>
                    <Dropdown.Item>Women</Dropdown.Item>
                    <Dropdown.Item>Unisex</Dropdown.Item>
                    <Dropdown.Item>Ajmal </Dropdown.Item>
                </Dropdown>

                <Dropdown label="Size" dismissOnClick={false} className="bg-white border border-black" >
                    <Dropdown.Item>All</Dropdown.Item>
                    <Dropdown.Item>3 ml</Dropdown.Item>
                    <Dropdown.Item>6 ml</Dropdown.Item>
                    <Dropdown.Item>9 ml</Dropdown.Item>
                    <Dropdown.Item>12 ml</Dropdown.Item>
                    <Dropdown.Item>14 ml</Dropdown.Item>
                    <Dropdown.Item>16 ml</Dropdown.Item>
                    <Dropdown.Item>18 ml</Dropdown.Item>
                    <Dropdown.Item>20 ml </Dropdown.Item>
                </Dropdown>

                <Dropdown label="Display Gender" dismissOnClick={false} className="bg-white border border-black" >
                    <Dropdown.Item>All</Dropdown.Item>
                    <Dropdown.Item>Male</Dropdown.Item>
                    <Dropdown.Item>Female</Dropdown.Item>
                    <Dropdown.Item>Unisex</Dropdown.Item>

                </Dropdown>
            </div>
            <div className="container mx-auto px-4 py-3">
                <div className="relative pb-4 ">
                    <img src="../../public/shop.png" alt="Shop Image" className="w-full " />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <i className="text-white text-5xl font-bold title"> SHOP </i>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {shopdata.map((item) => (
                        <Cardcom key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
