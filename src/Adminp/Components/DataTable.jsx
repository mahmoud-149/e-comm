//delete function need backend


import React, { useContext, useEffect } from 'react'
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import Store from '../../../context/Store';

const TABLE_HEAD = ["Title", "Price", "Image", "Action"];

const deleteProduct = async (id) => {   //waiting for realbackend to delete

  // console.log(`${id} deleted`);
  
  try {
    const req = await axios({
      method: "delete",
      url: `http://localhost:3000/products/${id}`,
    });

    return req.status;
  } catch (e) {
    return e.status;
  }
};
const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success",
      });

      deleteProduct(id);
    }
  });
};


const DataTable = () => {
      const { products } = useContext(Store);

 

  return (
    <Card className="h-full w-full overflow-auto ">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
               
          {products.map(({id, title, price, image }, index) => {
                  const isLast = index === products.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
               
                 return (
                      <tr key={title}>
                       <td className={classes}>
                            <Typography
                               variant="small"
                                   color="blue"
                                   className="font-normal"
                                 >
                                   {title}
                                 </Typography>
                               </td>
                               <td className={classes}>
                                 <Typography
                                   variant="small"
                                   color="red"
                                   className="font-normal"
                                 >
                                   {price}
                                 </Typography>
                               </td>
                               <td className={classes}>
                                 <Avatar src={image} />
                               </td>
                               <td className={classes}>
                                 <div className=" flex gap-2  justify-center">
                                   <Link to={`view/${id}`} >
                                     <Button color='blue'>View</Button>
                                   </Link>
                                   <Link to={`edit/${id}`}>
                                     <Button>Edit</Button>
                                   </Link>
                                   <Link>
                                     <Button onClick={()=>{handleDelete(id);
                                     }} color="red">Delete</Button>
                                   </Link>
                                 </div>
                               </td>
                             </tr>
                           );
                })}

            
                
            </tbody>
          </table>
        </Card>
  )
}

export default DataTable