/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router";
import { BiSolidLock, BiSolidOffer, BiWorld } from "react-icons/bi";
import { GiClothesline, GiShoppingBag } from "react-icons/gi";
import { useState } from "react";
import ProductDetails from "./ProductDetails";

const Home = ({ products, addToCart }) => {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const CategoryCard = ({ image, title, subtitle, to }) => (
    <Card className="relative h-96 overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardHeader
        floated={false}
        className="h-full w-full transform transition-transform duration-500 group-hover:scale-105"
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </CardHeader>

      <CardBody className="absolute bottom-0 w-full text-center space-y-4">
        <Typography variant="h3" className="text-2xl font-bold text-white">
          {title}
        </Typography>
        <Typography as={"div"} className="flex flex-col gap-3">
          <Typography className="text-gray-200 font-medium">
            {subtitle}
          </Typography>
          <Link to={to}>
            <Button
              variant="filled"
              color="white"
              className="text-black rounded-full px-8 py-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Shop Now
            </Button>
          </Link>
        </Typography>
      </CardBody>
    </Card>
  );


  return (
    <div className="flex flex-col gap-16 px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl">
        <img
          src="/Home/HomeHero.jpg"
          alt="Summer Sale Hero"
          className="w-full h-full object-cover object-center brightness-75 transition-all duration-500 hover:brightness-90"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
          <div className="container mx-auto px-4 text-white">
            <div className="max-w-2xl space-y-6 animate-fadeIn">
              <Typography
                variant="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Raining Offers For <br className="hidden md:block" /> Hot
                Summer!
              </Typography>

              <Typography
                variant="h2"
                className="text-2xl md:text-3xl font-semibold text-gray-200"
              >
                25% Off All Products
              </Typography>

              <div className="flex flex-wrap gap-4">
                <Link to="/everything">
                  <Button
                    className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg font-semibold"
                    size="lg"
                  >
                    Shop Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="outlined"
                    className="border-2 text-white border-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg font-semibold"
                    size="lg"
                  >
                    Discover More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="animate-fadeIn max-w-7xl mx-auto">
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 relative pb-11"
          >
            Shop by Category
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full mt-2"></div>
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Category Card 1 - Women */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:z-10">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/Home/wo.jpg"
                  alt="Women's Fashion"
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center translate-y-0 group-hover:-translate-y-4 transition-all duration-500">
                <h1 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  Women
                </h1>
                <p className="text-gray-200 mb-6 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Explore Trending Styles
                </p>
                <Link to={"/women"}>
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-gray-100 shadow-lg">
                    Shop Now →
                  </button>
                </Link>
              </div>
            </div>

            {/* Category Card 2 - Men */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:z-10">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/Home/men.jpg"
                  alt="Men's Fashion"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center translate-y-0 group-hover:-translate-y-4 transition-all duration-500">
                <h1 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  Men
                </h1>
                <p className="text-gray-200 mb-6 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Discover New Arrivals
                </p>
                <Link to={"/men"}>
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-gray-100 shadow-lg">
                    Shop Now →
                  </button>
                </Link>
              </div>
            </div>

            {/* Category Card 3 - Everything */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:z-10">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/Home/EThing.jpg"
                  alt="Everything Collection"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center translate-y-0 group-hover:-translate-y-4 transition-all duration-500">
                <h1 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  Everything
                </h1>
                <p className="text-gray-200 mb-6 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Curated Collections
                </p>
                <Link to={"/everything"}>
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-gray-100 shadow-lg">
                    Shop Now →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mx-auto px-4 py-16 bg-gradient-to-b from-gray-100 to-white rounded-3xl w-full flex flex-col gap-12 shadow-xl">
        <div className="animate-fadeIn">
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 relative pb-9"
          >
            Featured Products
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full mt-2"></div>
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-lg"
          >
            Discover our handpicked selection of premium products, carefully
            curated to bring you the best in quality and style.
          </Typography>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <Card
                key={product.id}

                className="group shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full hover:-translate-y-1"
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 right-4 top-4"></div>
                </CardHeader>
                <CardBody className="pt-2 pb-4 px-4">
                  <div className="flex justify-between items-start mb-2">
                    <Typography
                      variant="h3"
                      className="text-base font-semibold text-gray-900"
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

        <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] mt-8 md:mt-16 shadow-2xl animate-fadeIn">
          <img
            src="/Home/Spe.E.jpg"
            alt="Special edition"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 md:from-black/70 to-transparent flex items-center">
            <div className="px-6 md:px-8 lg:px-12 max-w-2xl space-y-4 md:space-y-6 mx-4 md:mx-0">
              <Typography className="text-white/90 uppercase tracking-widest text-xs md:text-sm font-bold">
                Limited Time Offer
              </Typography>

              <Typography className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
                Special Edition Collection
              </Typography>

              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <Link to="/everything">
                  <Button
                    color="white"
                    className="rounded-full px-6 py-3 md:px-8 md:py-4 text-black hover:bg-gray-100 font-bold text-base md:text-lg transition-all hover:scale-105"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 animate-fadeIn">
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="p-4 bg-blue-50 rounded-full">
              <GiClothesline size={60} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Free Shipping</h2>
            <p className="text-gray-600 text-center">On all orders over $100</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="p-4 bg-blue-50 rounded-full">
              <BiSolidLock size={60} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Secure Payment</h2>
            <p className="text-gray-600 text-center">100% secure payment</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="p-4 bg-blue-50 rounded-full">
              <BiSolidOffer size={60} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Special Offers</h2>
            <p className="text-gray-600 text-center">Great deals every day</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="p-4 bg-blue-50 rounded-full">
              <BiWorld size={60} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Worldwide Shipping
            </h2>
            <p className="text-gray-600 text-center">Fast delivery worldwide</p>
          </div>
        </div>
      </section>
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

export default Home;


// hello
