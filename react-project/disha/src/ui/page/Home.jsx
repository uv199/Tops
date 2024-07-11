import React from "react";
import { Button, Card, CardBody, UncontrolledCarousel } from "reactstrap";
import backgroundimg from "../../Images/backgroundimg.avif";
import video from "../../Images/video.mp4";
import CardCom from "../components/CardCom";
import CardCom2 from "../components/CardCom2";
import Slider from "react-slick";
import image1 from "../../Images/spot_img1.jpg"
import image2 from "../../Images/spot_img2.jpg"
import image3 from "../../Images/spot_img3.jpg"
import image4 from "../../Images/spot_img4.jpg"
import image5 from "../../Images/spot_img5.jpg"
import image6 from "../../Images/spot_img6.jpg"
import image7 from "../../Images/spot_img7.jpg"


export default function Home() {
  var settings = {
    infinite: true,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <div>
      {/* <--------------------- Carousel ----------------------> */}
      <div className="Carousel mx-16 my-4 ">
        <UncontrolledCarousel
          className="rounded-xl overflow-hidden"
          items={[
            {
              key: 1,
              src: "https://veirdo.in/cdn/shop/files/offer_banner_new_model_1_200c8d48-dd3e-499c-ab32-21995c8d48fc.jpg?v=1718601500",
            },
            {
              key: 2,
              src: "https://veirdo.in/cdn/shop/files/2_3.png?v=1707482733",
            },
            {
              key: 3,
              src: "https://veirdo.in/cdn/shop/files/3_1_985cdfaf-8c6f-4b15-8829-2cbe26d58d6e.png?v=1707476950",
            },
            {
              key: 4,
              src: "https://veirdo.in/cdn/shop/files/4_9405103b-1e93-4ceb-a9a9-216c17798a78.png?v=1707477126",
            },
            {
              key: 5,
              src: "https://veirdo.in/cdn/shop/files/sale_7.png?v=1707811353",
            },
          ]}
        />
      </div>
      <div className="cards mx-16">
        <h1 className="font-bold text-xl text-center pb-4">OUR BESTSELLERS</h1>
        <div className="grid grid-cols-4 gap-3 ">
          {[1, 2, 3, 4].map(() => {
            return <CardCom />;
          })}
        </div>
        <div className="flex justify-center mt-3">
          <Button className="bg-green-400 shadow-[3px_3px_0_0_red] m-3 border-black text-black ">
            <p className="mx-5 font-medium">SEE MORE BESTSELLERS</p>
          </Button>
        </div>
        <div className="text-center my-4">
          <h1 className="font-bold m-3">TOP CATEGORIES</h1>
        </div>
        <div className="flex gap-3 mx-16">
          {[1, 2, 3, 4].map((e) => {
            return (
              <Card>
                <img
                  className="rounded-lg m-2"
                  alt="Sample"
                  src="https://veirdo.in/cdn/shop/files/couple_tees_1.jpg?v=1710485935&width=360"
                />
                <CardBody className="text-center">
                  <button className="font-bold">UNISEX TEES</button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="image w-full my-5 px-16 relative">
        <img src={backgroundimg} className="rounded w-full h-[500px] " />
        <div className="absolute left-10 top-10 flex justify-center gap-x-44 items-center w-full ">
          <div>
            <img
              src="https://veirdo.in/cdn/shop/files/10.png?v=1707376744&width=360"
              alt=""
            />
          </div>
          {/* -------------video----------- */}
          <div className="relative w-[310px] h-[450px] rotate-2 bg-white rounded-lg">
            <video
              autoPlay
              loop
              muted
              className="mt-3 p-0 w-[300px] h-[430px] rounded"
            >
              <source className="p-0" src={video} />
            </video>
            <div className="absolute flex gap-1 top-1 left-1">
              <div className="bg-red-600 h-[8px] w-[8px] rounded-[50%]"></div>
              <div className="bg-yellow-300 h-[8px] w-[8px] rounded-[50%]"></div>
              <div className="bg-green-600 h-[8px] w-[8px] rounded-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-center my-4">NEW ARRIVALS</h1>
        <div className="grid grid-cols-4 gap-3 mx-16">
          {[1, 2, 3, 4].map(() => {
            return <CardCom />;
          })}
        </div>
        <div className="flex justify-center mt-3">
          <Button className="bg-green-400 shadow-[3px_3px_0_0_red] m-3 border-black text-black ">
            <p className="mx-5 font-medium">SEE ALL NEW ARRIVALS</p>
          </Button>
        </div>
      </div>
      <div className="mx-16 my-6">
        <div className="image w-full relative">
          <img src={backgroundimg} className="rounded w-full h-screen" />
          <div className="absolute w-full flex items-center h-full left-10 top-10 justify-evenly gap-1 ">
            <div className="w-[350px]">
              <h1 className="font-bold text-white text-2xl">ABOUT US</h1>
              <p className="font-bold text-white">
                Be bold, be you, be Veirdo! The coolest streetwear brand for
                Gen-Z is here! Veirdo is all about standing out in the crowd,
                expressing yourself with creativity and making an uber stylish
                statement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[50px]">
              <div className="bg-white p-1 rotate-3 rounded-md">
                <img
                  className="h-[200px]"
                  src="https://veirdo.in/cdn/shop/files/1_1_d64e47da-3937-4108-bcdc-c35b77c49686.png?v=1707820466&width=360"
                  alt=""
                />
              </div>
              <div className="bg-white p-1 -rotate-6 rounded-md -translate-y-16">
                <img
                  className="h-[200px]"
                  src="https://veirdo.in/cdn/shop/files/2_1_719a1499-75ee-476b-ad06-0ad9172512fb.png?v=1707820474&width=360"
                  alt=""
                />
              </div>
              <p></p>
              <div className="bg-white p-1 -rotate-6 rounded-md -translate-y-24">
                <img
                  className="h-[200px]"
                  src="https://veirdo.in/cdn/shop/files/3_4_04c128ea-5d2b-493e-a4cf-34ba6e791134.png?v=1707820474&width=360"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <-------------------imgfooter-----------------> */}
          <div className=" absolute left-0 right-0 bottom-0 p-4 rounded-br-xl rounded-bl-xl bg-yellow-300">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-white font-bold text-5xl text-right">
                  We are
                </p>
              </div>
              <div className="">
                <Slider className="max-h-[50px]" {...settings}>
                  <div>
                    <p className="font-bold text-3xl">bold</p>{" "}
                    <span>never cult</span>
                  </div>
                  <div>
                    <p className="font-bold text-3xl">unapologetic </p>
                    <span>But never disrespectful</span>
                  </div>
                  <div>
                    <p className="font-bold text-3xl">explicit</p>{" "}
                    <span>But never assertive</span>{" "}
                  </div>
                  <div>
                    <p className="font-bold text-3xl">rebellious</p>{" "}
                    <span>But never scandalous</span>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-16">
        <h1 className="font-bold text-center my-4">GEEKS ASSEMBLE!</h1>
        <div className="grid grid-cols-6 gap-2 ">
          {[1, 2, 3, 4, 5, 6].map((e) => {
            return <CardCom2 />;
          })}
        </div>
        <div className="flex justify-center mt-3">
          <Button className="bg-green-400 shadow-[3px_3px_0_0_yellow] m-3 border-black text-black ">
            <p className="mx-5 font-medium">SEE ALL MERCH</p>
          </Button>
        </div>
      </div>
      <div className="flex gap-1">
        <img
          className="w-full"
          src="https://veirdo.in/cdn/shop/files/1_5.png?v=1707824295&width=360"
          alt=""
        />
        <img
          className="w-full"
          src="https://veirdo.in/cdn/shop/files/2_5_8da632cf-abda-496a-9192-019951361e02.png?v=1707824295&width=360"
          alt=""
        />
      </div>
      <div className="cards mx-16">
        <h1 className="font-bold text-center my-4">OUR UNISEX COLLECTION</h1>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map(() => {
            return <CardCom />;
          })}
        </div>
        <div className="flex justify-center mt-3">
          <Button className="bg-green-400 shadow-[3px_3px_0_0_yellow] m-3 border-black text-black ">
            <p className="mx-5 font-medium">EXPLORE ALL PRODUCTS</p>
          </Button>
        </div>

        <div className="mx-16 rounded border relative">
          <img
            className="w-full"
            src="https://img.freepik.com/premium-photo/hard-light-blue-abstract-creative-background-design_851755-185372.jpg?w=996"
            alt=""
          />
          <div className="absolute top-11 text-center text-xl w-full">
            <h1 className="text-4xl text-blue-700 font-bold">SPOT</h1>
            <h1 className="text-4xl text-blue-700 font-bold">VEIRDO BRO’S</h1>
            <p className="text-blue-950">
              use #veirdo with your fits on insta to get spotted here
            </p>
          </div>

          <div className="group relative w-[100px]">

            <img className="peer absolute group-hover:opacity-70 top-0" src={image1} alt="" />
            <div className="absolute bg-red-600 group-hover:!bg-black w-full h-full opacity-0 group-hover:!opacity-100">

              <p className=" top-0   text-white "> test test</p>
            </div>
          </div>
          <div className=" absolute top-48 grid grid-cols-5 mx-16 gap-2">
            <div className="relative border-4 border-white rounded">
              <img
                className="peer h-[200px] w-[200px] cursor-pointer"
                src={image1}
              />
              {/* <div className="absolute top-0 z-10 opacity-0 group-hover:opacity-100"> */}
              <p className="absolute top-0  bg-black opacity-0 z-40 !peer-hover:opacity-100 text-white text-center mt-10">Enter the flipside where fashion is fearless and style</p>
              {/* </div> */}
            </div>
            <img
              className="h-[200px] w-[200px] border-4 border-white rounded cursor-pointer"
              src={image2}
            />
            <img
              className="h-[400px] w-[350px] border-4 border-white rounded cursor-pointer row-span-2 col-span-2 m-2"
              src={image3}
            />
            <img
              className="h-[200px] w-[200px] border-4 border-white rounded cursor-pointer"
              src={image4}
            />
            <img
              className="h-[200px] w-[200px] border-4 border-white rounded cursor-pointer"
              src={image5}
            />
            <img
              className="h-[200px] w-[200px] border-4 border-white rounded cursor-pointer"
              src={image6}
            />
            <img
              className="h-[200px] w-[200px] border-4 border-white rounded cursor-pointer"
              src={image7}
            />
          </div>
        </div>

        <h1 className="font-bold text-center my-4">VEIRDO FEATURED ON</h1>
        <div className="mb-5">
          <marquee className="" behavior="" direction="">
            <div className="flex gap-5">
              {[1, 2, 3, 4].map(() => {
                return (
                  <>
                    <img
                      src="https://veirdo.in/cdn/shop/files/Screenshot_2023-12-12_at_4.14_2.png?v=1706600616"
                      alt=""
                    />
                    <img
                      src="https://veirdo.in/cdn/shop/files/image_204.png?v=1706600607"
                      alt=""
                    />
                    <img
                      src="https://veirdo.in/cdn/shop/files/Screenshot_2023-12-12_at_4.14_1_7d99594b-48f3-44f7-92b1-e9ad88b1bea2.png?v=1705387789"
                      alt=""
                    />
                    <img
                      src="https://veirdo.in/cdn/shop/files/Screenshot_2023-12-12_at_4.14_4.png?v=1706600616"
                      alt=""
                    />
                  </>
                );
              })}

            </div>

          </marquee>
        </div>

      </div>
    </div>
  );
}
