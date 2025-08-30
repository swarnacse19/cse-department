import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bg1 from "../assets/slide1.jpg";
import bg2 from "../assets/slide2.jpg";
import bg3 from "../assets/slide3.jpg";

const UniversitySlider = () => {
  const slides = [
    {
      title: "Orientation of New 2024 Students",
      image: bg1,
    },
    {
      title: "Annual Cultural Program 2024",
      image: bg2,
    },
    {
      title: "Research & Innovation Conference",
      image: bg3,
    },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh] bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Title Text */}
              <h2 className="relative text-3xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
                {slide.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UniversitySlider;
