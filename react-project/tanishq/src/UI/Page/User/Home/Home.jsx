import React from "react";
import Slider from "./Slider/Main Slider/Slider";
import Giftedslider from "./Slider/Gifted Slider/Giftedslider";
import Banner from "./Banner/Banner";
import CategoryCard from "./CategoryCard/CategoryCard";
import CollectionCard from "./CollectionCard/CollectionCard";
import ConnectCard from "./ConnectCard/ConnectCard";

export default function Home() {
  return (
    <div>
      <div>
        <Slider />
        <Banner
          title={"Most Gifted"}
          sentence={"Check out the most gifted products by our customers"}
        />
        <Giftedslider data={[1, 2, 3, 4, 5, 6, 7, 8]} />
        <Banner
          title={"Shop By Category"}
          sentence={
            "Browse through your favorite categories. We've got them all!"
          }
        />
        <CategoryCard />
        <Banner
          title={"Shop By Collections"}
          sentence={
            "Whatever the occasion, we've got a beautiful piece of jewellery for you."
          }
        />
        <CollectionCard />
        <div>
          <div className="mt-[2rem] mb-[4rem] px-20">
            <img src="../../../../public/GiftOf Choice/GiftOfChoice.jpg" />
          </div>
        </div>
        <Banner
          title={"Top Sellers"}
          sentence={"Love the most to bought the most"}
        />
        <CollectionCard />

        <Banner
          title={"New For You!"}
          sentence={"Our latest releases, just for you !"}
        />
        <ConnectCard />
      </div>
    </div>
  );
}
