"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function ClientSection() {
  const clients = [
    {
      name: "AUTOMOTIVE REPAIR",
      imageQuery: "/img/clint/brand-1.png",
    },
    {
      name: "TRO VEHICL",
      imageQuery: "/img/clint/brand-2.png",
    },
    {
      name: "REDCAR",
      imageQuery: "/img/clint/brand-3.png",
    },
    {
      name: "AUTO PARTS",
      imageQuery: "/img/clint/brand-4.png",
    },
    {
      name: "WHEEL WORKS",
      imageQuery: "/img/clint/brand-5.png",
    },
  ];

  return (
    <section className="w-full section bg-white">
      <div className="container px-4 md:px-6">
        <hr className="border-t border-gray-200 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 mb-12">
          {/* Heading Section */}
          <h2 className="text-2xl col-span-1 md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black text-center lg:text-left">
            WE HAVE OVER 200
            <br />
            CERTIFIED PARTNERS
          </h2>

          {/* Swiper Slider */}
          <div className="w-full col-span-2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {clients.map((client, index) => (
                <SwiperSlide
                  key={index}
                  className="flex    items-center justify-center "
                >
                  <Image
                    src={client.imageQuery}
                    alt={client.name}
                    width={100}
                    height={100}
                    className="object-contain  opacity-70"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <hr className="border-t border-gray-200 mt-8" />
      </div>
    </section>
  );
}
