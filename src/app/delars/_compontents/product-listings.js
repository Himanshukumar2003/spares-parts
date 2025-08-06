"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard } from "./cards";

export function ProductListings({ products }) {
  return (
    <div className="flex-1 lg:px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          Showing all {products.length} results
        </p>
        <Select defaultValue="default">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Default Sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">All</SelectItem>
            <SelectItem value="name-asc">Name: A-Z</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
