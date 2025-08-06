"use client";

import Image from "next/image";
import BreadcrumbHeader from "@/componets/breadcrumbHeader";
import { ShieldCheck, Globe, Headset, Wallet } from "lucide-react"; // Lucide icons

export default function OurJourney() {
  const stats = [
    {
      label: "MORE THAN NEW AUTO PARTS UPDATED",
      value: "3K+",
    },
    {
      label: "ORDERS SERVED SUCCESS",
      value: "150K+",
    },
    {
      label: "SATISFIED CUSTOMERS ON 70 COUNTRIES",
      value: "90K+",
    },
  ];
  const features = [
    {
      title: "High-Quality Products",
      description:
        "We ensure all our auto parts are sourced from reliable and top-tier manufacturers.",
      icon: <ShieldCheck className="w-8 h-8  mb-4" />,
    },
    {
      title: "Global Shipping",
      description:
        "We deliver to over 70 countries with fast and secure shipping options.",
      icon: <Globe className="w-8 h-8  mb-4" />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our support team is always available to help you with queries and orders.",
      icon: <Headset className="w-8 h-8  mb-4" />,
    },
    {
      title: "Affordable Prices",
      description:
        "We offer competitive pricing without compromising on quality.",
      icon: <Wallet className="w-8 h-8  mb-4" />,
    },
  ];
  return (
    <>
      <BreadcrumbHeader title={"About us"}></BreadcrumbHeader>
      <section className="w-full bg-white section">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold italic text-black mb-6">
              OUR JOURNEY
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Great company. They did everything right. I was not happy with a
              product, so they were very flexible about the return of the item
              and the refund. By the early 1900s, gasoline cars started to
              outsell all other types of motor vehicles. The market was growing
              for automobiles and the need for industrial production was
              pressing.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              The first car manufacturers in the world were French companies
              Panhard & Levassor (1889) and Peugeot (1891). Daimler and Benz
              started out as innovators who experimented with car design to test
              their engines before becoming full car manufacturers. They made
              their early money by licensing their patents and selling their
              engines to car manufacturers.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/img/img-34.png"
              alt="Engine Diagram"
              width={1000}
              height={1000}
              className="object-contain w-full h-auto max-w-md"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-white section  border-t-2 border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-sm md:text-lg font-semibold italic text-black mb-2">
                  {stat.label}
                </h3>
                <p className="text-4xl md:text-5xl font-extrabold italic text-black">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="w-full ">
            <Image
              src="/img/img-32.jpg"
              alt="Workshop"
              width={500}
              height={500}
              className="w-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="p-6 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold italic text-black mb-6">
              OUR MISSION AND GOAL
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Great company. They did everything right. I was not happy with a
              product, so they were very flexible about the return of the item
              and the refund. By the early 1900s, gasoline cars started to
              outsell all other types of motor vehicles. The market was growing
              for automobiles and the need for industrial production was
              pressing.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              Great company. They did everything right. I was not happy with a
              product, so they were very flexible about the return of the item
              and the refund. By the early 1900s, gasoline cars started to
              outsell all other types of motor vehicles. The market was growing
              for automobiles and the need for industrial production was
              pressing.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-white section">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold italic text-black">
              WHY CHOOSE US
            </h2>
            <p className="text-gray-600 mt-4 text-sm md:text-base max-w-xl mx-auto">
              Discover the benefits of choosing us for your automotive needs.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition duration-300 text-blue-600"
              >
                {item.icon}
                <h3 className="text-xl font-semibold italic mb-2 text-black">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 ">
          {/* Text Section */}
          <div className="contanier mx-auto  px-6">
            <h2 className="text-3xl md:text-4xl font-bold italic text-black mb-6">
              WHY DO CUSTOMERS TRUST?
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-6">
              Great company. They did everything right. I was not happy with a
              product, so they were very flexible about the return of the item
              and the refund.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 text-sm md:text-base text-gray-800">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-yellow-400"></span>
                Affordable Prices & Promotions
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-yellow-400"></span>
                High-quality products
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-yellow-400"></span>
                24/7 customer support and guidance
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div>
            <Image
              src="/img/img-33.jpg"
              width={500}
              height={500}
              alt="Happy Mechanic"
              className="w-full h-auto object-cover "
            />
          </div>
        </div>
      </section>
    </>
  );
}
