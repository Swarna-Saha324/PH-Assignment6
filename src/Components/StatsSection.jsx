import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#5E3BEE] to-[#9B37FD] py-7 px-4 mb-6">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            {/* Stat Item */}
            <div className="text-center text-white flex-1">
              <h2 className="text-5xl font-bold mb-2 tracking-tight">
                {stat.value}
              </h2>
              <p className="text-lg font-medium opacity-90">
                {stat.label}
              </p>
            </div>

            {/* Vertical Divider (Hidden on mobile) */}
            {index < stats.length - 1 && (
              <div className="hidden md:block h-16 w-px bg-white/30" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;