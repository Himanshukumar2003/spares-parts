"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function ProductDiscription() {
  const additionalInfoData = [
    { label: "Model", value: "Rio, Scorpio, Sportage" },
    { label: "Years", value: "2018, 2020, 2022" },
  ];

  const featuresSpecificationsData = [
    { feature: "Net Quantity", value: "1" },
    { feature: "Country of Origin", value: "India" },
    { feature: "Main Bulb Fitting Type", value: "H4-12V 60/55W P43t" },
    { feature: "Indicator Bulb Fitting Type", value: "PY21W" },
    { feature: "Parking Bulb Fitting Type", value: "W5W-12V 5W" },
    { feature: "Dimensions", value: "55 x 30 x 28 cm; 4 Kg" },
    { feature: "Manufacturer", value: "Global Auto" },
    {
      feature: "Address of Manufacturer",
      value:
        "G1-101 Riico Industrial Area Chopanki Bhiwadi Rajasthan 301019, Ph:- +918000338945",
    },
  ];

  return (
    <div className="bg-white  border-y border-gray-200 section ">
      <div className="contanier max-w-6xl  w-full mx-auto px-4 sm:px-6">
        <Tabs defaultValue="description" className="w-full">
          {/* Tabs List */}
          <div className="flex justify-center items-center">
            <TabsList className="grid grid-cols-2 gap-3 mb-2    bg-transparent h-full">
              {[
                { label: "DESCRIPTION", value: "description" },
                {
                  label: "ADDITIONAL INFORMATION",
                  value: "additional-information",
                },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={cn(
                    "data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md font-bold text-md ",
                    "transition duration-200 ease-in-out rounded-md px-4 py-2 text-sm font-semibold",
                    "border border-gray-200 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  )}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {/* Description Content */}
          <TabsContent value="description">
            <div className="text-gray-700 text-base leading-relaxed space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>
            </div>
          </TabsContent>

          {/* Additional Information Table */}
          <TabsContent value="additional-information" className="mt-4">
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-left text-sm table-auto border-collapse">
                <tbody>
                  {additionalInfoData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors border-b last:border-b-0"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {item.label}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Features & Specifications Table */}
        </Tabs>
      </div>
    </div>
  );
}
