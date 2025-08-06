"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ imageSrc, title, description, category }) {
  return (
    <Card className="flex flex-col md:flex-row p-0 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground">
      <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto md:h-auto flex-shrink-0">
        <Image
          src={imageSrc || "/placeholder.svg?height=200&width=200&text=Product"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardContent className="p-4 flex flex-col justify-between w-full">
        <div>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              (0 review)
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2 italic text-card-foreground line-clamp-2">
            {title}
          </h3>
          {/* Light blue badge */}
          <Badge className="mb-2 text-xs font-semibold uppercase bg-blue-100 text-blue-800 hover:bg-blue-200">
            {category}
          </Badge>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>
          {/* Enhanced "Fulfilled by" styling */}
          <p className="text-xs text-muted-foreground mb-4">
            Fulfilled by{" "}
            <span className="font-semibold text-[#2C5B9D]">
              Acme Auto Parts
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-auto pt-4 border-t border-border">
          {/* Buttons with direct color values */}
          <Button className=" group  w-auto bg-[#2C5B9D] text-white hover:bg-[rgb(44,91,157,0.9)]">
            <Eye className="w-4 h-4 mr-2 group-hover:text-white" />
            VIEW PRODUCT
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="sr-only">Add to cart</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <Heart className="w-5 h-5" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
