const Footer = () => {
  const links = {
    Product: ["Features", "Pricing", "Templates", "Integrations"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
  };

  return (
    <footer className="w-full bg-[#101727] text-white pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Logo Section */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-bold mb-6 tracking-tight">DigiTools</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-4">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-bold mb-6 text-sm">{title}</h4>
                <ul className="space-y-4 text-xs text-gray-400">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Section */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-6 text-sm">Social Links</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-row md:row justify-between items-center gap-4 text-[12px] text-gray-500">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;