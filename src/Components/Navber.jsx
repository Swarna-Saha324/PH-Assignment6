import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-[#7C3AED] tracking-tight">
        DigiTools
      </div>

      {/* Center Links - Hidden on mobile */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-[#7C3AED] transition-colors">Products</a>
        <a href="#" className="hover:text-[#7C3AED] transition-colors">Features</a>
        <a href="#" className="hover:text-[#7C3AED] transition-colors">Pricing</a>
        <a href="#" className="hover:text-[#7C3AED] transition-colors">Testimonials</a>
        <a href="#" className="hover:text-[#7C3AED] transition-colors">FAQ</a>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-5">
        <button className="text-gray-600 hover:text-[#7C3AED] transition-colors">
          <ShoppingCart size={20} />
        </button>
        <button className="text-sm font-bold text-gray-800 hover:text-[#7C3AED]">
          Login
        </button>
        <button className="bg-[#7C3AED] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#6D28D9] transition-all shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;