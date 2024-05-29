import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import default carousel styles
import Cardcom from './Cardcom';

// import data from "./data.json"

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 7 // Adjusted items to display 7 items
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slider = ({ data }) => {
    return (
        <div className="w-[1470px] mx-auto">
            {data && <Carousel
                responsive={responsive}
                arrows={true}
                infinite={false}  >

                {data?.map?.((item) => {
                    return <div>
                        <Cardcom key={item?.id} item={item} />
                    </div>
                })}
            </Carousel>}
        </div>
    );
};

export default Slider;


