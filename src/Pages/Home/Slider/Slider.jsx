import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './slider.css';
// import required modules
import { Autoplay, Pagination } from "swiper";

import first from '../../../assets/img/1.jpg';
import second from '../../../assets/img/2.jpg';
import three from '../../../assets/img/3.jpg';
import four from '../../../assets/img/4.jpg';


const Slider = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    const autoplay = {
        delay: 3500,
        disableOnInteraction: false,
    };



    return (
        <div className="mt-[1px]">
            <>
                <Swiper
                    pagination={pagination}
                    autoplay={autoplay}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="">
                            <img src={first} alt="" className="opacity-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img src={second} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img src={three} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img src={four} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>

    );
};

export default Slider;