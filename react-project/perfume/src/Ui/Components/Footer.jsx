import React from 'react';
import { ArrowRight, Facebook, Instagram, Twitter, Youtube, } from 'react-feather';

export default function Footer() {
    return (
        <>

            <div className='footer bg-[#f4ece6] p-5'>
                <div className='footertop'>
                    <div className='mt-2 '>
                        <i className='title text-[45px]'>Newsletter and Promotions</i>
                        <p className='py-4'>Sign up to receive our latest news</p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex items-center'>
                            <input
                                type="text"
                                className='border rounded-full border-gray-950 pl-2 pr-0 bg-transparent'
                                placeholder='Email'
                            />
                            <ArrowRight />
                        </div>
                    </div>
                </div>
                <div className='footermiddle py-10'>
                    <div className='flex justify-between '>
                        <div>
                            <img src="/ajmallogo.svg" alt="Ajmal Logo" />
                            <p className='w-[230px] mt-10 text-justify title italic text-[17px] font-semibold'>Nothing unlocks an old memory better than smell, be it the memory of lost love or of a fond friend.</p>
                        </div>

                        <div className='w-[225px]'>
                            <div className='text-justify text-[14px] '>
                                <p className='text-xl font-bold'>Customer Support</p>
                            </div>
                            <div className='mt-5'>
                                <ul className='text-justify leading-7 text-[14px]'>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Contact Us</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>FAQs</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Store Locator</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Shipping Policy</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Terms & Condition</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Privacy Policy</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Refund & Returns</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='w-[225px]'>
                            <div className='text-justify'>
                                <p className='text-xl'>Shop</p>
                            </div>
                            <div className='mt-5'>
                                <ul className='text-justify text-[14px] leading-7'>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Ajmal</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>And</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>DEODORANTS</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>COMBOS</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='w-[225px]'>
                            <div className='text-justify'>
                                <p className='text-xl font-bold'>Quick Links</p>
                            </div>
                            <div className='mt-5'>
                                <ul className='text-justify text-[14px] leading-7' >
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Our Journey</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Travel Retail</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Exports</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Crafting Memories</a></li>
                                    <li><a href="" className='text-black hover:text-[#a77743]'>Blog</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='footerbottom'>
                    <div className='flex justify-center'>
                        <ul className='flex items-center gap-4'>
                            <li>
                                <a href="https://www.facebook.com/AjmalPerfumesIN">
                                    <div className="border border-solid border-[#bc8b57] rounded-full p-1">
                                        <Facebook className="text-[#bc8b57] w-6 h-6" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/AjmalPerfumesIN">
                                    <div className="border border-solid border-[#bc8b57] rounded-full p-1">
                                        <Twitter className="text-[#bc8b57] w-6 h-6" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/ajmalperfumesin/">
                                    <div className="border border-solid border-[#bc8b57] rounded-full p-1">
                                        <Instagram className="text-[#bc8b57] w-6 h-6" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UC2nO1cSFUI61aKR4LVQpUHw">
                                    <div className="border border-solid border-[#bc8b57] rounded-full p-1">
                                        <Youtube className="text-[#bc8b57] w-6 h-6" />
                                    </div>
                                </a>
                            </li>

                        </ul>
                        <div className='ml-4 ' >
                            <p><a href="" className='text-black'>ajmal.support@nha-world.com</a></p>
                            <p><a href="tel:+91-9930063303" className='text-black'>Toll Free +91-9930063303</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
