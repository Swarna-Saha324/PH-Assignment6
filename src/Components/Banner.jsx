import React from 'react';
import { Play } from 'lucide-react';

const Banner = () => {
  return (
    /* 1. Change: Use px-6 for mobile and md:px-[150px] for desktop */
    <section className="relative max-w-full mx-auto px-6 md:px-[150px] py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
      
      {/* Text Content */}
      {/* 2. Change: Center text on mobile (text-center) and left-align on desktop (lg:text-left) */}
      <div className="w-full lg:w-1/2 z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
        
        <div className="inline-flex items-center bg-violet-100 px-3 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse mr-2"></span>
          <span className="text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
            New: AI-Powered Tools Available
          </span>
        </div>
        
        {/* 3. Change: Adjust text size for mobile (text-4xl) vs desktop (lg:text-6xl) */}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#101727FF] leading-[1.1] mb-6">
          Supercharge Your <br className="hidden md:block" />
          <span className="text-slate-800">Digital Workflow</span>
        </h1>
        
        <p className="text-[#627382FF] text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity 
          software—all in one place. Start creating faster today.
        </p>

        {/* 4. Change: Ensure buttons are easy to tap on mobile */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-violet-200 transition-all active:scale-95">
            Explore Products
          </button>
          <button className="flex items-center justify-center gap-2 border-2 border-violet-100 text-[#7C3AED] px-8 py-4 rounded-full font-bold text-lg hover:bg-violet-50 transition-all active:scale-95">
            <div className="w-6 h-6 border border-violet-300 rounded-full flex items-center justify-center">
              <Play size={12} fill="currentColor" />
            </div>
            Watch Demo
          </button>
        </div>
      </div>

      {/* Visual Side */}
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
        <div className="relative w-full max-w-lg">
          <img 
            src="/public/banner.png" 
            alt="Digital Interface"
            className="rounded-3xl object-cover w-full h-auto shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;