import React from 'react'
import image from '../../../../public/assets/449045442_1392952914751626_3387352276175751009_n.jpg'
import image2 from '../../../../public/assets/448984927_492569776752804_3822322047097936278_n.jpg'

export default function Spot() {
  return (
    <div className='flex flex-col justify-center text-center mt-16'>
        <div className='header uppercase text-[#624DE3] text-[40px] font-extrabold'>
        <h2>Spot <br />Veirdo Bro's</h2>
        </div>
        <div className='subheading text-[#635483]'>
            <p>
        <strong>use #veirdo with your fits on insta to get spotted here</strong>
            </p>
        </div>
        <div>
            <div className='grid grid-cols-3 gap-4 px-5 h-full'>
            <div className='grid grid-cols-2 gap-4 w-full h-fit'>
                    <div className='border rounded-lg'>
                    <img className='w-full p-1' src={image} alt="" />
                    </div>
                    <div className='border rounded-lg'>
                    <img className='w-full p-1' src={image} alt="" />
                    </div>
                    <div className='border rounded-lg'>
                    <img className='w-full p-1' src={image} alt="" />
                    </div>
                    <div className='border rounded-lg'>
                    <img className='w-full p-1' src={image} alt="" />
                    </div>
                </div>
                <div className='border rounded-lg'>
                    <img className='w-full p-1' src={image2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
