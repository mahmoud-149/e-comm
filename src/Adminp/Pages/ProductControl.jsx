import React from 'react'
import DataTable from '../Components/DataTable'
import { Link } from 'react-router';
import { Button } from '@material-tailwind/react';

const ProductControl = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-10 ">
      <h1 className="text-2xl font-bold underline">Product Control</h1>
      <Link to="addproduct">
        <Button color="blue">Add new product</Button>
      </Link>
      <DataTable />
    </div>
  );
}

export default ProductControl