"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Assuming cn utility is available
import { Button } from "@/components/ui/button"; // Using shadcn/ui Button

export default function CategoryExplorer() {
  const categories = [
    { name: "BODY\nPARTS", imageQuery: "/img/category/collection-1.webp" },
    {
      name: "ELECTRONICS\nPARTS",
      imageQuery: "/img/category/collection-2.webp",
    },
    { name: "ENGINE\nPARTS", imageQuery: "/img/category/collection-3.webp" },
    { name: "LIGHTING\nPARTS", imageQuery: "/img/category/collection-4.webp" },
    { name: "STEERING\nPARTS", imageQuery: "/img/category/collection-5.png" },
    {
      name: "BRAKE\nDISKS &\nPADS",
      imageQuery: "/img/category/collection-6.png",
    },
    { name: "ENERGY\nPARTS", imageQuery: "/img/category/collection-7.webp" },
    { name: "FURNITURE\nPARTS", imageQuery: "/img/category/collection-8.webp" },

    {
      name: "OIL &\nLUBRICANTS",
      imageQuery: "/img/category/collection-9.png",
    },
    {
      name: "SUSPENSION\nPARTS",
      imageQuery: "/img/category/collection-1.webp",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const initialDisplayLimit = 15;

  return (
    <section className="w-full  bg-[#F4F2EB] section">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black mb-8 md:mb-12">
          EXPLORE BY CATEGORY
        </h2>
        <div
          className={cn(
            "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
            "gap-4 md:gap-6"
          )}
        >
          {(showAll
            ? categories
            : categories.slice(0, initialDisplayLimit)
          ).map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-xl p-4 md:p-6 shadow-sm cursor-pointer border   border-transparent hover:border-amber-300"
            >
              <p className="text-sm md:text-base font-bold text-black whitespace-pre-line leading-tight">
                {category.name}
              </p>
              <Image
                src={category.imageQuery}
                alt={category.name.replace(/\n/g, " ")}
                width={80}
                height={80}
                className="object-contain ml-4"
              />
            </div>
          ))}
        </div>
        {categories.length > initialDisplayLimit && !showAll && (
          <div className="flex justify-center mt-8">
            <Button onClick={() => setShowAll(true)} className="btn">
              View More
            </Button>
          </div>
        )}
        {showAll && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setShowAll(false)}
              className="bg-black text-white font-bold rounded-full px-8 py-3 hover:bg-gray-800 transition-colors"
            >
              View Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
