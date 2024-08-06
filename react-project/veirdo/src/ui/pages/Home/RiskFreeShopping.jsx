import React from 'react'
import image from '../../../../public/assets/1_5.png'
import image2 from '../../../../public/assets/2_5_8da632cf-abda-496a-9192-019951361e02.png'
export default function RiskFreeShopping() {
  return (
    <div className='mt-16 flex flex-col w-full lg:flex-row lg:justify-between'>
        <img src={image} alt="" className='w-1/2 blur-[1px]'/>
        <img src={image2} alt="" className='w-1/2 blur-[1px]'/>
    </div>
  )
}
