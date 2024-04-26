import React from 'react'
import { BiSolidErrorAlt } from "react-icons/bi";

export default function PageNotFound() {
  return (
    <div>
     <div className=' h-[100%] p-[2rem] bg-stone-200  flex justify-center items-center flex-col'>
        <BiSolidErrorAlt className=' opacity-20 text-[20rem]' />
        <p className='text-[5rem] text-[#100e0e]'>404 Error Page Not Found</p>
      </div>
    </div>

      
  )
}
