import React from 'react'
import data from '../../Ui/Components/data.json'
import data2 from "../../Ui/Components/datatwo.json"
import data3 from "../../Ui/Components/datathree.json"
import Bestseller from '../Components/Bestseller';
import PopularCat from '../Components/PopularCat';
import Heroimgslider from '../Components/Heroimgslider';
import Instatitle from '../Components/Instatitle';
import Footer from '../Components/Footer';
import Arrivals from '../Components/Arrivals';
import Slider from '../Components/Slider';


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
