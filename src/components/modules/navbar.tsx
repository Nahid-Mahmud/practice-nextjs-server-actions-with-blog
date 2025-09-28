import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900">Home</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
          {/* Mobile menu button - can be expanded later */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-900 hover:text-gray-700 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
