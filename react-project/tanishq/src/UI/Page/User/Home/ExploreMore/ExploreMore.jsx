import React from 'react'

export default function ExploreMore() {
  return (
    <div>
        <div className='mt-[2rem] mb-[4rem] px-20 '>
            <img src="../../../../public/Explore/Explore More.jpg"  className='position-relative'/>
           </div>
        <span 
        className='w-25 h-25 bg-slate-100 border-[1px] border-[#832729] px-5 py-2
         rounded-md text-lg font-mediumbold hover:bg-[#832729] hover:text-white hover:ease-in duration-500' 
        style={{
            position: 'absolute',
            top: '4345px',
            left: '550px'
        }}>
       <button 
       className=''
       >
        Explore More</button>
        </span>
    </div>
  )
}
