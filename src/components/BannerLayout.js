// src/BannerLayout.js

import React from 'react';
import Slider from 'react-slick';
import '../styles/BannerLayout.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerLayout = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="banner-container">
            <div className="main-banner">
                <img src="https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/sample1.jpg?v=1718943187475" alt="Main Banner" />
                <div className="main-banner-text">
                    <h2>Дизайн интерьера комнаты: интересные идеи оформления</h2>
                </div>
            </div>
            <div className="side-banner">
                <Slider {...settings}>
                    <div className="side-banner-slide">
                        <img src="https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/Screenshot%202024-06-21%20101853.png?v=1718943592438" alt="Side Banner 1" />
                    </div>
                    <div className="side-banner-slide">
                        <img src="https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/Screenshot%202024-06-21%20103014.png?v=1718944248560" alt="Side Banner 2" />
                       
                    </div>
                    <div className="side-banner-slide">
                        <img src="https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/Screenshot%202024-06-21%20101853.png?v=1718943592438" alt="Side Banner 3" />
                       
                    </div>
                </Slider>
            </div>
         
        </div>
    );
};

export default BannerLayout;
