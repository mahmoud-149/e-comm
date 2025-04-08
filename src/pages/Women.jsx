
import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { GiShoppingBag } from "react-icons/gi";

const Women = ({ products, addToCart }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <nav className="text-sm text-gray-600 mb-8">
          <Link to={"/"} className="hover:text-gray-900">
            Home
          </Link>{" "}
          / <span className="text-gray-900">Women</span>
        </nav>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <div></div>
          </div>

          <div className="lg:w-[3000px] bg-white p-6 rounded-3xl shadow-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Women</h1>
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

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full hover:-translate-y-1"
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
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 right-4 top-4">
                      <Button
                        size="sm"
                        color="white"
                        className="rounded-full p-2 bg-white/90 backdrop-blur-sm hover:bg-white text-black shadow-lg hover:scale-110 transition-transform"
                        onClick={() => addToCart(product)}
                      >
                        <GiShoppingBag size={18} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-2 pb-4 px-4">
                    <div className="flex justify-between items-start mb-2">
                      <Typography
                        variant="h3"
                        className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                      >
                        {product.title.slice(0, 20) + "..."}
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
                      <Typography
                        variant="small"
                        className="text-gray-600 text-sm ml-2"
                      >
                        ({product.rating.count})
                      </Typography>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;

