import React from 'react'
import { Carousel } from "flowbite-react";
import Footer from './Footer';

export default function AjmalStudio() {
    return (
        <div>

            <h2 className='text-[40px] my-4'>Fragrance Indulgence With Abdulla Ajmal</h2>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-3">
                <Carousel leftControl="<" rightControl=">" >
                    <img src="../../../public/studioimg1.webp" alt="..." />
                    <img src="../../../public/studioimg2.webp" alt="..." />
                </Carousel>
            </div>
            <div className='flex my-8 justify-center items-center' >
                <img src="../../../public/studioimg3.webp" alt="" />
                <img src="../../../public/studioimg4.webp" alt="" />
            </div>
            <div className='mb-3'>
                <img src="../../../public/studiomap.jpg" alt="" />
            </div>
            <Footer />
        </div>
    )
}
