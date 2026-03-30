import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-[150px] py-6 bg-white w-full">
      {/* Logo */}
      <div className="flex-shrink-0">
        <span className="text-2xl md:text-3xl font-extrabold text-[#7C3AED] tracking-tight">
          DigiTools
        </span>
      </div>

      {/* Desktop Links - Hidden on Mobile */}
      <div className="hidden lg:flex items-center space-x-8">
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#7C3AED]">Products</a>
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#7C3AED]">Features</a>
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#7C3AED]">Pricing</a>
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#7C3AED]">Testimonials</a>
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#7C3AED]">FAQ</a>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <button className="text-slate-700 p-2"><ShoppingCart size={20} /></button>
        <button className="hidden sm:block text-sm font-bold text-slate-700">Login</button>
        <button className="bg-gradient-to-r from-[#5E3BEE] to-[#9B37FD] text-white px-4 py-2 md:px-7 md:py-3 rounded-full text-xs md:text-sm font-bold">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;