"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Trash, Minus, Plus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
  toggleCart,
  closeCart,
} from "@/lib/features/slice";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function CartSidebar() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxesAndShipping = 0; // For simplicity, assuming 0 for now or calculated at checkout

  const handleCheckout = () => {
    dispatch(closeCart()); // Close the cart sidebar
    router.push("/checkout"); // Navigate to the checkout page
  };

  return (
    <Sheet
      open={isCartOpen}
      onOpenChange={(open) =>
        open ? dispatch(toggleCart()) : dispatch(closeCart())
      }
    >
      <SheetContent className="w-full sm:w-[400px] flex flex-col p-4 bg-white shadow-xl rounded-md">
        <SheetHeader className="relative mb-4 border-b pb-2">
          <SheetTitle className="text-xl font-bold text-gray-800">
            Your Cart
          </SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
            onClick={() => dispatch(closeCart())}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close cart</span>
          </Button>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-2 pr-1 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {cartItems.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground mt-8">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0 transition-all"
                >
                  <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <h3 className="font-semibold text-sm text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      ₹{item.price.toFixed(2)}{" "}
                      {item.preorder && (
                        <span className="text-green-600">(Pre-order)</span>
                      )}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 bg-white border hover:bg-gray-100"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        <Minus className="h-4 w-4" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span className="text-sm font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 bg-white border hover:bg-gray-100"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto text-red-500 hover:text-red-600"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        <Trash className="h-5 w-5" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t pt-4 space-y-4 mt-4">
          <div className="flex justify-between text-base font-semibold text-gray-700">
            <span>Subtotal:</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Taxes and shipping calculated at checkout
          </p>
          <div className="flex items-start gap-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium text-gray-700 leading-snug"
            >
              I agree with the{" "}
              <a
                href="#"
                className="underline text-blue-600 hover:text-blue-800"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <div className="flex gap-2">
            <Button
              className="flex-1 bg-primary text-white hover:bg-primary/90 transition"
              disabled={!agreedToTerms || cartItems.length === 0}
              onClick={handleCheckout}
            >
              CHECK OUT
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-white border text-gray-700 hover:bg-gray-100"
              onClick={() => router.push("/checkout")}
            >
              VIEW CART
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
