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

const Home = ({ products, addToCart }) => {
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
    <div className="flex flex-col gap-16 px-4 md:px-8 lg:px-16 py-12">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl">
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
      <section className="container mx-auto px-4">
        <div className="animate-fadeIn">
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Shop by Category
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard
              image="/Home/men.jpg"
              title="Men's Collection"
              subtitle="Explore Trending Styles"
              to="/men"
            />
            <CategoryCard
              image="/Home/wo.jpg"
              title="Women's Collection"
              subtitle="Discover New Arrivals"
              to="/women"
            />
            <CategoryCard
              image="/Home/EThing.jpg"
              title="Everything"
              subtitle="Everything You Need"
              to="/everything"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mx-auto px-4 py-16 bg-gradient-to-b from-gray-100 to-white rounded-2xl w-full flex flex-col gap-12 shadow-xl">
        <div className="animate-fadeIn">
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Featured Products
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

        <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] mt-8 md:mt-16 shadow-2xl animate-fadeIn">
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
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <GiClothesline size={60} />
            <h2 className="text-xl font-bold text-gray-800">Free Shipping</h2>
            <p className="text-gray-600 text-center">On all orders over $100</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BiSolidLock size={60} />
            <h2 className="text-xl font-bold text-gray-800">Secure Payment</h2>
            <p className="text-gray-600 text-center">100% secure payment</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BiSolidOffer size={60} />
            <h2 className="text-xl font-bold text-gray-800">Special Offers</h2>
            <p className="text-gray-600 text-center">Great deals every day</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BiWorld size={60} />
            <h2 className="text-xl font-bold text-gray-800">
              Worldwide Shipping
            </h2>
            <p className="text-gray-600 text-center">Fast delivery worldwide</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
