import React from 'react'
import Banner from './Banner/Banner'
import Giftedslider from './Slider/Gifted Slider/Giftedslider'
import CategoryCard from './CategoryCard/CategoryCard'
import Slider from '../Home/Slider/Main Slider/Slider'
import CollectionCard from './CollectionCard/CollectionCard'
import ShopByGenderCard from './ShopByGenderCard/ShopByGenderCard'
import ExploreMore from './ExploreMore/ExploreMore'
import ConnectCard from './ConnectCard/ConnectCard'


export default function Home() {
  
  
  
  
  return (
    <div>
        <div>
            <Slider/>
            <Banner title={"Most Gifted"}
             sentence={"Check out the most gifted products by our customers"}/>
            <Giftedslider />
          
            <Banner
          title={"Shop By Category"}
          sentence={
            "Browse through your favorite categories. We've got them all!"
          }/>
            <CategoryCard />
            <Banner
          title={"Shop By Collections"}
          sentence={
            "Whatever the occasion, we've got a beautiful piece of jewellery for you."
          }
        />
            <CollectionCard/>
            <div className='mt-[2rem] mb-[4rem] px-20'>
            <img src="../../../../public/GiftOf Choice/GiftOfChoice.jpg"  />
        </div>
            <Banner
          title={"Shop By Gender"}
          sentence={"First-class jewelry for first-class Men, Women & Children."}
        />
           
            <ShopByGenderCard/>
            <Banner
          title={"New For You!"}
          sentence={"Our latest releases, just for you !"}
        />
            <ExploreMore/>
            <Banner
          title={"Connect With Us"}
          sentence={"We are always available to guide you at your convenience."}
        />
            <ConnectCard/>
        </div>
    </div>
  )
}
