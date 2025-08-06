"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadcrumbHeader({ title }) {
  const pathname = usePathname();

  // Extract last segment of URL (current page name)
  const segments = pathname.split("/").filter(Boolean);
  const current = segments[segments.length - 1] || "Home";

  // Convert slug to readable format (e.g., "steering-parts" → "Steering Parts")
  const formatLabel = (slug) => {
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{ backgroundImage: `url('/img/bg-breadcrumb.jpg')` }}
    >
      <div className="absolute  inset-0 bg-black/60" />
      <div className="relative pt-10 z-10  text-center text-white">
        <h1 className="text-4xl font-bold italic">{title}</h1>
        <div className="mt-2 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {segments.map((slug, index) => (
            <span key={index}>
              <span className="mx-1">›</span>
              {index === segments.length - 1 ? (
                <span>{formatLabel(slug)}</span>
              ) : (
                <Link
                  href={"/" + segments.slice(0, index + 1).join("/")}
                  className="hover:underline"
                >
                  {formatLabel(slug)}
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
