import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import styles from "./Web3ContentTen.module.scss";

const Web3ContentTen = () => {
    return (
        <div className={styles.slider_container}>
            <div className="py-3">
                <h1>Mirror Updates</h1>
                <h5>All the latest updates and community happenings</h5>
            </div>

            {/* update start*/}
            <div className={styles.carousel_slider}>
                <img src="/Assets/Web3Image/carousel.png" alt="" />
            </div>
            {/* update end*/}

            {/* <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className={styles.SwiperSlide}>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide className={styles.SwiperSlide}>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide className={styles.SwiperSlide}>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
            </Swiper> */}
        </div>
    );
};

export default Web3ContentTen;
