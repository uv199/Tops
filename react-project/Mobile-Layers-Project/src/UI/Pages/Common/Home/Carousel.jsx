import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    { src: 'https://www.layers.shop/cdn/shop/files/Web_banner_7_12.png?v=1702019407&width=1860' },
    { src: 'https://www.layers.shop/cdn/shop/files/8_eff7d432-be32-4b96-aa9e-95e881cb6cb4.png?v=1681994691&width=1860' },
    { src: 'https://www.layers.shop/cdn/shop/files/collection_banners_1_1.jpg?v=1693591120&width=1860' },
    { src: 'https://www.layers.shop/cdn/shop/files/collection_banners_3_1.jpg?v=1693573648&width=1860' },
];

export default function Caro(args) {
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
            <Carousel interval={3000} ride="carousel" fade={true} pause={false} activeIndex={activeIndex} next={next} previous={previous} {...args}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
            </Carousel>
        </div>

    );
}
