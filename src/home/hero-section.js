import Image from "next/image";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
export default function HeroSection() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="relative w-full h-[88vh] overflow-hidden">
      <Image
        src="/img/slider-3.webp"
        alt="Car LED Tail Lights"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 md:p-8 text-center">
        <div className="relative z-10 text-white mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold italic leading-tight mb-4 drop-shadow-md">
            CAR&apos;S LED TAIL LIGHTS
          </h1>
          <p className="text-lg md:text-xl italic mb-8 text-white ">
            PROVIDE A SAFETY ASPECT
          </p>

          {/* Search bar */}
          <div className="relative w-full max-w-lg mx-auto">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[var(--primary-dark)]" />
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="genuine"
                className="border-white data-[state=checked]:bg-blue-700 data-[state=checked]:text-white"
              />
              <Label
                htmlFor="genuine"
                className="text-white text-lg cursor-pointer"
              >
                Genuine
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="aftermarket"
                className="border-white data-[state=checked]:bg-blue-700 data-[state=checked]:text-white"
              />
              <Label
                htmlFor="aftermarket"
                className="text-white text-lg cursor-pointer"
              >
                Aftermarket
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="oem"
                className="border-white data-[state=checked]:bg-blue-700 data-[state=checked]:text-white"
              />
              <Label
                htmlFor="oem"
                className="text-white text-lg cursor-pointer"
              >
                OEM
              </Label>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20  hover:bg-blue-400 hover:text-black transition-all duration-300 h-12 w-12 rounded-full shadow-md"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6 text-blue-900" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-blue-400 hover:text-black transition-all duration-300 h-12 w-12 rounded-full shadow-md"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </section>
  );
}
