import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { BiSolidLock, BiSolidOffer, BiWorld } from "react-icons/bi";
import { GiClothesline } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl">
        <img
          src="/about/hero.jpg"
          alt="Fashion Hero"
          className="w-full h-full object-cover object-center brightness-75 transition-all duration-500 hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex flex-col justify-center items-center text-white text-center gap-4 md:gap-6 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            About Us
          </h1>
          <p className="text-base md:text-xl lg:text-xl max-w-2xl">
            Crafting Style, Delivering Excellence
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 container mx-auto px-4 py-8 md:py-16">
        <div className="flex-1 space-y-4 md:space-y-6 order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We are passionate about bringing you the latest fashion trends while
            maintaining the highest standards of quality and sustainability. Our
            journey began with a simple mission: to make premium fashion
            accessible to everyone who appreciates style and comfort.
          </p>
        </div>
        <div className="flex-1 w-full max-w-[600px] order-1 md:order-2">
          <img
            src="/about/sec2.jpg"
            alt="Fashion Store"
            className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-8 md:py-16 bg-gray-50 rounded-2xl md:rounded-3xl">
        <div className="flex flex-col justify-center items-center mb-8 md:mb-16 space-y-2 md:space-y-4">
          <h6 className="text-xl md:text-2xl lg:text-3xl text-gray-600">
            A Few Words About
          </h6>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800">
            Our Team
          </h2>
          <p className="text-center mt-2 md:mt-4 text-gray-600 max-w-2xl text-sm md:text-base lg:text-lg">
            Meet the passionate individuals behind our success. Our diverse team
            brings together expertise in fashion, technology, and customer
            service to deliver an exceptional shopping experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((_, index) => (
            <Card
              key={index}
              className="w-full transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                size="xl"
                className="mx-auto border-4 border-white shadow-lg md:shadow-xl w-24 h-24 md:w-32 md:h-32"
              />
              <CardBody className="text-center">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 text-xl md:text-2xl"
                >
                  Natalie Paisley
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium text-base md:text-lg"
                >
                  CEO / Co-Founder
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
          <img
            src="/about/follow.jpg"
            alt="Social Media"
            className="w-full h-64 sm:h-80 md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Follow Us
            </h2>
            <div className="flex gap-4 md:gap-6">
              <FaFacebook className="w-6 h-6 md:w-8 md:h-8 hover:text-blue-500 transition-colors cursor-pointer" />
              <FaTwitter className="w-6 h-6 md:w-8 md:h-8 hover:text-blue-400 transition-colors cursor-pointer" />
              <FaInstagram className="w-6 h-6 md:w-8 md:h-8 hover:text-pink-500 transition-colors cursor-pointer" />
              <FaPinterest className="w-6 h-6 md:w-8 md:h-8 hover:text-red-600 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
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
    </div>
  );
};

export default AboutUs;
