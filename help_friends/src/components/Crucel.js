        import React, { useState } from 'react';
        import {
            Carousel,
            CarouselItem,
            CarouselControl,
            CarouselIndicators,
            CarouselCaption
        } from 'reactstrap';
        import 'bootstrap/dist/css/bootstrap.min.css';
        const items = [
            {
                src:'https://www.gndiario.com/sites/default/files/noticias/paz-mundial.jpg',
                altText: 'ESPERANZA',

            },
            {
                src:' https://www.gaceta.unam.mx/wp-content/uploads/2020/08/200831-aca3-des-f1-solidaridad.jpg',
                altText: 'AYUDA',

            },
            {
                src:'https://concepto.de/wp-content/uploads/2018/02/solidaridad-e1519310486935.jpeg',
                altText: 'SOLIDARIDAD',

            }
        ];

        const Crucel = (props) => {
            const [activeIndex, setActiveIndex] = useState(0);
            const [animating, setAnimating] = useState(false);

            const next = () => {
                if (animating) return;
                const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
                setActiveIndex(nextIndex);
            }

            const previous = () => {
                if (animating) return;
                const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
                setActiveIndex(nextIndex);
            }

            const goToIndex = (newIndex) => {
                if (animating) return;
                setActiveIndex(newIndex);
            }

            const slides = items.map((item) => {
                return (
                    <CarouselItem
                        onExiting={() => setAnimating(true)}
                        onExited={() => setAnimating(false)}
                        key={item.src}
                    >
                        <img src={item.src} alt={item.altText} width='1700px' height='500px' />
                        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                    </CarouselItem>
                );
            });

            return (
                <div>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>

            );
        }

        export default Crucel;