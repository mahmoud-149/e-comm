/* eslint-disable react/prop-types */
import { Link } from "react-router";

const Men = ({ products, addToCart }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <nav className="text-sm text-gray-600 mb-8">
          <Link to={"/"} className="hover:text-gray-900">
            Home
          </Link>{" "}
          / <span className="text-gray-900">Men</span>
        </nav>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <div></div>
          </div>

          <div className="lg:w-[3000px] bg-white p-6 rounded-3xl shadow-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Men</h1>
              <p className="text-gray-600 mb-6">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaecs. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit
                sed ut.
              </p>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Showing 1-12 of 14 results</p>
                <select className="border-none p-2 rounded">
                  <option>Default sorting</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
