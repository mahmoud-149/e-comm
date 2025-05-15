import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { GiShoppingBag } from "react-icons/gi";
import { useState } from "react";
import ProductDetails from "./ProductDetails";

const Everything = ({ products, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const initialMaxPrice = Math.max(...products.map((p) => p.price));
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  const filteredProducts = products.filter(
    (product) =>
      product.price >= minPrice &&
      product.price <= maxPrice &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (value) => setSearchTerm(value);
  const handleMinPrice = (value) => setMinPrice(Number(value));
  const handleMaxPrice = (value) => setMaxPrice(Number(value));

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <nav className="text-sm text-gray-600 mb-8">
          <Link to={"/"} className="hover:text-gray-900">
            Home
          </Link>{" "}
          / <span className="text-gray-900">Everything</span>
        </nav>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="mb-8">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-4 font-semibold"
              >
                Search Products
              </Typography>
              <div className="relative flex w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={({ target }) => handleSearch(target.value)}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-8">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-4 font-semibold"
              >
                Filter by Price
              </Typography>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-700">
                      Min ($)
                    </label>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={({ target }) => handleMinPrice(target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-700">
                      Max ($)
                    </label>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={({ target }) => handleMaxPrice(target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="px-1">
                  <input
                    type="range"
                    min="0"
                    max={initialMaxPrice}
                    step="10"
                    value={maxPrice}
                    onChange={({ target }) => handleMaxPrice(target.value)}
                    className="w-full h-1.5 bg-blue-100 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4 bg-white p-6 rounded-3xl shadow-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Everything</h1>
              <p className="text-gray-600 mb-6">
                Explore our premium collection of Men's & Women's fashion
              </p>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} results
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full"
                  onClick={() => setSelectedProduct(product)}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    className="h-52 overflow-hidden relative"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4"></div>
                  </CardHeader>
                  <CardBody className="pt-2 pb-4 px-4">
                    <div className="flex justify-between items-start mb-2">
                      <Typography
                        variant="h3"
                        className="text-base font-semibold text-gray-900"
                      >
                        {product.title.slice(0, 19)}
                      </Typography>
                      <Typography className="text-base font-bold text-blue-600">
                        ${product.price}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating.rate)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          addToCart={addToCart}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Everything;
 

//......