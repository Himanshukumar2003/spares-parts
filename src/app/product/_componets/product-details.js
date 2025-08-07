"use client"; // This component needs to be a client component to use Swiper

import Image from "next/image";
import {
  Star,
  Eye,
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  Tag,
  Folder,
  Hash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// Import required modules
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import React, { useState } from "react";

export function ProductDetailPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // State to hold the thumbs Swiper instance

  const product = {
    name: "SMART KEY FOR CAR REMOTE FOR MONDEO",
    priceRange: "$45.00 – $78.00",
    id: "m13hlacsbal-56143343",
    reviews: 1,
    viewers: 37,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stock: 12,
    models: ["A3", "A5", "A6"],
    sku: "U2009",
    categories: ["Energy Parts", "Steering Parts", "Wheels And Tires Parts"],
    tags: ["Fashion", "Hot", "Men"],
    brand: "Honda",
    images: [
      { src: "/img/product1.png", alt: "Yellow car wheel" },
      {
        src: "/img/product2.png",
        alt: "Yellow car wheel close up",
      },
      { src: "/img/product3.png", alt: "Car engine part" },
      { src: "/img/product1.png", alt: "Car brake disc" },
      {
        src: "/img/product4.png",
        alt: "Another yellow car wheel",
      },
    ],
    paymentLogos: [
      { src: "/placeholder.svg?height=24&width=40", alt: "Mastercard" },
      { src: "/placeholder.svg?height=24&width=40", alt: "Apple Pay" },
      { src: "/placeholder.svg?height=24&width=40", alt: "Visa" },
      { src: "/placeholder.svg?height=24&width=40", alt: "American Express" },
      { src: "/placeholder.svg?height=24&width=40", alt: "Stripe" },
      { src: "/placeholder.svg?height=24&width=40", alt: "ClearPay" },
    ],
  };

  return (
    <div className="bg-white section">
      <div className="container  mx-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div className="flex flex-col">
            <div className="w-full   overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 h-full w-full"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={500}
                      height={500}
                      style={{ objectFit: "contain" }}
                      className="object-contain w-full max-h-[320px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="mt-4 w-full max-w-[500px]">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper "
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={cn(
                        "relative aspect-square overflow-hidden rounded-lg border-2 cursor-pointer",

                        index === 0 ? "border-v0-yellow" : "border-transparent"
                      )}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        style={{ objectFit: "contain" }}
                        className="object-contain max-h-[300px]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Reviews and Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span>({product.reviews} customer review)</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Viewers and Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Eye className="h-4 w-4" />
                <span>{product.viewers} people are viewing this right now</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart/Buy Now */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-transparent cursor-pointer "
                >
                  <MinusIcon className="h-4 w-4" />
                </Button>
                <div className="">1</div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-transparent cursor-pointer"
                >
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
              <Button className="btn">ADD TO CART</Button>
            </div>

            <div className="space-y-2 text-base text-gray-700 dark:text-gray-200 mt-6 border-t pt-4">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-gray-900 dark:text-gray-50  gap-2 italic">
                  SKU:
                </span>
                {product.sku}
              </p>
              <p className="flex items-center gap-2 ">
                <span className="font-semibold text-gray-900 dark:text-gray-50 w-24 inline-flex items-center italic">
                  Categories:
                </span>{" "}
                <span> {product.categories.join(", ")}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-gray-900 italic dark:text-gray-50 ">
                  Tags:
                </span>
                <sapn> {product.tags.join(", ")}</sapn>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-gray-900 dark:text-gray-50 ">
                  Brand:
                </span>{" "}
                <span> {product.brand}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}
