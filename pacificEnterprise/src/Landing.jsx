import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperConfig } from "./useSwiperConfig";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import flechaback from "./assets/img/backto.png";
import flechago from "./assets/img/goto.png";
import { LandingCards } from "./components/LandingCards";

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
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {

    const fetchImages = async () => {
      try {
        const response = await fetch("http://pacificenterprise-produccion.test/api/dishes/all");
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
    <h1 className="text-center text-3xl lg:text-5xl font-bold">Some of our <span className="text-[#CDA0CB]">menu</span></h1>
    <div className="relative 2xl:w-[80%] xxs:w-[90%] mx-auto mt-5 bg-[#CDA0CB] h-[70%] rounded-2xl">
      <div className="flex items-center h-full">
        <button
          className="w-[5%] flex items-center justify-center"
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
          <Swiper {...swiperConfig} ref={swiperRef}>
            {randomImages.map((item, index) => (
              <SwiperSlide key={item.id || index}>
                <LandingCards image={item.image} title={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          className="w-[5%] flex items-center justify-center"
          onClick={handleNext}
          tabIndex="0"
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
    </>
  );
}

