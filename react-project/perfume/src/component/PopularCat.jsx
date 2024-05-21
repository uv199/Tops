import React from 'react'

export default function PopularCat() {
  return (



    <div className="mt-5 pt-5 pb-5 mb-5">
      <div><i className="text-5xl title italic self-start block text-left mb-5 pb-3">Popular Categories</i></div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="col-span-1 sm:col-span-1 cursor-pointer">
          <div className="popularImg relative overflow-hidden">
            <div className="popularImg_img popularImg_img--img1"></div>
            <div className="popularImg_txt center">
              <ul className="list-none mb-0">
                <li className="mr-4"><a href="#">Shop all Women's</a></li>
                <li className="mr-4"><a href="#">Best sellers</a></li>
                <li className="mr-4"><a href="#">New Arrivals</a></li>
                <li><a href="#">Gift sets</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-1 mt-3 sm:mt-0">
          <div className="popularImg relative overflow-hidden cursor-pointer">
            <div className="popularImg_img popularImg_img--img2"></div>
            <img src="/public/images/shop-men.jpg" className="w-full" alt="shop-men" />
            <div id="popularCategoryBlockright"></div>
            <div className="popularImg_txt right">
              <ul className="list-none mb-0">
                <li><a href="#">Shop all Men's</a></li>
                <li><a href="#">Best sellers</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Gift sets</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 flex justify-between items-center '>
        <i className='text-5xl title font-italic'>Trending Products </i>
        <a href="#" className="flex items-center inherit-color text-black hover:text-[#bc8b57]">Discover all <img className="ms-1" width="18px" src="/public/arrow-right.svg" alt="" /> </a>
      </div>


    </div>


  )
}
