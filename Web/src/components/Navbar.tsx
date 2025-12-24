import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              PropertyConnect
            </span>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/login" className="px-6 py-2.5 text-violet-600 font-semibold hover:text-violet-700 transition-colors">
              Login
            </Link>
            <Link href="/signup" className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
