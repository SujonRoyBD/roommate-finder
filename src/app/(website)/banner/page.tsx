"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import { EffectCoverflow,  Autoplay } from "swiper/modules";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
const Banner = () => {
  const slides = [
    { img: "/assets/location/dhaka.jpg", title: "Dhaka" },
    { img: "/assets/location/rangpure.jpg", title: "Sylhet" },
    { img: "/assets/location/coxbazar.jpg", title: "Cox's Bazar" },
    { img: "/assets/location/banani.jpg", title: "Chittagong" },
    { img: "/assets/location/barishal.jpg", title: "Barishal" },
    { img: "/assets/location/gulshan.jpg", title: "Khulna" },
    { img: "/assets/location/khulna.jpg", title: "Rajshahi" },
    
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
        // pagination={{ clickable: true }}
        modules={[EffectCoverflow,  Autoplay]}
        className="w-full pb-12"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={slide.img}
              alt={slide.title}
              width={200}
              height={250}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-orange-600 text-white px-5 py-2 rounded shadow-lg flex items-center gap-2 text-lg font-semibold">
                <CiLocationOn />
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
