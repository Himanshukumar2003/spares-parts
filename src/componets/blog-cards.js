import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BlogCard({
  imageQuery,
  title,
  author,
  date,
  description,
  initialTitleColor,
}) {
  return (
    <div className="group   overflow-hidden duration-300 mb-6">
      <div className="relative w-full h-48">
        <Image
          src={imageQuery}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 px-2 flex flex-col">
        <h3
          className={cn(
            "text-xl font-bold mb-2 transition-colors duration-300 line-clamp-2",
            initialTitleColor || "text-black",
            "group-hover:text-amber-400"
          )}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          BY: {author} <span className="mx-1">•</span> {date}
        </p>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div>
          <Button className="btn btnTwo w-auto py-2" size="sm">
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
}
