"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ReviewSwiper() {
  const reviews = [
    {
      rating: 5,
      reviewText:
        "Amazing product and excellent support! Highly recommend. The team was responsive and helped me set everything up easily. Packaging was neat and arrived earlier than expected. I'll definitely be buying again.",
      reviewerName: "Amit Sharma",
    },
    {
      rating: 4,
      reviewText:
        "Works well and delivery was on time. Satisfied. Installation was straightforward and the quality feels premium. Only reason for 4 stars is the color wasn't exactly as shown.",
      reviewerName: "Sneha Kapoor",
    },
    {
      rating: 5,
      reviewText:
        "Best purchase I've made this year. Thank you! It exceeded my expectations in terms of performance and design. Fits perfectly in my setup and does exactly what it claims.",
      reviewerName: "Rajeev Bansal",
    },
    {
      rating: 5,
      reviewText:
        "Superb quality and fast customer service. Loved it. This kind of post-sale experience is rare these days. They followed up to ensure I was happy with the product.",
      reviewerName: "Priya Mehta",
    },
  ];

  return (
    <div className="w-full bg-[#F4F2EB] section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold italic text-black mb-6">
            What Our Customers Say
          </h2>
          <p className="text-sm md:text-base text-gray-700"></p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          navigation
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <Card className="w-full h-full max-w-md bg-white text-gray-900 shadow-md hover:shadow-yellow-400/50 transition-shadow duration-300 rounded-2xl border border-yellow-300 ">
                <CardContent className="p-6 flex flex-col gap-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-base leading-relaxed text-gray-700 border-l-4 border-yellow-400 pl-4 italic">
                    &quot;{review.reviewText}&quot;
                  </blockquote>

                  <div className="flex items-center gap-3 mt-4">
                    <Avatar className="h-11 w-11   text-white shadow-inner">
                      <AvatarFallback>
                        {review.reviewerName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <p className="font-semibold text-gray-900">
                        {review.reviewerName}
                      </p>
                      <p className="text-sm ">Verified Buyer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
