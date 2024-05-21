import { Button } from 'flowbite-react';
import React from 'react';

export default function Bestseller() {
    return (
        <div className="max-w-[1470px] mx-auto">
            <div className='py-10 flex justify-between items-center mt-5'>
                <i className='text-5xl title font-italic'>Best Sellers </i>
                <a href="#" className="flex items-center inherit-color text-black hover:text-[#bc8b57]">Discover all <img className="ms-1" width="18px" src="/public/arrow-right.svg" alt="" /> </a>
            </div>


            <div className="video-product relative ">

                <div className="rounded-3xl overflow-hidden" style={{ height: '90vh' }}>
                    <video src="/public/1873+x+650.mp4" loop autoPlay muted className="h-full w-full object-cover"></video>
                </div>

                <div className="absolute center-box w-[320px]">
                    <div className=" bg-[#fce5fc] p-4 pb-2 rounded-lg" >
                        <div className="cursor-pointer" >
                            <a style={{ width: '32px', height: '32px', lineHeight: '26px', background: '#bc8b573d', borderRadius: '100px', display: 'flex', marginLeft: 'auto', padding: '8px' }} className="product-wishlist">
                                <img src="https://in.ajmal.com/IconLike-9bG.svg" alt="wishlist" style={{ width: '100%', height: 'auto' }} />
                            </a>
                            <div className="  h-[250px] p-2 rounded-lg text-center ">
                                <img src="https://in.ajmal.com/media/catalog/product/a/m/amberwood_edp_forwomen_100ml_1_.png?auto=webp&format=png&width=160&height=200&fit=cover" alt="" srcSet="" className="m-auto h-[300px]  content-center  " />
                            </div>
                            <div className="mb-1 p-1 pt-2">
                                <button className='  bg-red-800 rounded-full text-white py-1 border-none'>10%</button>
                                <p className="text-[13px] mt-2 text-gray-500">100 ML / UNISEX</p>
                                <h2 className="text-[20px] mt-1 div-title title single-line-ellipsis">Amber Wood Edp 100ml Long Last</h2>
                                <p className="py-2"> <del className="mr-2  text-gray-500">₹ 1800 </del> <b className="text-[18px]">12600</b></p>
                                <div className='flex  justify-center space-x-4 '>
                                    <Button className="btn">Buy Now</Button>
                                    <Button className="btn">Buy Now</Button>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div>

            <div className='gift py-10 flex justify-between items-end mt-5 w-[1470px]'>
                <div className='flex flex-col w-[50%]'>
                    <i className='text-5xl title font-italic self-start'>A Gifting Moment </i>
                    <p className='w-full text-left mt-6 tracking-wider leading-7 overflow-hidden text-gray-500'>
                        Step into a realm of luxury and sophistication with Ajmal Perfumes. Each bottle is a work of art, meticulously designed and adorned with intricate details that reflect the essence of the fragrance within. With every spritz, your loved ones will be transported to a world of captivating aromas, creating memories that will be treasured for a lifetime.
                    </p>
                </div>
                <div>
                    <a href="#" className="flex whitespace-nowrap  items-center text-black hover:text-[#bc8b57] ml-auto">
                        Discover all
                        <img className="ml-1" width="18px" src="/public/arrow-right.svg" alt="" />
                    </a>
                </div>
            </div>

        </div>
    );
}
