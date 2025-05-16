import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ViewProduct = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const getTheView = async () => {
    const URL = import.meta.env.VITE_URL;
    const req = await axios({
      method: "get",
      url: `${URL}/api/products/${_id}`,
    });
    setProduct(req.data.data.data);
  };

  useEffect(() => {
    getTheView();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-HeroText p-6 animate-fadeIn">
      <Card className="w-full max-w-4xl flex flex-col md:flex-row bg-HeroText shadow-xl rounded-xl animate-slideIn">
        <CardHeader
          shadow={true}
          floated={false}
          className="h-96 m-4 rounded-lg"
        >
          <img
            src={product?.image}
            alt="product-image"
            className="object-cover w-full h-full rounded-lg"
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-around align-middle p-6">
          <div className="mb-4 flex flex-col items-center justify-between gap-4">
            <Typography className="font-MainFont font-bold text-3xl text-MainText">
              {product?.title || "No Title"}
            </Typography>
            <Typography className="font-MainFont font-semibold text-2xl text-MainText">
              {product?.price || "No Price"}
            </Typography>
          </div>
          <Typography
            variant="small"
            className="font-MainFont text-MainText opacity-75 text-center"
          >
            {product?.description || "No Description"}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex flex-col justify-center items-center gap-4 p-6">
          <Link to={`/admin/productcontrol/edit/${_id}`} className="w-full">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-MainButton text-HeroText hover:bg-HoverHeroButton hover:text-HeroText rounded-lg font-MainFont text-sm tracking-wide transition-all duration-300 shadow-md animate-slideIn"
            >
              Edit
            </Button>
          </Link>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-red-600 text-HeroText hover:bg-red-800 hover:text-HeroText rounded-lg font-MainFont text-sm tracking-wide transition-all duration-300 shadow-md animate-slideIn"
          >
            Delete
          </Button>
          <Button
            className="bg-MainButton text-HeroText hover:bg-HoverHeroButton hover:text-HeroText rounded-lg font-MainFont text-sm tracking-wide transition-all duration-300 shadow-md animate-slideIn"
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
