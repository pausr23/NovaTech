import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperConfig } from "./useSwiperConfig";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import flechaback from "./assets/img/backto.png";
import flechago from "./assets/img/goto.png";
import { LandingCards } from "./components/LandingCards";
import { EventCarousel } from "./components/EventCarousel";
import Footer from './components/Footer.jsx';

const getRandomImages = (images, count) => {
  const shuffled = images.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export function Landing() {
  const swiperRef = useRef(null);
  const swiperConfig = useSwiperConfig();
  const [images, setImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {

    const fetchImages = async () => {
      try {
        const response = await fetch("https://admin.pacificenterprise.org/api/dishes/all");
        const data = await response.json();

        const filteredImages = data.filter(dish => [2, 3, 4].includes(dish.category_id));

        setImages(filteredImages);

        const randomImages = getRandomImages(filteredImages, 10);
        setRandomImages(randomImages);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>

      <div className="flex flex-col w-[70vw] md:w-[50vw] mx-auto mt-[15vh]">
        <hr className='w-full h-[2px] bg-white mb-4' />
        <h1 className='font-bold text-white text-4xl mx-auto'>
          Nuestro menú
        </h1>
        <hr className='w-full h-[2px] bg-white mt-4' />
      </div>

      <div className="mt-[15vh] relative w-[80%] xxs:w-[90%] mx-auto  bg-[#CDA0CB] h-[70%] rounded-2xl">
        <div className="flex items-center h-full">
          <button
            className="w-[5rem] flex items-center justify-center"
            onClick={handlePrev}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handlePrev();
              }
            }}
          >
            <img
              src={flechaback}
              alt="flecha back"
              className="custom-button-prev w-[70%] xxs:w-[100%] ml-10"
            />
          </button>

          <div className="w-[80%] h-[50%] mx-auto">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.custom-button-prev',
                nextEl: '.custom-button-next',
              }}
              ref={swiperRef}
              slidesPerView={6} // Muestra 6 diapositivas a la vez
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 80,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 80,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 100,
                },
                1536: {
                  slidesPerView: 6,
                  spaceBetween: 80,
                },
              }}
            >
              {randomImages.map((item, index) => (
                <SwiperSlide key={item.id || index}>
                  <LandingCards image={item.image} title={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            className="w-[5rem] flex items-center justify-center"
            onClick={handleNext}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleNext();
              }
            }}
          >
            <img
              src={flechago}
              alt="flecha go"
              className="custom-button-next w-[80%] xxs:w-[100%] mr-10"
            />
          </button>
        </div>
      </div>

      <EventCarousel />
      <Footer />
    </>
  );
}