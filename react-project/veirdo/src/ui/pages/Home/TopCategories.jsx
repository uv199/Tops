import React from 'react'
import image from '../../../../public/assets/01_7e35091a-e2f9-4999-a10b-f681f1a26d63.jpg'

export default function TopCategories() {
    var num = [1,2,3,4]
    return (
    <div className='mb-16'>
    <div className='mt-16 flex justify-center items-center w-full text-2xl mx-auto font-semibold'>
        <h1>Top Categories</h1>
        </div>
        <div className='grid grid-cols-4 gap-4'>
            {num.map((e,i)=>{
                return(
            <div key={i} className='card p-2 border rounded-lg  mt-5'>
                <img src={image} alt="" className=' rounded-lg'/>
            <div className='uppercase text-center w-full font-semibold p-2'>
                Shorts
            </div>
            </div>
                )
            })}
        </div>
    </div>
  )
}
