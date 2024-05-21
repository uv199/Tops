import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import default carousel styles
import Cardcom from './Cardcom';
import datatwo from './datatwo.json';

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

const Slidertwo = () => {
    return (
        <>
            <div className="w-[1320px] mx-auto pb-5 mb-5">
                <Carousel
                    responsive={responsive}
                    showDots={false} // Hide dots navigation
                    arrows={true} // Show arrows navigation
                    infinite={false} // Enable infinite loop
                >
                    {datatwo.map(perfume => (
                        <Cardcom key={perfume.id} item={perfume} />
                    ))}
                </Carousel>
            </div>


        </>

    );
};





export default Slidertwo;