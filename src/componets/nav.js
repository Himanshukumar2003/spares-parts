"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Menu,
  X,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
  Car,
  Wrench,
  Zap,
  NavigationIcon as Steering,
  Package,
  Droplets,
  Plus,
} from "lucide-react";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHero, setCurrentHero] = useState(0);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const dropdown = document.querySelector('[data-dropdown="categories"]');
      const button = document.querySelector(
        '[data-dropdown-button="categories"]'
      );

      if (isCategoriesOpen && dropdown && button) {
        if (!dropdown.contains(target) && !button.contains(target)) {
          setIsCategoriesOpen(false);
        }
      }
    };

    if (isCategoriesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCategoriesOpen]);

  const categories = [
    { icon: Car, name: "Engine Parts" },
    { icon: Package, name: "Wheels And Tires Parts" },
    { icon: Zap, name: "Electronics Parts" },
    { icon: Steering, name: "Steering Parts" },
    { icon: Wrench, name: "Body Parts" },
    { icon: Droplets, name: "Oil & Lubricants" },
    { icon: Plus, name: "OTHER" },
  ];

  const heroSlides = [
    {
      title: "CAR'S LED",
      subtitle: "TAIL LIGHTS",
      description: "PROVIDE A SAFETY ASPECT",
      buttonText: "APPLY NOW",
      bgImage: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "MEGA SALE",
      subtitle: "70% OFF",
      description: "EXHAUST PIPE FOR SUPER CAR",
      buttonText: "APPLY NOW",
      bgImage: "/placeholder.svg?height=600&width=1200",
    },
  ];

  return (
    <div className=" bg-white fixed top-0 z-[9999] w-full ">
      <nav className="bg-black text-white h-[80px]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center   justify-between h-full">
            <motion.div
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-ful">
                <Button
                  variant="ghost"
                  className="bg-yellow-400 rounded-none text-black hover:bg-yellow-500 h-full text-sm font-medium"
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  data-dropdown-button="categories"
                >
                  <Menu className="w-4 h-4 mr-2" />
                  BROWSE ALL CATEGORIES
                  <ChevronDown
                    className={`w-4 h-4 ml-2 transition-transform ${
                      isCategoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      className="absolute top-[40px] left-0 mt-1  bg-white rounded-lg shadow-lg z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      data-dropdown="categories"
                    >
                      <div className="p-4 space-y-2">
                        {categories.map((category, index) => (
                          <motion.div
                            key={category.name}
                            className="flex items-center space-x-3 p-3  border-yellow-500 hover:bg-yellow-500 rounded-lg cursor-pointer transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            whileHover={{ x: 5 }}
                            onClick={() => {
                              setIsCategoriesOpen(false);
                              // Handle category selection here
                            }}
                          >
                            <category.icon className="w-5 h-5 text-black" />
                            <span className="text-black font-medium">
                              {category.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
              >
                HOME
              </a>
              <a href="#" className="hover:text-yellow-400 text-sm font-medium">
                SHOP
              </a>
              <a href="#" className="hover:text-yellow-400 text-sm font-medium">
                PRODUCT
              </a>
              <a href="#" className="hover:text-yellow-400 text-sm font-medium">
                BLOG
              </a>
              <a href="#" className="hover:text-yellow-400 text-sm font-medium">
                PAGE
              </a>
            </div>
            <motion.div
              className="hidden md:flex items-center text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-gray-300">Need help:</span>
              <span className="text-yellow-400 ml-2 font-bold">
                1900 568 659
              </span>
            </motion.div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Menu</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-yellow-400 text-black rounded-full w-10 h-10"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <nav className="space-y-6">
                <a
                  href="#"
                  className="block text-xl font-medium text-yellow-400"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="block text-xl font-medium text-black hover:text-yellow-400"
                >
                  SHOP
                </a>
                <a
                  href="#"
                  className="block text-xl font-medium text-black hover:text-yellow-400"
                >
                  PRODUCT
                </a>
                <a
                  href="#"
                  className="block text-xl font-medium text-black hover:text-yellow-400"
                >
                  BLOG
                </a>
                <a
                  href="#"
                  className="block text-xl font-medium text-black hover:text-yellow-400"
                >
                  PAGE
                </a>
              </nav>
              <div className="mt-12">
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  <User className="w-5 h-5 mr-2" />
                  Login or Register
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
