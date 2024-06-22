import React, { useState } from 'react';
import "./style.css";
import Card from "./Card1";
import Card2 from './Card2';
import { Target } from 'lucide-react';



export default function Frantpage() {
  return (
    <>
    <div className='position-relative pb-[25px]'>
   <img src="//www.houseofem5.com/cdn/shop/files/EM5_-_Yearly_Subscription_6e1f696d-edca-448d-b29f-3e985e179981.png?v=1682347018"/>
   <div className='position-absolute right-[50px] bottom-[75px] h2'>
    <button className='proButton font-medium'>
        <span>Add to cart</span>
    </button>
   </div>
    </div>
   <div className='bg-#f6f6f6 container gap-14 d-flex justify-content-center pb-[150px]'>
    <div>
   <img src="https://www.houseofem5.com/cdn/shop/files/N1_31cb27ad-73dd-4f01-8be1-d48d99c6455d.png?v=1665640410" />
  </div>
  <div>
  <img src="https://www.houseofem5.com/cdn/shop/files/N2_fa4ee174-26cd-4873-953f-5064e81bf7cc.png?v=1665640422" />
  </div>
  <div>
  <img src="https://www.houseofem5.com/cdn/shop/files/N3_cabe8723-83ad-4356-8751-3042613cfe46.png?v=1665640433" />
  </div>
  <div>
  <img src="https://www.houseofem5.com/cdn/shop/files/N4_f53adad9-0f8c-4508-bd52-5f114f031a28.png?v=1665640447" />
  </div>
  <div>
  <img src="https://www.houseofem5.com/cdn/shop/files/N5_3542c974-061b-4826-aadd-980a053ea446.png?v=1665640457"  />
  </div>
  <div>
  <img src="https://www.houseofem5.com/cdn/shop/files/N6_f7c59766-99d2-433e-9a0f-eefe2e6375aa.png?v=1666004952"  />
  </div>
   </div>
   <div>
  <Card />
   </div>
   
   <div className='d-flex justify-content-center h3 pb-[40px] '>
   BEST SELLERS 
   </div>
   <div>
    <Card2 />
   </div>
   
   

   </>
    
  )
}