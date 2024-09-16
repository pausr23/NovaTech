import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiperConfig } from './useSwiperConfig';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css'; 
import flechaback from './assets/img/backto.png';
import flechago from './assets/img/goto.png';
import { LandingCards } from './components/LandingCards';

export function Landing() {
    const swiperRef = useRef(null); 

    const swiperConfig = useSwiperConfig();

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext(); 
        }
    };

    return (
        <div className='relative 2xl:w-[80%] mx-auto bg-[#CDA0CB] h-[70%] mb-10 rounded-2xl'>
            <div className='flex items-center h-full'>
                <div className='w-[5%] flex items-center justify-center'>
                    <img src={flechaback} alt="flecha back" className='custom-button-prev w-[80%] ml-10' onClick={handlePrev}/>
                </div>

                <div className='w-[80%] h-[50%] mx-auto'>
                    <Swiper
                        {...swiperConfig}
                        ref={swiperRef} 
                    >
                        <SwiperSlide>
                            <LandingCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LandingCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LandingCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LandingCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LandingCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LandingCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LandingCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LandingCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LandingCards />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LandingCards />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='w-[5%] flex items-center justify-center'>
                    <img src={flechago} alt="flecha go" className='custom-button-next w-[80%] mr-10' onClick={handleNext}/>
                </div>
            </div>
        </div>
    );
}
