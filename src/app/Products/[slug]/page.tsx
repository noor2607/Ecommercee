import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
  product_name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await client.fetch(
    `*[_type == "Shop" && slug.current == $slug]{
      product_name
    }[0]`,
    { slug: params.slug }
  );

  return {
    title: product?.product_name || "Product Not Found",
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product: Product = await client.fetch(
    `*[_type == "Shop" && slug.current == $slug]{
      product_name,
      description,
      price,
      "imageUrl": image.asset->url
    }[0]`,
    { slug: params.slug }
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center gap-32">
      {/* Left: Product Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={product.imageUrl}
          alt={product.product_name}
          width={500}
          height={500}
          className="rounded-md shadow-md"
        />
      </div>

  
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.product_name}</h1>
        <p className="text-xl text-gray-600 mb-4">${product.price}</p>
        <p className="text-gray-500 mb-6">{product.description}</p>
        <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "Shop"]{
      "slug": slug.current
    }`
  );

  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}
