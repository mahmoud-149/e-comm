import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from 'react-router';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ViewProduct = () => {
  const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate=useNavigate();


    const getTheView= async ()=>{
      /*https://fakestoreapi.com/products */
      const URL=import.meta.env.VITE_URL;
      const req = await axios({
        method: "get",
        url: `${URL}/api/products/${id}`,
      });
      setProduct(req.data);
    }
    useEffect(()=>{
        getTheView()
        // console.log(product);
        
    },[])
    // useEffect(() => {
    //   console.log(product);
    // }, [product]);

  return (
    <div className="flex justify-center">
      <Card className="w-full flex flex-col md:flex-row ">
        <CardHeader shadow={true} floated={false} className="h-96">
          <img src={product?.image} alt="card-image" className="object-cover" />
        </CardHeader>
        <CardBody className="flex flex-col justify-around align-middle">
          <div className="mb-2 flex flex-col  items-center justify-between">
            <Typography color="blue-gray" className="font-medium text-3xl">
              {product?.title || "No Title"}
            </Typography>
            <Typography color="blue-gray" className="font-medium text-2xl">
              {product?.price || "No Price"}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {product?.description || "No Description"}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex flex-col justify-center items-center gap-4">
          <Link to={`/admin/productcontrol/edit/${id}`} className="w-full">
            <Button
              ripple={false}
              fullWidth={true}
              className=" shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              // onClick={()=>{
              //   navigate(`./edit/${id}`)
              // }}
            >
              Edit
            </Button>
          </Link>
          <Button
            ripple={false}
            fullWidth={true}
            color="red"
            className="  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Delete
          </Button>
          <Button
            className=""
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ViewProduct;

{/* <Button onClick={()=>{navigate(-1)}}>Back</Button> */}