import React from 'react'
import { Card } from 'flowbite-react';
import { CiHeart } from "react-icons/ci";


export default function GiftCard({img,title,price}) {
  return (
    <div>
        
         <Card className="max-w-sm  border-[1] rounded-none border-gray-200 shadow-none " >
        <span className="position-relative ">
          <img src={img} className='h-[3rem]'/>
        </span>
        <span
          style={{
            position: "absolute",
            top: "40px",
            bottom: "0px",
            right: "50px",
          }}
          className="p-1 bg-white h-8 rounded-full drop-shadow-md "
        >
          <CiHeart className="text-[#832729] text-2xl " />
        </span>
        <span>
          <p className="text-start font-semibold h-[3rem]" style={{ fontSize: "13px" }}>
            {title}
          </p>
          <p className="text-start font-medium text-xm">{price}</p>
        </span>
      </Card>
    </div>
  )
}
