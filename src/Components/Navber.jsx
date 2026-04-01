import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartItems = [] }) => { // 1. Accept cartItems as a prop
  return (
    <nav className="flex items-center justify-between px-6 md:px-[150px] py-6 bg-white w-full">
      {/* Logo */}
      <div className="flex-shrink-0">
        <span className="text-2xl md:text-3xl font-extrabold text-[#7C3AED] tracking-tight">
          DigiTools
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center space-x-8">
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#7C3AED]">Products</a>
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#7C3AED]">Features</a>
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#7C3AED]">Pricing</a>
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#7C3AED]">Testimonials</a>
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#7C3AED]">FAQ</a>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2 md:space-x-4">
        
        {/* SHOPPING CART WITH DYNAMIC BADGE */}
        <button className="relative text-slate-700 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ShoppingCart size={24} />
          
          {/* Only show badge if items exist */}
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
              {cartItems.length}
            </span>
          )}
        </button>

        <button className="hidden sm:block text-sm font-bold text-slate-700">Login</button>
        <button className="bg-gradient-to-r from-[#5E3BEE] to-[#9B37FD] text-white px-4 py-2 md:px-7 md:py-3 rounded-full text-xs md:text-sm font-bold shadow-lg shadow-purple-100">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;