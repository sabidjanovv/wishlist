import React from "react";
import footer from "../../assets/footer.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-8 mt-8 mb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mt-0"><img src={footer} alt="" /></h2>
          <p className="mt-4">
            Your natural candle made for <br /> your home and for your wellness.
          </p>
        </div>

        {/* Discovery Section */}
        <div>
          <h3 className="text-lg font-semibold text-green-400">Discovery</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-green-300">
                New season
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Most searched
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Most selled
              </a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-green-400">About</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-green-300">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Affiliate
              </a>
            </li>
          </ul>
        </div>

        {/* Info Section */}
        <div>
          <h3 className="text-lg font-semibold text-green-400">Info</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-green-300">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Privacy Policies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p>&copy; 2024 Candleaf. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
