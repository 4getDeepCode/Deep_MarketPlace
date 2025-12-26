
const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white tracking-wide">
              Deep MarketPlace
            </h2>
            <p className="text-sm mt-3 text-gray-400 leading-relaxed">
              Your trusted online marketplace for quality products, 
              great deals, and fast delivery.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Deep MarketPlace. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Made with love for better shopping
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
