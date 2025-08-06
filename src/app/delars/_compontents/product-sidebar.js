"use client";

import { useMemo } from "react";

export function ProductSidebar({
  products,
  onSelectCategory,
  selectedCategory,
}) {
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      products.map((product) => product.category)
    );
    return ["All", ...Array.from(uniqueCategories).sort()];
  }, [products]);

  return (
    <div className="p-4 bg-card rounded-xl shadow-lg border border-border lg:sticky top-23 self-start">
      <h2 className="text-xl font-semibold uppercase italic mb-4 pb-2 border-b border-border text-card-foreground">
        PRODUCT CATEGORIES
      </h2>
      <nav className="space-y-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`block w-full text-left py-2 px-3 rounded-md transition-colors duration-200 cursor-pointer
              ${
                selectedCategory === category
                  ? "bg-[#2C5B9D] text-white font-medium"
                  : "text-muted-foreground hover:bg-[rgb(44,91,157,0.9)] hover:text-white"
              }
            `}
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
}
