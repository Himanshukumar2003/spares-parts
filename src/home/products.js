"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/lib/features/slice";
import CartSidebar from "@/components/ui/cart-sidebar";
import ProductCard from "@/componets/productCards";
import { products } from "@/data/product-cards.js";

export default function ProductGrid() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  return (
    <div className="bg-gray-50 section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold italic text-black mb-6">
            Our Products
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Discover why car owners and garages across India trust us for
            reliable, high-quality spare parts delivered with speed and
            assurance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <CartSidebar />
      </div>
    </div>
  );
}
