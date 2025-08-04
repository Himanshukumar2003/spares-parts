"use client";

import BlogCard from "@/componets/blog-cards";
import CategoryExplorer from "@/componets/category-explorer";
import ClientSection from "@/componets/delars";
import BumblebHomepage from "@/componets/nav";
import PartsFiltter from "@/componets/parts-filter";
import HeroSection from "@/home/hero-section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "@/componets/footer";
import ProductGrid from "@/home/products";
import ReviewSwiper from "@/home/rewies";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";
import ServicesGrid from "@/home/aim";

export default function Home() {
  const articles = [
    {
      imageQuery: "/img/blog/blog-1.png",
      title: "GREAT EXPERIENCES ON YOUR FAVORITE CAR",
      author: "TUNG HOANG",
      date: "MAR 22, 2024",
      description:
        "Sed mollis, eros et ultrices tempus, mauris ipsum Sed mollis, eros et ultrices tempus, mauris ipsum...",
    },
    {
      imageQuery: "/img/blog/blog-2.png",
      title:
        "RIVIAN R1S FIRST DRIVE REVIEW: THE SUV FINALLY ARRIVES! (SORT OF)",
      author: "TUNG HOANG",
      date: "MAR 22, 2024",
      description:
        "Sed mollis, eros et ultrices tempus, mauris ipsum Sed mollis, eros et ultrices tempus, mauris ipsum",
    },
    {
      imageQuery: "/img/blog/blog-1.png",
      title: "WHICH COUNTRIES USE VEHICLES WITH A RIGHT-HAND STEERING WHEEL",
      author: "TUNG HOANG",
      date: "MAR 22, 2024",
      description:
        "Sed mollis, eros et ultrices tempus, mauris ipsum Sed mollis, eros et ultrices tempus, mauris ipsum",
    },
    {
      imageQuery: "/img/blog/blog-1.png",
      title: "TOP 10 SCENIC DRIVES FOR YOUR NEXT ROAD TRIP",
      author: "JANE DOE",
      date: "APR 01, 2024",
      description:
        "Sed mollis, eros et ultrices tempus, mauris ipsum Sed mollis, eros et ultrices tempus, mauris ipsum",
    },
    {
      imageQuery: "/img/blog/blog-2.png",
      title: "ESSENTIAL CAR MAINTENANCE TIPS FOR LONGER VEHICLE LIFE",
      author: "JOHN SMITH",
      date: "APR 10, 2024",
      description:
        "Sed mollis, eros et ultrices tempus, mauris ipsum Sed mollis, eros et ultrices tempus, mauris ipsum",
    },
  ];

  return (
    <>
      <HeroSection />
      <PartsFiltter />

      <CategoryExplorer />
      <ServicesGrid></ServicesGrid>
      <ProductGrid></ProductGrid>
      <ClientSection />
      <ReviewSwiper></ReviewSwiper>
      <div className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={false}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <BlogCard {...article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
