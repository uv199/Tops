import React from "react";

export default function Header() {
  return (
    <div>
      <div className="text-center py-2.5 text-sm m-0 text-white bg-red-600">
        <div className="container">
          <div className="tt-row padding-top:10px;min-height:0px;">
            <div className="tt-description font-size:14px; line-height:21px; font-weight:400;">
              {" "}
              Get Rs 100 Off on Prepaid Orders | Free Shipping
              All&nbsp;Over&nbsp;India
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f7f8fa] border-b border-gray-200 text-[#777777] flex px-2 py-1 justify-around">
        <div className="tt-desctop-menu">
          <nav>
            <ul className="flex gap-5 text-sm py-2 m-0 items-center">
              <li className="dropdown tt-megamenu-col-01 submenuarrow tt-submenu">
                <a href="#">
                  <span>Track Order</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="/collections/all">
                  <span>All Products</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="/collections/casual-backpacks">
                  <span>Casual Backpacks</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="/collections/professional">
                  <span>Professional</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="/collections/travelbags2021">
                  <span>Travel</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="/collections/sports">
                  <span>Sports</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="/collections/school-bags">
                  <span>School Bags</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="/pages/corporate-gifting">
                  <span>Corporate gifting</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="/collections/best-offer">
                  <span>Best Offer</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="/collections/lunch-bags">
                  <span>Lunch Bags</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="https://urbantribe.in/blogs/">
                  <span>Blogs</span>
                </a>
              </li>
              <li className="dropdown tt-megamenu-col-01">
                <a href="/pages/contact-us">
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <input
          name="type"
          className="bg-gray-400 text-white placeholder:text-white"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
