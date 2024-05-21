import React from 'react'

export default function Arrivals() {
    return (
        <div className='py-10 flex justify-between items-center '>
            <i className='text-5xl title font-italic '>New Arrivals </i>
            <a href="#" className="flex items-center inherit-color text-black hover:text-[#bc8b57]">Discover all <img className="ms-1" width="18px" src="/public/arrow-right.svg" alt="" /> </a>
        </div>
    )
}
