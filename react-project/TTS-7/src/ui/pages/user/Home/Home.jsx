import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./homepage.css";
import CardComponent from "../../../componenet/Card/CardComponent";

export default function Home() {
  const images = [
    {
      url: "'https://www.houseofem5.com/cdn/shop/files/6_8afb9bf7-e051-485d-8af2-6a7267f20a59_1512x.png?v=1666160114'",
    },
    {
      url: "https://www.houseofem5.com/cdn/shop/files/3_b6dff324-5af8-4a3c-bcb6-8dcb3795083b_1512x.png?v=1664549555",
    },
    {
      url: "https://www.houseofem5.com/cdn/shop/files/House_Of_EM5_2e00956d-bbda-4c55-bd24-c5e1b885df32_1512x.png?v=1674485980",
    },
  ];

  const scroll = [
    {
      url: "'https://www.houseofem5.com/cdn/shop/files/Nomade_-_Box_2b703f66-4f4a-412b-ad8a-82e9048e5d0e_360x.png?v=1718109037'",
    },
    {
      url: "https://www.houseofem5.com/cdn/shop/files/RedTob-Box_360x.png?v=1718109460",
    },
    {
      url: "https://www.houseofem5.com/cdn/shop/files/Rocks-Notes_360x.jpg?v=1694518329",
    },
  ];

  return (
    <div className="main section ">
      <SimpleImageSlider
        width={1349}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />

      <div
        className="flex  gap-20"
        style={{
          backgroundColor: "#f6f6f6",
          height: "200px ",
          alignItems: "center",
        }}
      >
        <div className=" mt-3" style={{ marginBottom: "100px" }} />
        <div>
          <img src="https://www.houseofem5.com/cdn/shop/files/Em5_quality-2.png?v=1706856213" />
        </div>
        <div>
          <img src="https://www.houseofem5.com/cdn/shop/files/Em5_quality-3.png?v=1706856239" />
        </div>
        <div>
          <img src="https://www.houseofem5.com/cdn/shop/files/Em5_quality-4.png?v=1706856256" />
        </div>
        <div>
          <img src="https://www.houseofem5.com/cdn/shop/files/Em5_quality-5.png?v=1706856276" />
        </div>
        <div>
          <img src="https://www.houseofem5.com/cdn/shop/files/Em5_quality-6.png?v=1706856299" />
        </div>
        <div>
          <img src="https://www.houseofem5.com/cdn/shop/files/Em5_quality-1.png?v=1706856314" />
        </div>
      </div>
      <div className="text-center">
        <h1>House of EM5 - A Symphony of Fragrance</h1>
      </div>
      <div style={{ fontFamily: "Helvetica", textAlign: "center" }}>
        <p>
          Indulge in the enchanting world of perfumes with House of EM5, the
          best perfume brand in India. Whether you seek a captivating perfume
          for men or a mesmerizing fragrance for women, our curated collection
          has something for everyone. Experience the allure of our
          <b> perfume sprays, solid perfumes</b>, body mists, scented candles,
          <b>roll-ons </b>, reed diffusers, perfumed crème, and beard balms. Buy
          perfume online and immerse yourself in a sensory journey that reflects
          your unique style and personality. Elevate every moment with the magic
          of House of EM5!
        </p>
        <div>
          <div className="mt-20">
            <h2>NEW ARRIVALE</h2>
          </div>
          <div className="grid grid-cols-5 gap-[10px] p-3">
            {[1, 2, 3, 4, 5].map((e) => {
              return <CardComponent />;
            })}
          </div>
        </div>

        <div>
          <div className="flex gap-[18px] img-parent">
            <div className="img-child w-[70%]">
              <img
                src="https://www.houseofem5.com/cdn/shop/files/6_8afb9bf7-e051-485d-8af2-6a7267f20a59_1512x.png?v=1666160114"
                className="w-full"
              />
            </div>
            <div className="grid w-[30%]">
              <img
                src="https://www.houseofem5.com/cdn/shop/files/5_72939497-92e9-4d80-971b-208739eba816_540x.png?v=1664549708"
                className="w-full"
              />
              <img
                src="https://www.houseofem5.com/cdn/shop/files/7_a9b59096-4814-47ff-b073-27e3024eac37_540x.png?v=1664549684"
                className="w-full"
              ></img>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-20">
            <h2>BEST SELLERS</h2>
          </div>
          <div className="grid grid-cols-5 gap-[10px] p-3">
            {[1, 2, 3, 4, 5].map((e) => {
              return <CardComponent />;
            })}
          </div>
        </div>
        <div className="w-screen">
          <img
            className="w-full my-[30px]"
            src="https://www.houseofem5.com/cdn/shop/files/House_Of_EM5_-_Mid_page_-_mist_banner_1512x.png?v=1718695322 "
          />
        </div>
        <div className="container mt-3">
          <h3 src="velaHomeTitle velaTitle text-center mt-10">Gifiting</h3>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-[10px] p-3">
        {[1, 2, 3, 4, 5].map((e) => {
          return <CardComponent />;
        })}
      </div>
      <div className="w-screen ">
        <img
          className="w-full"
          src="https://www.houseofem5.com/cdn/shop/files/8_0eaf5fdd-6dad-44e8-87b3-aa8c2690509f_1512x.png?v=1664549897"
        />
      </div>

      {/* ----------------last section----------- */}
      <div className="mt-5 grid grid-cols-4 gap-[15px] ">
        <div className="group overflow-hidden ">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Perfume_Spray_76bad37f-e982-4c83-966d-061b26949fc8_360x.png?v=1712752449"
            className=" hover:scale-110 transition-all duration-900"
          />
        </div>
        <div className="group overflow-hidden ">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Solid_Perfume_47edc1b6-126e-4f73-95b0-5be7387c7052_360x.png?v=1674486617"
            className=" hover:scale-110 transition-all duration-900"
          />
        </div>
        <div className="group overflow-hidden ">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Beard_Balm_360x.png?v=1663331956"
            className=" hover:scale-110 transition-all duration-900"
          />
        </div>
        <div className="group overflow-hidden ">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Candles_360x.png?v=1663331956"
            className=" hover:scale-110 transition-all duration-900"
          />
        </div>
        <div className="group overflow-hidden ">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/EM5_-_Catalogue_images_website_-_Mist_3530ae95-299b-4d3b-a75b-50c60af7c522_360x.png?v=1718701561 "
            className=" hover:scale-110 transition-all duration-900"
          />
        </div>
        <div className="group overflow-hidden ">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Reed-Diffuser-Catalogue-Image_360x.png?v=1678101778"
            className=" hover:scale-110 transition-all duration-900"
          />
        </div>
        <div className="group overflow-hidden ">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/R_Foot_Spray_-_Catalogue_360x.png?v=1712658556"
            className=" hover:scale-110 transition-all duration-900"
          />
        </div>
        <div className="group overflow-hidden ">
          <img
            src="https://www.houseofem5.com/cdn/shop/files/Gift-packs-Category-images_360x.png?v=1687239624"
            className=" hover:scale-110 transition-all duration-900"
          />
        </div>
      </div>
    </div>
  );
}
