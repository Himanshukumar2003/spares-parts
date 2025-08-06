"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react"; // optional: replace with your preferred icon

export default function CustomerTrustSection() {
  return (
    <section className="bg-gray-50 section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo and Brand Name */}
          <Image
            src="/img/imgi_18_3408b8a.webp"
            alt="Motorola Logo"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          {/* <h3 className="text-2xl  font-semibold mb-6">Motorola</h3> */}

          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl font-extrabold italic text-gray-900 leading-tight">
            WHY DO{" "}
            <span className="text-blue-500 not-italic">CUSTOMERS TRUST?</span>
          </h2>

          {/* Testimonial */}
          <p className="mt-6 text-lg text-gray-700 font-medium leading-relaxed">
            Great company. They did everything right. I was not happy with a
            product, so they were very flexible about the return of the item and
            the refund. Great company. They did everything right. I was not
            happy with a product, so they were very flexible about the return of
            the item and the refund.
          </p>

          {/* Divider */}
          <div className="flex flex-col gap-1 items-center justify-center mt-6 space-x-2">
            <div className="w-16 h-1 bg-blue-700" />
            <div className="w-24 h-2 bg-blue-700" />
            <div className="w-16 h-1 bg-blue-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
