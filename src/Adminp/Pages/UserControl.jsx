import React from "react";

import { Link } from "react-router";
import { Button } from "@material-tailwind/react";
import UsersTable from "../Components/UsersTable";
const UserControl = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-10 ">
      <h1 className="text-2xl font-bold underline">User Control</h1>
      
      <UsersTable />
    </div>
  );
};

export default UserControl;
