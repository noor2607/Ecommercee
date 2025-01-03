import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";


export default function Header() {
  return (
    <header className="bg-white border-b border-pink-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">Perfume Bliss</Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
            <Link href="/" className="text-gray-700 hover:text-pink-600">
                Home
              </Link>
            </li>
            <li>
            <Link href="/Shop" className="text-gray-700 hover:text-pink-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-pink-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600">Contact 
              </Link>
            </li>
          </ul>
        </nav>

        {/* Cart */}
        <div>
          <Link href="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
              <span className="text-black text-2xl"><FaCartShopping />
              </span>
              <span>Cart</span>
            
          </Link>
        </div>
      </div>
    </header>
  );
}
