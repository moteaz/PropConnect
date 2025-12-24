import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-4">PropertyConnect</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Your trusted partner in finding the perfect property for rent or sale.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-violet-400 transition-colors flex items-center gap-2"><span className="text-violet-500">→</span> Home</Link></li>
              <li><Link href="/browse" className="hover:text-violet-400 transition-colors flex items-center gap-2"><span className="text-violet-500">→</span> Browse Properties</Link></li>
              <li><Link href="/about" className="hover:text-violet-400 transition-colors flex items-center gap-2"><span className="text-violet-500">→</span> About Us</Link></li>
              <li><Link href="/contact" className="hover:text-violet-400 transition-colors flex items-center gap-2"><span className="text-violet-500">→</span> Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/buy" className="hover:text-violet-400 transition-colors flex items-center gap-2"><span className="text-violet-500">→</span> Buy Property</Link></li>
              <li><Link href="/rent" className="hover:text-violet-400 transition-colors flex items-center gap-2"><span className="text-violet-500">→</span> Rent Property</Link></li>
              <li><Link href="/sell" className="hover:text-violet-400 transition-colors flex items-center gap-2"><span className="text-violet-500">→</span> Sell Property</Link></li>
              <li><Link href="/agents" className="hover:text-violet-400 transition-colors flex items-center gap-2"><span className="text-violet-500">→</span> Find Agents</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-violet-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Real Estate St, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-violet-400 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-violet-400 flex-shrink-0" />
                <span className="text-gray-400">info@propertyconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} PropertyConnect. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-violet-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-violet-400 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-violet-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
