import { Button, Carousel } from 'flowbite-react'
import React from 'react'

export default function () {
    return (
        <>
            <div className='my-4'>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-14">
                    <Carousel leftControl="<" rightControl=">">
                        <img src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/129616/banner-2-19-04-24-05-46-51.jpg" alt="..." />
                        <img src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/129616/banner-1-19-04-24-05-39-33.jpg" alt="..." />
                        <img src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/129616/ajamal-12-02-24-11-20-13.jpg" alt="..." />
                    </Carousel>
                </div>
            </div>

            <div className='bg-[#e6e6e6] p-9 text-left mx-14 my-4'>
                <h2 className='text-[35px]  font-bold'>Ajmal Perfumes</h2>
                <p className='text-[25px] font-bold'>Locate the nearest stores</p>
                <div className='grid grid-cols-3 gap-4 mt-3'>
                    <div className="flex flex-col">
                        <label htmlFor="stateSelect" className='text-left'>State</label>
                        <select id="stateSelect " className="w-[50%]">
                            <option value="All" selected>All</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="citySelect" className='text-left'>City</label>
                        <select id="citySelect" className="w-[50%]">
                            <option value="ahmedabad">Ahmedabad</option>
                            <option value="surat">Surat</option>
                            <option value="vadodara">Vadodara</option>
                            <option value="rajkot">Rajkot</option>
                            <option value="bhuj">Bhuj</option>
                            <option value="anand">Anand</option>
                            <option value="jamnagar">Jamnagar</option>
                            <option value="bhavnagar">Bhavnagar</option>
                            <option value="gandhinagar">Gandhinagar</option>
                            <option value="junagadh">Junagadh</option>
                            <option value="porbandar">Porbandar</option>
                            <option value="anjar">Anjar</option>
                            <option value="ankleshwar">Ankleshwar</option>
                            <option value="bardoli">Bardoli</option>
                            <option value="bharuch">Bharuch</option>
                            <option value="botad">Botad</option>
                            <option value="chalisgaon">Chalisgaon</option>
                            <option value="dahej">Dahej</option>
                            <option value="dahod">Dahod</option>
                            <option value="gandhidham">Gandhidham</option>
                            <option value="godhra">Godhra</option>
                            <option value="himatnagar">Himatnagar</option>
                            <option value="kalol">Kalol</option>
                            <option value="keshod">Keshod</option>
                            <option value="khambhat">Khambhat</option>
                            <option value="mahuva">Mahuva</option>
                            <option value="modasa">Modasa</option>
                            <option value="morbi">Morbi</option>
                            <option value="nadiad">Nadiad</option>
                            <option value="navsari">Navsari</option>
                            <option value="padra">Padra</option>
                            <option value="palanpur">Palanpur</option>
                            <option value="pardi">Pardi</option>
                            <option value="patan">Patan</option>
                            <option value="siddhpur">Siddhpur</option>
                            <option value="sikka">Sikka</option>
                            <option value="songadh">Songadh</option>
                            <option value="thane">Thane</option>
                            <option value="umreth">Umreth</option>
                            <option value="vapi">Vapi</option>
                            <option value="valsad">Valsad</option>
                            <option value="veraval">Veraval</option>
                        </select>
                    </div>

                    <div className="flex flex-col mt-6 w-[50%]">
                        <Button>SEARCH</Button>
                    </div>
                </div>
            </div>
            <div className='my-8'>
                <h2 className='text-[35px] font-bold'>Ajmal Perfumes Stores</h2>
                <hr className='w-[10%] mx-auto border-gray-950  mb-5' />
            </div>
            <div className="flex flex-wrap justify-center  gap-4 ">
                <div div className='border w-[30%] text-left p-6 ' >
                    <h4 className='text-[20px] font-bold'  >Ajmal Perfumes - Exclusive Stores</h4>
                    <hr className='w-[95%] mx-auto my-3' />

                    <p className='mb-3'>High Street Kamla Nagar</p>
                    <ul>
                        <li>No 6UB, Ground Floor, Bungalow Road, Jawahar Nagar</li>
                        <li>Kamla Nagar</li>
                        <li>New Delhi - 110007</li>
                    </ul>
                    <p className='my-4'>+919794424008</p>
                    <p className='mb-4'>Open until 09:30 PM</p>
                    <hr className='w-[95%] mx-auto my-3' />

                    <div className='flex justify-center space-x-4'>
                        <Button>MAP</Button>
                        <Button>WEBSITE</Button>
                        <Button>GET IN TOUCH</Button>
                    </div>
                </div >
                <div className='border w-[30%] text-left p-6  '>
                    <h4 className='text-[20px] font-bold'  >Ajmal Perfumes - Exclusive Stores</h4>
                    <hr className='w-[95%] mx-auto my-3' />
                    <p className='mb-3'>High Street Lajpat Nagar</p>
                    <ul>
                        <li>No 6UB, Ground Floor, Bungalow Road, Jawahar Nagar</li>
                        <li>Lajpat Nagar</li>
                        <li>New Delhi - 110024</li>
                    </ul>
                    <p className='my-4'>+911142273822</p>
                    <p className='mb-4'>Open until 09:30 PM</p>
                    <hr className='w-[95%] mx-auto my-3' />

                    <div className='flex justify-center space-x-4'>
                        <Button>MAP</Button>
                        <Button>WEBSITE</Button>
                        <Button>GET IN TOUCH</Button>
                    </div>
                </div>
                <div className='border w-[30%] text-left p-6  '>
                    <h4 className='text-[20px] font-bold'  >Ajmal Perfumes - Exclusive Stores</h4>
                    <hr className='w-[95%] mx-auto my-3' />
                    <p className='mb-3'>Harshit Enterprises</p>
                    <ul>
                        <li>No 6UB, Ground Floor, Bungalow Road, Jawahar Nagar</li>
                        <li>Kamla Nagar</li>
                        <li>New Delhi - 110092</li>
                    </ul>
                    <p className='my-4'>+919315561624</p>
                    <p className='mb-4'>Open until 09:30 PM</p>
                    <hr className='w-[95%] mx-auto my-3' />

                    <div className='flex justify-center space-x-4'>
                        <Button>MAP</Button>
                        <Button>WEBSITE</Button>
                        <Button>GET IN TOUCH</Button>
                    </div>
                </div>
                <div className='border w-[30%] text-left p-6  '>
                    <h4 className='text-[20px] font-bold'  >Ajmal Perfumes - Exclusive Stores</h4>
                    <hr className='w-[95%] mx-auto my-3' />
                    <p className='mb-3'>V3S Mall</p>
                    <ul>
                        <li>No G116A, GF, V3S East Centre, PN 12, Commercial Cplx, Swasthya Vihar</li>
                        <li>Laxmi Ngr</li>
                        <li>New Delhi - 110092</li>
                    </ul>
                    <p className='my-4'>+918448750782</p>
                    <p className='mb-4'>Open until 09:30 PM</p>
                    <hr className='w-[95%] mx-auto my-3' />

                    <div className='flex justify-center space-x-4'>
                        <Button>MAP</Button>
                        <Button>WEBSITE</Button>
                        <Button>GET IN TOUCH</Button>
                    </div>
                </div>
                <div className='border w-[30%] text-left p-6  '>
                    <h4 className='text-[20px] font-bold'  >Ajmal Perfumes - Exclusive Kiosks</h4>
                    <hr className='w-[95%] mx-auto my-3' />
                    <p className='mb-3'>Ambience Mall Gurgaon</p>
                    <ul>
                        <li>No 6UB, Ground Floor, Bungalow Road, Jawahar Nagar</li>
                        <li>Kamla Nagar</li>
                        <li>Near The Leela Hotel</li>
                    </ul>
                    <p className='my-4'>+918657519504</p>
                    <p className='mb-4'>Open until 09:30 PM</p>
                    <hr className='w-[95%] mx-auto my-3' />

                    <div className='flex justify-center space-x-4'>
                        <Button>MAP</Button>
                        <Button>WEBSITE</Button>
                        <Button>GET IN TOUCH</Button>
                    </div>
                </div>
                <div className='border w-[30%] text-left p-6  '>
                    <h4 className='text-[20px] font-bold'  >Ajmal Perfumes - Exclusive Kiosks</h4>
                    <hr className='w-[95%] mx-auto my-3' />
                    <p className='mb-3'>Reach Airia Mall</p>
                    <ul>
                        <li>No 6UB, Ground Floor, Bungalow Road, Jawahar Nagar</li>
                        <li>Kamla Nagar</li>
                        <li>New Delhi - 110007</li>
                    </ul>
                    <p className='my-4'>+919321976379</p>
                    <p className='mb-4'>Open until 09:30 PM</p>
                    <hr className='w-[95%] mx-auto my-3' />

                    <div className='flex justify-center space-x-4'>
                        <Button>MAP</Button>
                        <Button>WEBSITE</Button>
                        <Button>GET IN TOUCH</Button>
                    </div>
                </div>
            </div >
        </>
    )
}
