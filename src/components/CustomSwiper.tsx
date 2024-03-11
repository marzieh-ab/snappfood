import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper/core";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardItem from "./CardItem";
type Slide = {
 name: string;
 img: string;
 text?: string;
 rate?: string;
 score: string;
 logo: string;
 gift?: string;
 discount?: string;
};

type CustomSwiperProps = {
 slides: Slide[];
 spaceBetween?: number;
};

const CustomSwiper = ({ slides, spaceBetween  }:CustomSwiperProps) => {
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

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [slides]);

  return (
    <div>
      <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={4}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {slides.slice(0, 7).map((suggestion) => {
             
              return (
                <SwiperSlide
                  style={{
                    width: "306px",
                    height: "25rem",
                    marginLeft: "16px",
                  }}
                >
                  <CardItem
                    name={suggestion.name}
                    img={suggestion.img}
                    text={suggestion.text}
                    rate={suggestion.rate}
                    score={suggestion.score}
                    logo={suggestion.logo}
                    gift={suggestion.gift}
                    discount={suggestion.discount}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-button-next  swiper-button ">
            <button className="next-button  btn-next" onClick={goToNextSlide}>
              <ArrowForwardIosIcon sx={{ color: " rgb(255, 0, 166);" }} />
            </button>
          </div>
          <div className="  swiper-button-prev swiper-button ">
     
            <button className="prev-button  btn-prev" onClick={goToPrevSlide}>
              <ArrowBackIosIcon sx={{ color: " rgb(255, 0, 166);" }} />
            </button>
          </div>
    </div>
  );
};

export default CustomSwiper;
