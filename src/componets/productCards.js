"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "@/lib/features/slice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
    dispatch(toggleCart());
  };

  return (
    <Card className="relative w-full bg-white pb-4 transition duration-200 p-0 border-0 shadow-none">
      {product.discount && (
        <span className="absolute z-10 top-5 left-4 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
          {product.discount}
        </span>
      )}
      <CardContent className="p-0">
        <div className="w-full aspect-square relative mb-3">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <div className="p-4 pb-0 pt-0">
          <CardTitle className="text-sm font-semibold mb-1">
            {product.title}
          </CardTitle>
          <div className="flex items-center text-yellow-500 text-sm">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={14}
                fill={index < product.rating ? "#facc15" : "none"}
                stroke="#facc15"
                className="mr-0.5"
              />
            ))}
            <span className="text-xs text-gray-400 ml-1">
              ({product.reviews} REVIEW{product.reviews !== 1 ? "S" : ""})
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 mt-0">
        <Button className="btn btnTwo" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
