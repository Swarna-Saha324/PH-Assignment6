import React from 'react';

const Ready = () => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] py-20 px-6   text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button className="bg-white text-[#4F39F6] font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all w-full sm:w-auto">
            Explore Products
          </button>
          <button className="border-2 border-white/50 bg-white/10 backdrop-blur-sm font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-all w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        <p className="text-sm opacity-70 tracking-wide">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Ready;