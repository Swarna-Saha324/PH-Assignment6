const Pricing = () => {
  return (
    <section className="w-full bg-white py-20 px-6 text-[#101727]">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {/* Starter Plan */}
        <div className="border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <p className="text-gray-500 text-sm mb-6">Perfect for getting started</p>
          <div className="flex items-baseline mb-8">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-gray-400 ml-1">/Month</span>
          </div>
          <ul className="space-y-4 mb-10 text-sm text-gray-600">
            <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Access to 10 free tools</li>
            <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Basic templates</li>
            <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Community support</li>
            <li><i className="fa-solid fa-check text-green-500 mr-2"></i> 1 project per month</li>
          </ul>
          <button className="w-full py-3 bg-[#8B2CFF] text-white rounded-full font-bold hover:opacity-90 transition-opacity">
            Get Started Free
          </button>
        </div>

        {/* Pro Plan (Most Popular) */}
        <div className="relative border-2 border-[#8B2CFF] bg-[#8B2CFF] rounded-3xl p-8 text-white shadow-xl scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFF9C4] text-[#101727] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-sm">
            Most Popular
          </div>
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="opacity-80 text-sm mb-6">Best for professionals</p>
          <div className="flex items-baseline mb-8">
            <span className="text-4xl font-bold">$29</span>
            <span className="opacity-60 ml-1">/Month</span>
          </div>
          <ul className="space-y-4 mb-10 text-sm">
            <li><i className="fa-solid fa-check mr-2"></i> Access to all premium tools</li>
            <li><i className="fa-solid fa-check mr-2"></i> Unlimited templates</li>
            <li><i className="fa-solid fa-check mr-2"></i> Priority support</li>
            <li><i className="fa-solid fa-check mr-2"></i> Unlimited projects</li>
            <li><i className="fa-solid fa-check mr-2"></i> Cloud sync</li>
            <li><i className="fa-solid fa-check mr-2"></i> Advanced analytics</li>
          </ul>
          <button className="w-full py-3 bg-white text-[#8B2CFF] rounded-full font-bold hover:bg-gray-100 transition-colors">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-2">Enterprise</h3>
          <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
          <div className="flex items-baseline mb-8">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-gray-400 ml-1">/Month</span>
          </div>
          <ul className="space-y-4 mb-10 text-sm text-gray-600">
            <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Everything in Pro</li>
            <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Team collaboration</li>
            <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Custom integrations</li>
            <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Dedicated support</li>
            <li><i className="fa-solid fa-check text-green-500 mr-2"></i> SLA guarantee</li>
            <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Custom branding</li>
          </ul>
          <button className="w-full py-3 bg-[#8B2CFF] text-white rounded-full font-bold hover:opacity-90 transition-opacity">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;