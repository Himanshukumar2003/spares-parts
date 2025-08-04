"use client";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleCart } from "@/lib/features/slice";
import CartSidebar from "@/components/ui/cart-sidebar";

export default function ProductGrid() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const products = [
    {
      id: "prod001",
      title: "Perfect Titanium Wheel Cover (14, 16, 18 Inches)",
      image: "/img/product1.png",
      price: 250,
      oldPrice: 300,
      discount: "16%",
      rating: 0,
      reviews: 0,
    },
    {
      id: "prod002",
      title: "Mysterious Black Rolls Royce Radiator",
      image: "/img/product2.png",
      price: 150,
      rating: 0,
      reviews: 0,
    },
    {
      id: "prod003",
      title: "Engine Maintenance Kit (5 in 1 Regular Kit)",
      image: "/img/product3.png",
      price: 380,
      preorder: true,
      rating: 0,
      reviews: 0,
    },
    {
      id: "prod004",
      title: "Electric Fan with Aluminum Shroud Liter Engine",
      image: "/img/product4.png",
      price: 220,
      oldPrice: 250,
      discount: "12%",
      rating: 4,
      reviews: 1,
    },
    {
      id: "prod005",
      title: "Detroit Axle – All (4) Front and Rear Disc Brake Rotors",
      image: "/img/product5.png",
      price: 250,
      rating: 0,
      reviews: 0,
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    dispatch(toggleCart());
  };

  return (
    <div className="bg-gray-50 section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="text-center text-3xl font-extrabold ">Our Products</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-center text-sm mt-2">
            Discover why car owners and garages across India trust us for
            reliable, high-quality spare parts delivered with speed and
            assurance.
          </p>
        </div>
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => dispatch(toggleCart())}
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Open Cart</span>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((item) => (
            <Card
              key={item.id}
              className="relative w-full bg-white pb-4 transition duration-200 p-0 border-0 shadow-none"
            >
              {item.discount && (
                <span className="absolute z-10 top-5 left-4 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                  {item.discount}
                </span>
              )}
              <CardContent className="p-0">
                <div className="w-full aspect-square relative mb-3">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <div className="p-4 pb-0 pt-0">
                  <CardTitle className="text-sm font-semibold mb-1">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center text-yellow-500 text-sm ">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={14}
                        fill={starIndex < item.rating ? "#facc15" : "none"}
                        stroke="#facc15"
                        className="mr-0.5"
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">
                      ({item.reviews} REVIEW{item.reviews !== 1 ? "S" : ""})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {item.oldPrice && (
                      <span className="line-through text-sm text-gray-500">
                        ₹{item.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="font-bold text-black">
                      ₹{item.price.toFixed(2)}
                    </span>
                  </div>
                  {item.preorder && (
                    <p className="text-green-600 text-xs mt-1">(Pre-order)</p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="pl-4 p-0 mt-0">
                <Button
                  className="btn btnTwo"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <CartSidebar />
      </div>
    </div>
  );
}
