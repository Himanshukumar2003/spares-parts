import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function PartsFiltter() {
  return (
    <div className="relative w-full flex items-center justify-center py-8 px-4 -mt-[100px]">
      <div className="relative z-10 w-full max-w-6xl rounded-[30px] p-6 sm:p-10 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Select Year */}
          <Select>
            <SelectTrigger className="w-full min-h-14 px-4 text-base font-medium text-black bg-white/70 rounded-xl shadow-inner backdrop-blur-md transition-all duration-300 hover:ring-2 hover:ring-yellow-400 focus:outline-none">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>

          {/* Select Market */}
          <Select>
            <SelectTrigger className="w-full min-h-14 px-4 text-base font-medium text-black bg-white/70 rounded-xl shadow-inner backdrop-blur-md transition-all duration-300 hover:ring-2 hover:ring-yellow-400 focus:outline-none">
              <SelectValue placeholder="Select Market" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          {/* Select Model */}
          <Select>
            <SelectTrigger className="w-full min-h-14 px-4 text-base font-medium text-black bg-white/70 rounded-xl shadow-inner backdrop-blur-md transition-all duration-300 hover:ring-2 hover:ring-yellow-400 focus:outline-none">
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="truck">Truck</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
            </SelectContent>
          </Select>

          {/* Filter Button */}
          <Button className="w-full h-14 btn">
            FILTER
            <Search className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
