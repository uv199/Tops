import React from 'react'

import data from "../data.json"
import data2 from "../datatwo.json"
import data3 from "../datathree.json"
import Footer from "./Footer"
import Arrivals from '../Arrivals';
import Slider from '../Slider';
import Bestseller from '../Bestseller';
import PopularCat from '../PopularCat'
import Heroimgslider from '../Heroimgslider'
import Instatitle from './Instatitle'


export default function Home() {
    return (
        <div>
            <Heroimgslider />
            <Arrivals />
            <Slider data={data} />
            <Bestseller />
            <Slider data={data2} />
            <PopularCat />
            <Slider data={data3} />
            <Instatitle />
            <Footer />
        </div>
    )
}
