import React, { useContext } from "react";
import Store from "../../../context/Store";
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";

const MyProfile = () => {
  const { loggedin } = useContext(Store);


  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.split(" ");
    let initials = names[0].charAt(0).toUpperCase();
    if (names.length > 1) {
      initials += names[names.length - 1].charAt(0).toUpperCase();
    }
    return initials;
  };

  return (
    <div className="w-full p-6 min-h-screen font-MainFont">
      <div className="bg-MainButton text-HeroText p-8 rounded-lg mb-8 animate-fadeIn">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {loggedin?.name || "User"}!
        </h1>
        <p className="text-lg opacity-90">Here's your profile information</p>
      </div>

      <div className="flex justify-center mb-8">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          size="xxl"
          alt="avatar"
        ></Avatar>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 animate-slideIn">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-MainButton">
          <h3 className="text-md font-semibold text-MainText mb-2">
            Full Name
          </h3>
          <p className="text-gray-800 text-xl">{loggedin?.name}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-MainButton">
          <h3 className="text-md font-semibold text-MainText mb-2">Email</h3>
          <p className="text-gray-800 text-xl">
            {loggedin?.email || "example@gmail.com"}
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-MainButton">
          <h3 className="text-md font-semibold text-MainText mb-2">Phone</h3>
          <p className="text-gray-800 text-xl">
            {loggedin?.phone || "+0123-456-789"}
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-MainButton">
          <h3 className="text-md font-semibold text-MainText mb-2">Gender</h3>
          <p className="text-gray-800 text-xl">
            {loggedin?.gender || "Not Specified"}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <Link
          to="/EditProfile"
          className="px-10 py-4 bg-MainButton text-HeroText rounded-lg text-center font-medium hover:bg-blue-700 hover:text-HeroText transition-all text-lg"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );

};

export default MyProfile;
