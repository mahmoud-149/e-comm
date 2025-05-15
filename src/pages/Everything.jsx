/* eslint-disable react/prop-types */
import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";

const Everything = ({ products, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(
    Math.max(...products.map((p) => p.price), 0)
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= minPrice &&
        product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  }, [searchTerm, minPrice, maxPrice, products]);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-black font-medium">
            Home
          </Link>{" "}
          / <span className="text-black font-semibold">Everything</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4 bg-white p-6 rounded-xl shadow border">
            <div className="mb-6">
              <Typography variant="h5" className="font-bold mb-4">
                Search Products
              </Typography>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name..."
                className="w-full border px-4 py-2.5 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <Typography variant="h5" className="font-bold mb-4">
                Filter by Price
              </Typography>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-xs font-medium mb-1">
                    Min ($)
                  </label>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) =>
                      setMinPrice(Math.max(0, Number(e.target.value)))
                    }
                    className="w-full border px-3 py-2 rounded-md text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-medium mb-1">
                    Max ($)
                  </label>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(Math.max(0, Number(e.target.value)))
                    }
                    className="w-full border px-3 py-2 rounded-md text-sm"
                  />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max={Math.max(...products.map((p) => p.price))}
                step="1"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-blue-100 rounded-lg cursor-pointer"
              />
            </div>
          </aside>
          <section className="lg:w-3/4 bg-white p-6 rounded-3xl shadow-md">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1">Everything</h2>
              <p className="text-gray-600">
                Explore our premium collection of Men&apos;s & Women&apos;s
                fashion
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Showing {filteredProducts.length} result
                {filteredProducts.length !== 1 && "s"}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product._id}
                  className="group cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedProduct(product)}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    className="h-48 overflow-hidden bg-white"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
                    />
                  </CardHeader>
                  <CardBody className="px-4 pb-4 pt-2">
                    <Typography
                      variant="h6"
                      className="text-sm font-semibold truncate"
                    >
                      {product.title}
                    </Typography>
                    <Typography className="text-blue-600 font-bold text-sm mb-2">
                      ${product.price}
                    </Typography>
                    <div className="flex items-center">
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
          </section>
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
