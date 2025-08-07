"use client";

import {
  Wrench,
  ShieldCheck,
  Truck,
  DollarSign,
  Clock,
  Store,
  ArrowRight,
} from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Wrench,
      title: "Genuine Spare Parts",
      description:
        "We offer only original and certified spare parts to ensure your vehicle’s longevity and performance.",
      servicesAvailable: 120,
      bgColor: "bg-red-50",
      iconBgColor: "bg-red-200",
      iconColor: "text-red-600",
    },
    {
      icon: ShieldCheck,
      title: "Warranty Assurance",
      description:
        "All parts come with manufacturer warranty and quality assurance for complete peace of mind.",
      servicesAvailable: 85,
      bgColor: "bg-blue-50",
      iconBgColor: "bg-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: Truck,
      title: "Fast Nationwide Delivery",
      description:
        "Get parts delivered swiftly across India with our reliable logistics network.",
      servicesAvailable: 100,
      bgColor: "bg-green-50",
      iconBgColor: "bg-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description:
        "Competitive pricing on all products without compromising on quality.",
      servicesAvailable: 95,
      bgColor: "bg-yellow-50",
      iconBgColor: "bg-yellow-200",
      iconColor: "text-yellow-600",
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description:
        "Our expert team is available around the clock to assist with any queries or support needs.",
      servicesAvailable: 60,
      bgColor: "bg-purple-50",
      iconBgColor: "bg-purple-200",
      iconColor: "text-purple-600",
    },
    {
      icon: Store,
      title: "Wide Range of Products",
      description:
        "From engine components to body parts – we stock spares for all major car brands and models.",
      servicesAvailable: 150,
      bgColor: "bg-cyan-50",
      iconBgColor: "bg-cyan-200",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <div className="p-8 bg-white">
      <div className="text-center mb-10 max-w-[800px] mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold italic text-black mb-6">
            Why Choose Us
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            The first car manufacturers in the world were French companies
            Panhard & Levassor (1889) and Peugeot (1891). Daimler and Benz
            started out as innovators who experimented with car design to test
            their engines before becoming full car manufacturers. They made
            their early money by licensing their patents and selling their
            engines to car manufacturers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-6 rounded-xl shadow-md  ${service.bgColor}`}
            >
              <div className="flex flex-col items-start gap-4">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${service.iconBgColor} border-current ${service.iconColor}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
