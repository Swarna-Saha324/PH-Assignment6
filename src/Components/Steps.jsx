const Steps = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#101727] mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm relative text-center">
          <div className="absolute top-6 right-6 w-8 h-8 bg-[#8B2CFF] text-white rounded-full flex items-center justify-center font-bold text-xs">
            01
          </div>
          <div className="w-20 h-20 bg-[#F3EBFF] rounded-full flex items-center justify-center mx-auto mb-6">
             <i className="fa-solid fa-user text-[#8B2CFF] text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Create Account</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm relative text-center">
          <div className="absolute top-6 right-6 w-8 h-8 bg-[#8B2CFF] text-white rounded-full flex items-center justify-center font-bold text-xs">
            02
          </div>
          <div className="w-20 h-20 bg-[#F3EBFF] rounded-full flex items-center justify-center mx-auto mb-6">
             <i className="fa-solid fa-box text-[#8B2CFF] text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Choose Products</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm relative text-center">
          <div className="absolute top-6 right-6 w-8 h-8 bg-[#8B2CFF] text-white rounded-full flex items-center justify-center font-bold text-xs">
            03
          </div>
          <div className="w-20 h-20 bg-[#F3EBFF] rounded-full flex items-center justify-center mx-auto mb-6">
             <i className="fa-solid fa-rocket text-[#8B2CFF] text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Start Creating</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;