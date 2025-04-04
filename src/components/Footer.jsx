import { Typography, Input, Button } from "@material-tailwind/react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-gray-50 to-white pt-16 pb-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Typography variant="h4" className="font-bold text-black">
              DNK
            </Typography>
            <Typography className="text-blue-gray-600 leading-relaxed">
              Your destination for quality fashion and accessories. Shop the
              latest trends at affordable prices.
            </Typography>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-blue-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-blue-gray-700 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-blue-gray-700 hover:text-pink-500 transform hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-blue-gray-700 hover:text-red-500 transform hover:scale-110 transition-all duration-300"
              >
                <FaPinterest size={24} />
              </a>
            </div>
          </div>

          <div>
            <Typography variant="h6" className="mb-6 font-bold ">
              Shop
            </Typography>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/men"
                  className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  Mens Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  Womens Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/everything"
                  className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  All Products
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="h6" className="mb-6 font-bold">
              Customer Service
            </Typography>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  Track Your Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <Typography variant="h6" className="font-bold ">
              Newsletter
            </Typography>
            <Typography className="text-blue-gray-600">
              Subscribe to our newsletter for updates and exclusive offers.
            </Typography>
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                label="Email Address"
                icon={<FaEnvelope className="h-5 w-5" />}
                className="!border-blue-gray-300 focus:!border-blue-500"
              />
              <Button
                className="bg-black hover:bg-gray-800 transition-colors duration-300"
                size="sm"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Typography className="text-blue-gray-600 text-sm">
              DNK Fashion. All rights reserved.
            </Typography>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-gray-600 hover:text-blue-900 transition-colors duration-300 text-sm"
              >
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
