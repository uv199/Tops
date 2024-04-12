import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    { src: 'https://www.layers.shop/cdn/shop/files/DEADPOL_Banner_1..jpg?v=1694692351&width=1860' },
    { src: 'https://www.layers.shop/cdn/shop/files/Marvel_24_Banner1.jpg?v=1705318216&width=1860' },
];

export default function Carou(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
                <img src={item.src} alt={item.altText} className='w-100' role='button' />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div>
            <Carousel interval={4000} ride="carousel" fade={true} pause={false} activeIndex={activeIndex} next={next} previous={previous} {...args}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
            </Carousel>
        </div>

    );
}