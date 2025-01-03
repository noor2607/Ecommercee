import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface ProductDetails {
  product_name: string;
  description: string;
  price: string;
  imageUrl: string;
}

interface ProductProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailsPage({ params }: ProductProps) {
  const { slug } = params;
  
  // Fetch the product data from Sanity
  const data: ProductDetails = await client.fetch(
    `*[_type == "Shop" && slug.current == $slug][0]{
      product_name,
      description,
      price,
      "imageUrl": image.asset->url
    }`,
    { slug }
  );

  // Check if data exists, return a fallback message if not found
  if (!data) {
    return <div className="text-center text-red-500">Product not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white overflow-hidden border border-gray-200">
        
        {/* Left: Product Image */}
        <div className="relative w-full h-96">
          <Image
            src={data.imageUrl}
            alt={data.product_name}
            width={500}
            height={500}
            layout="intrinsic"
            objectFit="cover"
            className="rounded-md shadow-lg"
          />
        </div>
        
        {/* Right: Product Details */}
        <div className="flex flex-col justify-start space-y-4 p-6">
          <h1 className="text-3xl font-bold text-gray-800">{data.product_name}</h1>
          <p className="text-lg text-gray-600">{data.description}</p>
          <p className="text-2xl font-semibold text-gray-900">${data.price}</p>
          
          {/* Add to Cart Button */}
          <button
            onClick={() => alert(`${data.product_name} added to the cart.`)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
