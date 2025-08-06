import Image from "next/image";

export default function Deales() {
  const manufacturers = [
    { name: "Audi", src: "/img/logo/logo-1.png" },
    { name: "Bentley", src: "/img/logo/logo-2.png" },
    { name: "Chevrolet", src: "/img/logo/logo-3.png" },
    { name: "Ford", src: "/img/logo/logo-4.png" },
    { name: "Infiniti", src: "/img/logo/logo-5.png" },
    { name: "Kia", src: "/img/logo/logo-6.png" },
    { name: "Lexus", src: "/img/logo/logo-7.png" },
    { name: "Mazda", src: "/img/logo/logo-8.png" },
    { name: "Mitsubishi", src: "/img/logo/logo-9.png" },
    { name: "Porsche", src: "/img/logo/logo-10.png" },
    { name: "Toyota", src: "/img/logo/logo-1.png" },
    { name: "Audi", src: "/img/logo/logo-1.png" },
    { name: "Bentley", src: "/img/logo/logo-2.png" },
    { name: "Chevrolet", src: "/img/logo/logo-3.png" },
    { name: "Ford", src: "/img/logo/logo-4.png" },
    { name: "Infiniti", src: "/img/logo/logo-5.png" },
    { name: "Kia", src: "/img/logo/logo-6.png" },
    { name: "Lexus", src: "/img/logo/logo-7.png" },
    { name: "Mazda", src: "/img/logo/logo-8.png" },
    { name: "Mitsubishi", src: "/img/logo/logo-9.png" },
    { name: "Porsche", src: "/img/logo/logo-10.png" },
    { name: "Audi", src: "/img/logo/logo-1.png" },
    { name: "Bentley", src: "/img/logo/logo-2.png" },
    { name: "Chevrolet", src: "/img/logo/logo-3.png" },
  ];

  const brands = [
    { name: "VICMA", src: "/img/logo/logo-1.png" },
    { name: "RAVENOL", src: "/img/logo/logo-2.png" },
    { name: "TRICSAN", src: "/img/logo/logo-3.png" },
    { name: "BLIC", src: "/img/logo/logo-4.png" },
    { name: "DAYCO", src: "/img/logo/logo-5.png" },
    { name: "Stark", src: "/img/logo/logo-6.png" },
    { name: "RIDEX", src: "/img/logo/logo-7.png" },
    { name: "CASTROL", src: "/img/logo/logo-8.png" },
    { name: "ALANKO", src: "/img/logo/logo-9.png" },
    { name: "ABAKUS", src: "/img/logo/logo-10.png" },
    { name: "BOSCH", src: "/img/logo/logo-1.png" },
    { name: "Leoplast", src: "/img/logo/logo-2.png" },
    { name: "Dt", src: "/img/logo/logo-3.png" },
    { name: "Petek", src: "/img/logo/logo-4.png" },
  ];

  return (
    <div className="bg-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured manufacturers</h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 justify-items-center">
            {manufacturers.map((manufacturer, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-2"
              >
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                  <Image
                    src={manufacturer.src || "/placeholder.svg"}
                    alt={`${manufacturer.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Featured brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="relative w-full h-32 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={brand.src || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 14vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
