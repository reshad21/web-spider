// import React from 'react';
// import React from "react";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import flower from '../../../assets/images/sunflower.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Member.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const Members = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState();
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flower} alt='' />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Members;