import React from 'react'
import image from '../../../../public/assets/v44.jpg'
export default function ProductPage() {
  return (
    <div className='w-[100vw] h-[100vh] pt-[5rem] justify-around px-[10rem] grid grid-cols-2 gap-5'>
        <div className='border rounded-lg h-fit p-1 bg-[#666] grid-cols-2'>
            <img className='rounded-lg' src={image} alt="" />
        </div>
        <div className='mt-5 grid-cols-1'>
            <div className='bg-[#E6FEF4] flex justify-center p-2 text-[#00653D]'>
                Sale Ends in  11:00:00
            </div>
            <div className='mt-5 font-extrabold text-3xl flex justify-between'>
                 <span>₹499</span><span className='text-[#04B63D] font-medium'>58%Off</span>
            </div>
            <div className='text-[#51575C] text-xl'>
            Veirdo Blue Oversized Back Graphic Printed Tshirt
            </div>
        </div>
    </div>
  )
}
