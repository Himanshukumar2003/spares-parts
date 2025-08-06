"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/lib/features/slice";
import CartSidebar from "@/components/ui/cart-sidebar";
import ProductCard from "@/componets/productCards";
import { products } from "@/data/product-cards.js";

export default function Fillter() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const renderSection = (marketType, heading) => {
    const filtered = products.filter((p) => p.market === marketType);

    if (filtered.length === 0) return null;

    return (
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className=" section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[800px] mx-auto ">
          <h2 className="text-3xl font-extrabold">Relative Products</h2>
          <p className="text-gray-600 text-sm mt-2">
            Discover why car owners and garages across India trust us for
            reliable, high-quality spare parts delivered with speed and
            assurance.
          </p>
        </div>

        <div className="section border-b-2 border-gray-100">
          {renderSection("Genuine", "Genuine Products")}
        </div>
        <div className="section border-b-2 border-gray-100">
          {renderSection("Aftermarket", "Aftermarket Products")}
        </div>
        <div className="section border-b-2 border-gray-100">
          {renderSection("OEM", "OEM Products")}
        </div>
        <CartSidebar />
      </div>
    </div>
  );
}
