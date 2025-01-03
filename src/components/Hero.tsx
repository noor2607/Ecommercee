import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface HomeData {
  heading: string;
  description: string;
  imageUrl: string;
}

export default async function Hero() {
  const data: HomeData[] = await client.fetch(`*[_type == "home"]{
    heading,
    description,
    "imageUrl": image.asset->url
  }`);

  const homeData = data[0]; // Assuming there's only one document of type "home"

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-8 rounded-md shadow-lg">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-90 h-80">
          <Image
            src={homeData.imageUrl}
            alt={homeData.heading}
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-center lg:text-left">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4">
          {homeData.heading}
        </h1>
        <p className="text-lg text-gray-600">
          {homeData.description}
        </p>
      </div>
    </section>
  );
}
