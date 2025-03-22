import { Typography } from "@material-tailwind/react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-gray-50 pt-12 pb-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Typography variant="h5" className="mb-4 font-bold">
              DNK
            </Typography>
            <Typography className="mb-4 text-blue-gray-600">
              Your destination for quality fashion and accessories. Shop the
              latest trends at affordable prices.
            </Typography>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-gray-700 hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-blue-gray-700 hover:text-blue-500 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-blue-gray-700 hover:text-blue-500 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-blue-gray-700 hover:text-blue-500 transition-colors"
              >
                <FaPinterest size={20} />
              </a>
            </div>
          </div>

          <div>
            <Typography variant="h6" className="mb-4 font-bold">
              Shop
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/men"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Mens Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Womens Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/everything"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="h6" className="mb-4 font-bold">
              Customer Service
            </Typography>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Track Your Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="h6" className="mb-4 font-bold">
              About DNK
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-gray-600 hover:text-blue-500 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography className="text-blue-gray-600 text-sm">
              &copy; {year} DNK Fashion. All rights reserved.
            </Typography>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-blue-gray-600 hover:text-blue-500 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-gray-600 hover:text-blue-500 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-gray-600 hover:text-blue-500 transition-colors text-sm"
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
