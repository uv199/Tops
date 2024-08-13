import {
  Footer,
  FooterIcon,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Foter() {
  return (
    <Footer container className="p-0 ">
      <div className="w-full">
        <div className="flex flex-wrap justify-between sm:flex-nowrap md:flex-wrap py-36 mx-40">
          <div style={{ flex: "0.50" }}>
            <FooterTitle
              className="text-red-600 text-lg"
              title="Customer Service"
            />
            <FooterLinkGroup col className="p-0">
              <ul>
                <li className="text-black hover:!text-red-600">Sign In</li>
                <li className="text-black hover:!text-red-600">View Cart</li>
                <li className="text-black hover:!text-red-600">Help</li>
              </ul>
            </FooterLinkGroup>
          </div>
          <div className="flex-1  ">
            <FooterTitle className="text-red-600 text-lg" title="Contact Us" />
            <FooterLinkGroup col className="p-0 [&>*]:!m-0">
              <ul>
                <p className="max-w-80 ">
                  <span className="text-black font-bold leading-loose">
                    Address:
                  </span>
                  Urban Tribe, Backpack International Pvt LTD, B-8, Pravasi
                  Industrial Estate, Goregaon East, Mumbai- 400101
                </p>
                <p>
                  <span className="text-black font-bold"> Phone:</span> +91
                  9769487901
                </p>
                <p>
                  <span className="text-black font-bold"> Hours:</span> 5 Days a
                  week from 10:00 am to 7.00 pm
                </p>
                <p>
                  <span className="text-black font-bold"> E-mail:</span>
                  <span className="text-red-600  hover:text-black ring-0	">
                    support@urbantribe.in
                  </span>
                </p>
              </ul>
            </FooterLinkGroup>
          </div>
          <div className="flex-1">
            <FooterTitle
              className="text-red-600 text-lg"
              title="NEWSLETTER SIGNUP"
            />
            <p>
              Subscribe to our email and be the first to know about our special
              offers! In addition, we will give you a 15% discount on the next
              order after registration.
            </p>
            <FooterLinkGroup col className="p-0 ">
              <div className="input-group">
                <input
                  className="form-control border-slate-200 hover:!border-red-600	"
                  placeholder="Enter Your Email"
                />
                <button className=" hover:!border-black">Get!</button>
              </div>
            </FooterLinkGroup>
            <div className=" mt-4 flex space-x-6 sm:mt-0 sm:justify-start">
              <FooterIcon
                href="https://www.facebook.com/urbantribeofficial/"
                target="_blank"
                icon={BsFacebook}
              />
              <FooterIcon
                href="https://www.instagram.com/urbantribeindia/"
                target="_blank"
                icon={BsInstagram}
              />
              <FooterIcon
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FUrbanTribetwe"
                target="_blank"
                icon={BsTwitter}
              />
              <FooterIcon
                href="https://www.youtube.com/channel/UCt4aveR9YlnH07gCgNXZwdA"
                target="_blank"
                icon={BsYoutube}
              />
            </div>
          </div>
        </div>
        <p className="text-center py-[20px] text-sm m-0 text-white bg-red-600">
          © UrbanTribe 2022. All Rights Reserved
        </p>
      </div>
    </Footer>
  );
}
