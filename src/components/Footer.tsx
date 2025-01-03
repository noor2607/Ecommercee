export default function Footer() {
    return (
      <footer className="bg-pink-50 border-t border-pink-200">
        <div className="container mx-auto px-4 py-6">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-bold text-gray-800 mb-4 md:mb-0">
              Perfume Bliss
            </div>
  
            {/* Navigation Links */}
            <nav className="flex space-x-6">
              <a href="/about" className="text-gray-700 hover:text-pink-600">
                About Us
              </a>
              <a href="/shop" className="text-gray-700 hover:text-pink-600">
                Shop
              </a>
              <a href="/contact" className="text-gray-700 hover:text-pink-600">
                Contact
              </a>
              <a href="/privacy" className="text-gray-700 hover:text-pink-600">
                Privacy Policy
              </a>
            </nav>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-6 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Perfume Bliss. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  