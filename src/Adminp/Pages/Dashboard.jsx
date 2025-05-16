import React, { useContext, useEffect } from "react";
import { Link } from "react-router";
import { Typography, Button } from "@material-tailwind/react";
import Store from "../../../context/Store";

const Dashboard = () => {
  const { allUsers, products, getAllUsers } = useContext(Store);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 font-MainFont">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* User Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeIn">
          <div className="text-center border-b border-gray-200 pb-4">
            <Typography
              variant="h1"
              color="black"
              className="text-3xl font-bold tracking-tight"
            >
              Users
            </Typography>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-p"></span>
              <Typography color="black" className="text-base font-medium">
                Number of Users: {allUsers.length}
              </Typography>
            </div>
          </div>
          <div className="mt-6">
            <Link to="usercontrol">
              <Button
                size="lg"
                className="w-full bg-MainButton text-HeroText font-semibold rounded-md hover:bg-HoverHeroButton hover:text-HeroText transition-all duration-200"
                ripple={false}
              >
                Modify
              </Button>
            </Link>
          </div>
        </div>

        {/* Product Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slideIn">
          <div className="text-center border-b border-gray-200 pb-4">
            <Typography
              variant="h1"
              color="black"
              className="text-3xl font-bold tracking-tight"
            >
              Products
            </Typography>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-p"></span>
              <Typography color="black" className="text-base font-medium">
                Number of Products: {products.length}
              </Typography>
            </div>
          </div>
          <div className="mt-6">
            <Link to="productcontrol">
              <Button
                size="lg"
                className="w-full bg-MainButton text-HeroText font-semibold rounded-md hover:bg-HoverHeroButton hover:text-HeroText transition-all duration-200"
                ripple={false}
              >
                Modify
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
