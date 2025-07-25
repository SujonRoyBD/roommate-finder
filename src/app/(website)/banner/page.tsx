"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  const slides = [
    { img: "https://swiperjs.com/demos/images/nature-1.jpg", title: "Dhaka" },
    { img: "https://swiperjs.com/demos/images/nature-2.jpg", title: "Sylhet" },
    { img: "https://swiperjs.com/demos/images/nature-3.jpg", title: "Rangpur" },
    { img: "https://swiperjs.com/demos/images/nature-4.jpg", title: "Cox's Bazar" },
    { img: "https://swiperjs.com/demos/images/nature-5.jpg", title: "Chittagong" },
    { img: "https://swiperjs.com/demos/images/nature-6.jpg", title: "Barishal" },
    { img: "https://swiperjs.com/demos/images/nature-7.jpg", title: "Khulna" },
    { img: "https://swiperjs.com/demos/images/nature-8.jpg", title: "Rajshahi" },
    { img: "https://swiperjs.com/demos/images/nature-9.jpg", title: "Mymensingh" },
  ];

  return (
    <div className="py-8 relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full pb-12"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-orange-600 text-white px-5 py-2 rounded shadow-lg flex items-center gap-2 text-lg font-semibold">
                
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom style for pagination positioning */}
      <style jsx global>{`
        .swiper-pagination {
          position: absolute;
          bottom: 49px;
          left: 9%;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

export default Banner;
