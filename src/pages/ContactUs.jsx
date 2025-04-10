import { Button, Input, Textarea } from "@material-tailwind/react";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaHeadset, FaRegEnvelope, FaRegClock } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-12">
      {/* Hero Section */}

      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl">
        <img
          src="/contact/hero.jpg"
          alt="Contact Hero"
          className="w-full h-full object-cover object-center brightness-75 transition-all duration-500 hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex flex-col justify-center items-center text-white text-center gap-4 md:gap-6 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="text-base md:text-xl lg:text-xl max-w-2xl">
            We&apos;d love to hear from you. Our team is always here to help.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We&apos;re here to
            help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-3 bg-blue-50 rounded-full">
              <MdEmail className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
            <p className="text-gray-600 text-center">
              For general inquiries and support
            </p>
            <a
              href="mailto:support@example.com"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              support@example.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-3 bg-blue-50 rounded-full">
              <MdPhone className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Call Us</h3>
            <p className="text-gray-600 text-center">
              Available Monday to Friday, 9am-5pm
            </p>
            <a
              href="tel:+1234567890"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              +1 (234) 567-890
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-3 bg-blue-50 rounded-full">
              <MdLocationOn className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Visit Us</h3>
            <p className="text-gray-600 text-center">
              Our main office location
            </p>
            <p className="text-blue-500 hover:text-blue-600 font-medium text-center">
              123 Business Street
              <br />
              New York, NY 10001
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-3 bg-blue-50 rounded-full">
              <MdAccessTime className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Business Hours</h3>
            <p className="text-gray-600 text-center">
              When we&apos;re available
            </p>
            <p className="text-blue-500 hover:text-blue-600 font-medium text-center">
              Mon - Fri: 9:00 AM - 5:00 PM
              <br />
              Sat - Sun: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-12 bg-gray-50 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <BiSupport className="h-12 w-12 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Have a specific question or need assistance? Fill out the form
              below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Input
                    type="text"
                    label="Full Name"
                    size="lg"
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                  <FaHeadset className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    label="Email Address"
                    size="lg"
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                  <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <Input
                  type="tel"
                  label="Phone Number"
                  size="lg"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <MdPhone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <div className="relative">
                <Textarea
                  label="Message"
                  size="lg"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <FaRegClock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              </div>
              <Button
                color="blue"
                size="lg"
                className="w-full md:w-auto md:min-w-[200px] mx-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
