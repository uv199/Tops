import React from "react";
import { Facebook, Instagram, ArrowRight } from "lucide-react";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-10 bg-[#333333]">
      <div className="footerCenter">
        <div className="container mx-auto">
          <div className="footerCenterInner">
            <div className="text-center mb-10">
              <h4 className="text-lg font-semibold uppercase">Sign up for our newsletter</h4>
              <p>Receive our latest updates about our products & promotions.</p>
              <div className="flex justify-center mt-4">
                <form
                  method="post"
                  action="/contact#contact_form"
                  id="contact_form"
                  acceptCharset="UTF-8"
                  className="w-full max-w-md"
                >
                  <div className="flex">
                    <input
                      className="form-input w-full rounded-none"
                      type="email"
                      name="contact[email]"
                      placeholder="Your email address..."
                      required
                    />
                    <button className="bg-black text-white px-4 py-2 rounded-none" type="submit">
                      <ArrowRight />
                    </button>
                    <input type="hidden" name="action" value="0" />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                <h3 className="text-lg font-semibold uppercase mb-4">Collections</h3>
                <ul>
                  <li className="mb-2">
                    <a href="/collections/perfume-spray" className="text-[#ddd] hover:text-white no-underline">
                      Perfume Sprays
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/collections/mist" className="text-[#ddd] hover:text-white no-underline">Mist</a>
                  </li>
                  <li className="mb-2">
                    <a href="/collections/solid-perfume" className="text-[#ddd] hover:text-white no-underline">Solid Perfume</a>
                  </li>
                  <li className="mb-2">
                    <a href="/collections/perfumed-creme" className="text-[#ddd] hover:text-white no-underline">Perfume Creme</a>
                  </li>
                  <li className="mb-2">
                    <a href="/collections/foot-spray" className="text-[#ddd] hover:text-white no-underline">Foot Spray</a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                <h3 className="text-lg font-semibold uppercase mb-4">&nbsp;</h3>
                <ul>
                  <li className="mb-2">
                    <a href="/collections/beard-balm" className="text-[#ddd] hover:text-white no-underline">Beard Balm</a>
                  </li>
                  <li className="mb-2">
                    <a href="/collections/candles" className="text-[#ddd] hover:text-white no-underline">Candles</a>
                  </li>
                  <li className="mb-2">
                    <a href="/collections/reed-diffuser" className="text-[#ddd] hover:text-white no-underline">Reed Diffuser</a>
                  </li>
                  <li className="mb-2">
                    <a href="/collections/gift-packs" className="text-[#ddd] hover:text-white no-underline">Gift Packs</a>
                  </li>
                  <li className="mb-2">
                    <a href="/products/order-samples" className="text-[#ddd] hover:text-white no-underline">Samples</a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                <h3 className="text-lg font-semibold uppercase mb-4">Customer Service</h3>
                <ul>
                  <li className="mb-2">
                    <a href="/pages/contact" className="text-[#ddd] hover:text-white no-underline">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                <h4 className="text-lg font-semibold uppercase mb-4">Support</h4>
                <ul>
                  <li className="mb-2">
                    <a href="/pages/shipping" className="text-[#ddd] hover:text-white no-underline">Shipping</a>
                  </li>
                  <li className="mb-2">
                    <a href="/pages/returns-and-exchanges" className="text-[#ddd] hover:text-white no-underline">Returns and exchanges</a>
                  </li>
                  <li className="mb-2">
                    <a href="/pages/privacy-policy" className="text-[#ddd] hover:text-white no-underline">Privacy policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="/pages/terms-and-conditions" className="text-[#ddd] hover:text-white no-underline">Terms and conditions</a>
                  </li>
                  <li className="mb-2">
                    <a href="/policies/refund-policy" className="text-[#ddd] hover:text-white no-underline">Refund policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="/policies/terms-of-service" className="text-[#ddd] hover:text-white no-underline">Terms of Service</a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                <img
                  src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/comp-logo-white.png"
                  alt="Logo"
                  className="mb-5"
                />
                <div className="flex">
                  <a
                    href="https://www.facebook.com/profile.php?id=61553313190841"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ddd] hover:text-white no-underline mr-2"
                  >
                    <Facebook size={30} />
                  </a>
                  <a
                    href="https://www.instagram.com/house_of_em5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ddd] hover:text-white no-underline"
                  >
                    <Instagram size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700 bg-[#2A2929]">
        <div className="container mx-auto">
          <p>All rights reserved - Houseofem5</p>
          <img
            src="https://cdn.shopify.com/s/files/1/0175/6875/9862/t/20/assets/comp-payment.jpg"
            alt="Payment Methods"
            className="mx-auto mt-4"
          />
        </div>
      </div>
    </footer>
  );
}
