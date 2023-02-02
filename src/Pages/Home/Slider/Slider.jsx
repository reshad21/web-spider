import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './slider.css';
// import required modules
import { Autoplay, Pagination } from "swiper";

import first from '../../../assets/images/1.jpg';
import second from '../../../assets/images/2.jpg';
import three from '../../../assets/images/3.jpg';
import four from '../../../assets/images/4.jpg';


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
                            <img src={first} alt="" srcset="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img src={second} alt="" srcset="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img src={three} alt="" srcset="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <img src={four} alt="" srcset="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>

    );
};

export default Slider;