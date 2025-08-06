"use client";

import { useState, useMemo } from "react";
import { ProductSidebar } from "./product-sidebar";
import { ProductListings } from "./product-listings";
import { products } from "./data";
export default function ProductPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-white section ">
      <div className="container mx-auto px-4">
        <main className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <ProductSidebar
              products={products}
              onSelectCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </div>

          <div className="md:col-span-3">
            <ProductListings products={filteredProducts} />
          </div>
        </main>
      </div>
    </div>
  );
}
