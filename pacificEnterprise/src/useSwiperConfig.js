import { useState } from 'react'; 
import { Pagination, Navigation } from 'swiper/modules';
import './index.css';

export const useSwiperConfig = () => {
    const [swiperConfig] = useState({
        slidesPerView: 5, 
        spaceBetween: 10, 
        loop: true,      
        pagination: {
            clickable: true, 
        },
        navigation: true, 
        modules: [Pagination, Navigation], 
        breakpoints: {
            300: {
                slidesPerView: 1, 
            },
            768: {
                slidesPerView: 3, 
            },
            1000: {
                slidesPerView: 5, 
            },
        },
    });

    return swiperConfig;
};
