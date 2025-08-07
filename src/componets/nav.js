"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  User,
  ChevronDown,
  Car,
  Wrench,
  Zap,
  NavigationIcon as Steering,
  Package,
  Droplets,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { toggleCart } from "@/lib/features/slice";
import { useDispatch } from "react-redux";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const dispatch = useDispatch();

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

  return (
    <div className="bg-white fixed top-0 z-[9999] w-full">
      {/* Top Navigation */}
      <nav className="bg-[var(--primary)] text-white h-[80px]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/white-logo.png"
                    alt="Logo"
                    width={200}
                    height={500}
                  />
                </Link>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { name: "HOME", href: "/" },
                { name: "About", href: "/about" },
                { name: "DEALER", href: "/delars" },
                { name: "PRODUCT", href: "/product" },
                { name: "BLOG", href: "/blog" },
                { name: "CONTACT US", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-md font-medium hover:text-[var(--accent)]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Category Dropdown */}
            <motion.div
              className="flex items-center "
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-full">
                <Button
                  variant="ghost"
                  className="bg-light text-white rounded-none h-full text-sm font-medium "
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

                {/* Category Dropdown Panel */}
                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      className="absolute top-[32px] left-0 mt-1 bg-white border-t-0  border-blue-500 border-2 shadow-lg z-50"
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
                            className="group flex items-center border-b-2 border-gray-100 space-x-3 p-3 rounded-lg cursor-pointer transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            whileHover={{ x: 5 }}
                            onClick={() => setIsCategoriesOpen(false)}
                          >
                            {React.createElement(category.icon, {
                              className:
                                "w-5 h-5 text-black group-hover:text-blue-700",
                            })}
                            <span className="text-black font-medium group-hover:text-blue-700">
                              {category.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent ml-3 hover:text-white"
                  onClick={() => dispatch(toggleCart())}
                >
                  <ShoppingCart className="h-5 w-5 " />
                  <span className="sr-only">Open Cart</span>
                </Button>
              </div>
            </motion.div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <Button
                size="icon"
                className="bg-[var(--accent)] text-black hover:bg-[var(--accent-hover)]"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
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
                  className="bg-[var(--accent)] text-black rounded-full w-10 h-10 hover:bg-[var(--accent-hover)]"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <nav className="space-y-6">
                <nav className="space-y-6">
                  {[
                    { name: "HOME", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "SHOP", href: "/shop" },
                    { name: "PRODUCT", href: "/product" },
                    { name: "Dealer", href: "/delars" },
                    { name: "CONTACT US", href: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block text-lg font-medium ${
                        item.name === "HOME"
                          ? "text-[var(--accent)]"
                          : "text-black hover:text-[var(--accent)]"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
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
