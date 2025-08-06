"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  X,
  PhoneIcon as Whatsapp,
  TwitterIcon as TikTok,
  Globe,
  CreditCard,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
        {/* Column 1: Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="" width={300} height={300}></Image>
          </div>
          <p className="text-sm text-gray-400">
            Hi, we are always open for cooperation & suggestions, contact us in
            one of the ways below:
          </p>
          <div className="space-y-2">
            <h3 className="font-bold text-white uppercase">CONTACT</h3>
            <p className="text-sm text-gray-400">
              Co , 25 Silicon Road, London D04 89GR
            </p>
            <p className="text-sm text-gray-400">PHONE: 1900 568 659</p>
            <p className="text-sm text-gray-400">EMAIL: example@example.com</p>
          </div>
        </div>
        {/* Column 2: Product Categories */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-white uppercase">PRODUCT CATEGORIES</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Body Parts",
              "Furniture Parts",
              "Lighting Parts",
              "Engine Parts",
              "Suspension Parts",
              "Brake disks & Pads",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="hover:text-[var(--primary-dark)] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 3: Get to Know Us */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-white uppercase">GET TO KNOW US</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Bumbleb",
              "Investors",
              "Career",
              "Contact Us",
              "Affiliate Program",
              "Partnership",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="hover:[var(--primary-dark)] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 4: Subscribe */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-white uppercase">GET 10% DISCOUNT</h3>
          <p className="text-sm text-gray-400">
            Subscribe our newsletter and get 10% discount for your first order
          </p>
          <div className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="Your e-mail"
              className="bg-transparent border-b border-gray-700 text-gray-300 placeholder:text-gray-500 focus:border-[var(--primary-dark)] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="[var(--primary-dark)] text-gray-950 font-bold [var(--primary-light)] transition-colors">
              SUBSCRIBE
            </Button>
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-2 mt-4">
            <Button
              variant="ghost"
              size="icon"
              className="bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] rounded-sm"
            >
              <Facebook className="h-5 w-5 text-gray-950" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] rounded-sm"
            >
              <X className="h-5 w-5 text-gray-950" />
              <span className="sr-only">X (Twitter)</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] rounded-sm"
            >
              <Whatsapp className="h-5 w-5 text-gray-950" />
              <span className="sr-only">Whatsapp</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-[var(--primary-light)] hover:bg-[var(--primary-dark)] rounded-sm"
            >
              <TikTok className="h-5 w-5 text-gray-950" />
              <span className="sr-only">TikTok</span>
            </Button>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="container mx-auto border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p className="mb-4 md:mb-0">
          {"2024 © BUMBLEB WORDPRESS THEME. ALL RIGHT RESERVED."}
        </p>
        <div className="flex gap-3 flex-wrap justify-center text-2xl text-gray-500">
          <Globe title="WorldPay" />
          <CreditCard title="Amazon Pay" />
          <CreditCard title="Skrill" />
          <CreditCard title="PayPal" />
          <CreditCard title="Visa" />
          <CreditCard title="Mastercard" />
        </div>
      </div>
    </footer>
  );
}
