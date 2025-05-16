import React from "react";
import DataTable from "../Components/DataTable";
import { Link } from "react-router";
import { Button } from "@material-tailwind/react";

const ProductControl = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 gap-12 bg-HeroText min-h-screen animate-fadeIn">
      <h1 className="text-3xl font-MainFont font-bold text-MainText underline decoration-MainButton underline-offset-4 animate-slideIn">
        Product Control
      </h1>
      <Link to="addproduct">
        <Button className="bg-MainButton text-HeroText hover:bg-HoverHeroButton hover:text-HeroText rounded-lg font-MainFont text-sm tracking-wide transition-all duration-300 shadow-md animate-slideIn">
          Add New Product
        </Button>
      </Link>
      <div className="w-full max-w-5xl">
        <DataTable />
      </div>
    </div>
  );
};

export default ProductControl;
