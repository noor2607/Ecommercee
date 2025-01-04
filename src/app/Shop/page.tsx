import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import products from "../Products/[slug]/page";

interface Product {
  product_name: string;
  description: string;
  price: string;
  slug: string;
  imageUrl: string;
  category: string;
}

export default async function ShopPage() {
  const data: Product[] = await client.fetch(`
    *[_type == "Shop"] {
      product_name,
      description,
      price,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      category
    }
  `);

  const newArrivals = data.filter((product) => product.category === "newarrival");
  const mensPerfume = data.filter((product) => product.category === "mens");
  const womensPerfume = data.filter((product) => product.category === "womens");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* New Arrivals Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-10">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newArrivals.map((product) => (
            <div key={product.slug} className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow">
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.product_name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">{product.product_name}</h3>
                <p className="text-gray-600 mt-2 font-medium">${product.price}</p>
                <p className="text-gray-500 mt-4 text-sm">{product.description}</p>
              </div>
              <div className="mt-6 text-center">
                <Link href={`/Products/${product.slug}`} passHref>
                  <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-colors">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Men's Perfume Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Men's Perfume Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mensPerfume.map((product) => (
            <div key={product.slug} className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow">
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.product_name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">{product.product_name}</h3>
                <p className="text-gray-600 mt-2 font-medium">${product.price}</p>
                <p className="text-gray-500 mt-4 text-sm">{product.description}</p>
              </div>
              <div className="mt-6 text-center">
                <Link href={`/Products/${product.slug}`} passHref>
                  <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-colors">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Women's Perfume Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Women's Perfume Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {womensPerfume.map((product) => (
            <div key={product.slug} className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow">
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.product_name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">{product.product_name}</h3>
                <p className="text-gray-600 mt-2 font-medium">${product.price}</p>
                <p className="text-gray-500 mt-4 text-sm">{product.description}</p>
              </div>
              <div className="mt-6 text-center">
                <Link href={`/Products/${product.slug}`} passHref>
                  <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-colors">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
