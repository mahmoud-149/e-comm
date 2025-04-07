import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Alert,
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router";
const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
   const addP = () => {
     const URL = import.meta.env.VITE_URL;

     if (
       newProduct.title == "" ||
       newProduct.description == "" ||
       newProduct.image == "" ||
       newProduct.category==""||
       newProduct.price == "" ||
       isNaN(Number(newProduct.price)) ||
       Number(newProduct.price) <= 0
     ) {
       // alert("Please fill in all fields correctly!");
       setFlag(false);
     } else {
       // console.log(newProduct.title);
       setFlag(true);

       axios({
         method: "post",
         url: `${URL}/products/`,
         data: newProduct,
       })
         .then((res) => {
           console.log(res);
         })
         .catch((e) => {
           console.log(e);
         });
       navigate(-1);
     }
   };

  //  useEffect(()=>{

  //   console.log(newProduct);
    
  //  },[newProduct])

  return (
      <div className="flex items-center justify-center">
        <Card color="transparent" shadow={true}>
          <Typography variant="h4" color="blue-gray">
            ADD Product
          </Typography>
          {!flag && <Alert color='red' >Please fill in all fields correctly!</Alert>}
  
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Title
              </Typography>
              <Input
                size="lg"
                placeholder="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => {
                  setNewProduct({ ...newProduct, title: e.target.value });
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Catogary
              </Typography>
              <Input
                size="lg"
                placeholder="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => {
                  setNewProduct({ ...newProduct, category: e.target.value });
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Description
              </Typography>
              <Textarea
                size="lg"
                placeholder="descripe"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900  "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => {
                  setNewProduct({ ...newProduct, description: e.target.value });
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Image
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => {
                  setNewProduct({ ...newProduct, image: e.target.value });
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Price
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => {
                  setNewProduct({ ...newProduct, price: e.target.value });
                }}
              />
            </div>
  
            <Button
              type="submit"
              className="mt-6"
              fullWidth
              color="green"
              onClick={addP}
            >
              ADD
            </Button>
          </form>
        </Card>
      </div>
    );
};

export default AddProduct;
