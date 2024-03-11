// MySwiper.tsx

import React, { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const MySwiper: React.FC = () => {
    const swiperRef = useRef<SwiperCore | null>(null);

    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const goToPrevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <div>
            <Swiper
                navigation={{
                    nextEl: '.next-button',
                    prevEl: '.prev-button',
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>

            <button className="prev-button" onClick={goToPrevSlide}>
                Previous
            </button>
            <button className="next-button" onClick={goToNextSlide}>
                Next
            </button>
        </div>
    );
};

export default MySwiper;
