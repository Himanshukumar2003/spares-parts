import BreadcrumbHeader from "@/componets/breadcrumbHeader";
import Footer from "@/componets/footer";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Component() {
  const firstParagraph = `ed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.`;
  const firstLetter = firstParagraph.charAt(0);
  const restOfParagraph = firstParagraph.substring(1);

  const tags = [
    "Baber",
    "Baby Needs",
    "Beauty",
    "Cosmetic",
    "Ear Care",
    "Electric",
    "Fashion",
    "Food",
    "Jwerly",
    "Medical",
    "Mimimal",
    "Organic",
    "Simple",
    "Sport",
  ];

  const posts = [
    {
      image: "/placeholder.svg?height=60&width=80",
      title:
        "RIVIAN R1S FIRST DRIVE REVIEW: THE SUV FINALLY ARRIVES! (SORT OF)",
      date: "Mar 10, 2023",
      comments: "4 Comments",
    },
    {
      image: "/placeholder.svg?height=60&width=80",
      title: "WHICH COUNTRIES USE VEHICLES WITH A RIGHT-HAND STEERING WHEEL",
      date: "Mar 10, 2023",
      comments: "1 Comment",
    },
    {
      image: "/placeholder.svg?height=60&width=80",
      title: "LIMITED EDITION BMW 3.0 CSL HOMMAGE OFFICIALLY TEASED",
      date: "Mar 10, 2023",
      comments: "1 Comment",
    },
  ];

  return (
    <>
      <BreadcrumbHeader title={"Blog"}></BreadcrumbHeader>{" "}
      <div className="contanier mx-auto py-8 px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <p>
              <span class="text-[40px] rounded-full text-black w-[60px] h-[60px] border-2 border-black inline-block text-center leading-[50px] float-left mr-5 relative top-[4px]">
                {firstLetter}
              </span>
              {restOfParagraph}
            </p>
          </div>

          <blockquote className="relative  border-l-4 border-amber-500 mb-8 pl-20">
            <span className="absolute left-8 top-0 text-6xl font-serif text-amber-500 leading-none">
              &ldquo;
            </span>
            <p className="text-xl font-bold italic mb-2">
              Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.
              Phasellus accumsan cursus velitid ante tempus hendrerit. Donec
              interdum, metus et hendrerit aliquet&rdquo;
            </p>
            <footer className="text-sm font-bold uppercase tracking-wider">
              ROBERT SMITH
            </footer>
          </blockquote>

          <div className="text-base leading-relaxed">
            <p className="mb-4">
              Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero,
              non adipiscing dolor urna a orci. Aenean commodo ligula eget
              dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris
              ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu
              tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
            </p>
            <p>
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla
              neque dolor, sagittis eget, iaculis quis, molestie non, velit.
              Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo
              dolor, tempus non, auctor et, hendrerit quis, nisi.
            </p>
          </div>

          {/* Archives Section */}
        </div>

        {/* Right Column (1/3 width on large screens) */}
        <div className="lg:col-span-1">
          {/* Recent Posts Section */}
          <div className="mt-8 lg:mt-0">
            <h2 className="text-lg font-bold uppercase border-b pb-2 mb-4">
              RECENT POST
            </h2>
            <div className="space-y-6">
              {posts.map((post, index) => (
                <div key={index} className="flex group gap-4 items-start">
                  <Image
                    src="/img/img-32.jpg"
                    width={80}
                    height={80}
                    alt="Post thumbnail"
                    className="object-cover h-full rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-base font-bold leading-tight mb-1 group-hover:text-[var(--primary)]">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {post.date} | {post.comments}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags Section */}
          <div className="mt-8">
            <h2 className="text-lg font-bold uppercase border-b pb-2 mb-4">
              TAGS
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm tag-hover-effect hover:bg-transparent"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-bold uppercase border-b pb-2 mb-4">
              ARCHIVES
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  March 2023
                </a>
              </li>
              {/* Add more months as needed */}
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
