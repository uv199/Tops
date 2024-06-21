import React from "react";
import { Heart } from "lucide-react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  UncontrolledCarousel,
} from "reactstrap";
import backgroundimg from "../../Images/backgroundimg.avif";
import video from "../../Images/video.mp4";
import CardCom from "../components/CardCom";

export default function Home() {
  return (
    <div>
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
        <div className="flex gap-4">
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
        <div className="absolute left-10 top-10 flex justify-center gap-1 items-center w-full ">
          <div className="">
            <h1 className="font-bold text-white text-2xl">THE FLIQSIDE</h1>
          </div>
          {/* -------------video----------- */}
          <div className="w-[350px] h-[450px] rotate-2 bg-white rounded-lg">
            <video controls className=" p-0 w-[350px] h-[450px]">
              <source className="p-0" src={video} />
            </video>
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
          {/* <---------imgfooter----> */}
          <div className=" absolute left-0 right-0 bottom-0 p-4 rounded-br-xl rounded-bl-xl bg-yellow-300">
            <div className="flex justify-center">
              <p className="text-white font-bold text-3xl text-center">
                We are{" "}
              </p>
              <div className="flex overflow-hidden">
                <marquee behavior="" direction="up">
                  <p className="font-bold text-3xl">bold</p>{" "}
                  <span>never cult</span>
                  <p className="font-bold text-3xl">unapologetic </p>
                  <span>But never disrespectful</span>
                  <p className="font-bold text-3xl">explicit</p>{" "}
                  <span>But never assertive</span>{" "}
                  <p className="font-bold text-3xl">rebellious</p>{" "}
                  <span>But never scandalous</span>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

  <Card
            style={{
              width: "18rem",
            }}
          >
            <img
              className="rounded-xl"
              alt="Sample"
              src="https://veirdo.in/cdn/shop/files/Originals-Beige-Oversized-T-Shirt-Veirdo-6625.jpg?v=1707158469&width=360"
            />
            <CardBody>
              <CardTitle tag="h5">Rs.499</CardTitle>
              <CardText>
                Originals Beige Oversized Chest Graphic Printed Tshirt
              </CardText>
              <hr />
              <button className="font-bold">
                ADD TO CART
                <Heart />
              </button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img
              alt="Sample"
              src="https://veirdo.in/cdn/shop/files/v44.jpg?v=1717407545&width=360"
            />
            <CardBody>
              <CardTitle tag="h5">Rs.499</CardTitle>
              <CardText>
                Veirdo Blue Oversized Back Graphic Printed Tshirt
              </CardText>
              <hr />
              <button className="font-bold">
                ADD TO CART
                <Heart />
              </button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img
              alt="Sample"
              src="https://veirdo.in/cdn/shop/files/Teddy-Printed-Oversized-T-Shirt-Veirdo-9408.jpg?v=1707167484&width=360"
            />
            <CardBody>
              <CardTitle tag="h5">Rs.499</CardTitle>
              <CardText>
                Originals Beige Oversized Chest Graphic Printed Tshirt
              </CardText>
              <hr />
              <button className="font-bold">
                ADD TO CART
                <Heart />
              </button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img
              alt="Sample"
              src="https://veirdo.in/cdn/shop/files/9_0a82b071-8c51-4e44-b9bd-3b61ae449623.jpg?v=1709546813&width=360"
            />
            <CardBody>
              <CardTitle tag="h5">Rs.499</CardTitle>
              <CardText>
                Originals Beige Oversized Chest Graphic Printed Tshirt
              </CardText>
              <hr />
              <button className="font-bold">
                ADD TO CART
                <Heart />
              </button>
            </CardBody>
          </Card>

*/
