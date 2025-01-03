import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Define interface for fetching products
interface Product {
  product_name: string;
  description: string;
  price: string;
  slug: string;
  imageUrl: string;
  category: string;
}

export default async function ShopPage() {
  // Fetch product data from Sanity
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

  // Separate products by category
  const newArrivals = data.filter((product) => product.category === "newarrival");
  const mensPerfume = data.filter((product) => product.category === "mens");
  const womensPerfume = data.filter((product) => product.category === "womens");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* New Arrivals Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <div key={product.slug} className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative w-full h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.product_name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{product.product_name}</h3>
                <p className="text-gray-600 mt-2">${product.price}</p>
                <p className="text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                <Link href={`/product/${product.slug}`} passHref>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Men's Perfume Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Men's Perfume Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mensPerfume.map((product) => (
            <div key={product.slug} className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative w-full h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.product_name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{product.product_name}</h3>
                <p className="text-gray-600 mt-2">${product.price}</p>
                <p className="text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                <Link href={`/product/${product.slug}`} passHref>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Women's Perfume Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Women's Perfume Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {womensPerfume.map((product) => (
            <div key={product.slug} className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative w-full h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.product_name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{product.product_name}</h3>
                <p className="text-gray-600 mt-2">${product.price}</p>
                <p className="text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                <Link href={`/Product/${product.slug}`} passHref>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
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
