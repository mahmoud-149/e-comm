import React from "react";
import { Link } from "react-router";
import { Button } from "@material-tailwind/react";
import UsersTable from "../Components/UsersTable";

const UserControl = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 gap-12 bg-HeroText min-h-screen animate-fadeIn">
      <h1 className="text-3xl font-MainFont font-bold text-MainText underline decoration-MainButton underline-offset-4 animate-slideIn">
        User Control
      </h1>
      <div className="w-full max-w-5xl">
        <UsersTable />
      </div>
    </div>
  );
};

export default UserControl;
