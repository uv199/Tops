import React from 'react'
import './topright.css';


export default function Card() {
  return (
    
    <div className='pb-[70px]'>
      <div 
      style={{display:"grid",justifyContent:"center",gridTemplateColumns: "auto auto auto auto",alignItems:"center",gap: "15px"}}
      className="bodyDiv  ">
        {
        [1].map((e)=>{
        return <div className='box' style={{
          height:"224px",
          width:"350px",
          backgroundColor:"lightgray",
          
        }}>{
          <img src="https://www.houseofem5.com/cdn/shop/files/Perfume_Spray_76bad37f-e982-4c83-966d-061b26949fc8_360x.png?v=1712752449"  />
        }</div>
        })
        }
        {
        [2].map((e)=>{
        return <div className='box' style={{
          height:"224px",
          width:"350px",
          backgroundColor:"lightgray",
          
        }}>{
          <img src="https://www.houseofem5.com/cdn/shop/files/Solid_Perfume_360x.png?v=1663331956" />
        }</div>
        })
        }
        {
        [3].map((e)=>{
        return <div className='box' style={{
          height:"224px",
          width:"350px",
          backgroundColor:"lightgray",
        
        }}>{
          <img src="https://www.houseofem5.com/cdn/shop/files/Beard_Balm_360x.png?v=1663331956"  />
        }</div>
        })
        }
        {
        [4].map((e)=>{
        return <div className='box' style={{
          height:"224px",
          width:"350px",
          backgroundColor:"lightgray",
          
        }}>{
          <img src="https://www.houseofem5.com/cdn/shop/files/Candles_360x.png?v=1663331956"  />
        }</div>
        })
        }
        {
        [5].map((e)=>{
        return <div className='box' style={{
          height:"224px",
          width:"350px",
          backgroundColor:"lightgray",
          
          
        }}>{
          <img src="https://www.houseofem5.com/cdn/shop/files/EM5_-_Catalogue_images_website_-_Mist_4f0641cc-c85d-46c3-8309-9835890bf4e4_360x.png?v=1718701633"  />
        }</div>
        })
        }
        {
        [6].map((e)=>{
        return <div className='box' style={{
          height:"224px",
          width:"350px",
          backgroundColor:"lightgray",
          
        }}>{
          <img src="https://www.houseofem5.com/cdn/shop/files/Reed-Diffuser-Catalogue-Image_360x.png?v=1678101778"  />
        }</div>
        })
        }
        {
        [7].map((e)=>{
        return <div className='box' style={{
          height:"224px",
          width:"350px",
          backgroundColor:"lightgray",
        
        }}>{
          <img src="https://www.houseofem5.com/cdn/shop/files/Foot_Sray_-_New_-_Catelouge_360x.png?v=1706014295"  />
        }</div>
        })
        }
        {
        [8].map((e)=>{
        return <div className='box' style={{
          height:"224px",
          width:"350px",
          backgroundColor:"lightgray",
          
        }}>{
          <img src="https://www.houseofem5.com/cdn/shop/files/Gift-packs-Category-images_360x.png?v=1687239624"  />
        }</div>
        })
        }
       </div>
        {/* <div style={{display:"flex"}}>
        {
        [1,2,3].map((e)=>{
        return <div style={{
          height:"450px",
          width:"450px",
          backgroundColor:"lightgray",
          margin:"20px",
        }}>{e}</div>
        })
        }    
        </div> */}
    </div>
  )
}
