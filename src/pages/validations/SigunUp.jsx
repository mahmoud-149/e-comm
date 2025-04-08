import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-8xl flex-col md:flex-row items-center shadow-xl md:shadow-2xl transition-all duration-300 hover:shadow-3xl">
        {/* Image Section */}
        <CardHeader
          shadow={false}
          floated={false}
          className="relative m-0 w-full md:w-2/5 lg:w-2/3 h-64 md:h-auto shrink-0 rounded-t-lg md:rounded-r-none md:rounded-l-lg overflow-hidden"
        >
          <img
            src="/valid/signup.jpg"
            alt="card-image"
            className="h-full w-full object-cover rounded-t-lg md:rounded-l-lg brightness-75 transition-all duration-500 hover:brightness-90 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 flex flex-col items-center justify-center">
            <h1 className="text-7xl md:text-8xl lg:text-9xl text-white font-serif text-center tracking-wider">
              DNK
            </h1>
            <Typography
              variant="lead"
              color="white"
              className="mt-4 text-center max-w-md opacity-80"
            >
              Experience premium fashion with our curated collections
            </Typography>
          </div>
        </CardHeader>

        {/* Form Section */}
        <CardBody className="w-full md:w-3/5 lg:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-center"
            >
              Create Account
            </Typography>
            <Typography
              variant="paragraph"
              color="gray"
              className="mb-6 md:mb-8 text-sm md:text-base text-center"
            >
              Please fill in your details to create your account
            </Typography>

            <div className="w-full space-y-4 md:space-y-6">
              <div className="group">
                <Input
                  label="Full Name"
                  size="md"
                  className="!border-t-blue-gray-200 focus:!border-blue-500 text-sm md:text-base"
                />
              </div>

              <div className="group">
                <Input
                  label="Email"
                  type="email"
                  size="md"
                  className="!border-t-blue-gray-200 focus:!border-blue-500 text-sm md:text-base"
                />
              </div>

              <div className="group">
                <Input
                  label="Username"
                  size="md"
                  className="!border-t-blue-gray-200 focus:!border-blue-500 text-sm md:text-base"
                />
              </div>

              <div className="group">
                <Input
                  type="password"
                  label="Password"
                  size="md"
                  className="!border-t-blue-gray-200 focus:!border-blue-500 text-sm md:text-base"
                />
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 text-xs md:text-sm flex items-center gap-1 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3 md:h-4 md:w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Use at least 8 characters, one uppercase, one lowercase and
                  one number
                </Typography>
              </div>

              <div className="group">
                <Input
                  type="password"
                  label="Confirm Password"
                  size="md"
                  className="!border-t-blue-gray-200 focus:!border-blue-500 text-sm md:text-base"
                />
              </div>

              <div className="flex items-center justify-center">
                <Typography
                  as={Link}
                  to="/login"
                  variant="small"
                  className="text-xs md:text-sm text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300"
                >
                  Already have an account?
                </Typography>
              </div>

              <Button
                fullWidth
                size="md"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg py-2.5 md:py-3 text-sm md:text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignUp;
