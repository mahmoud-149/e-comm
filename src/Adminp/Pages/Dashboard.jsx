import React, { useContext, useEffect } from "react";
import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Store from "../../../context/Store";
import axios from "axios";
const Dashboard = () => {
  const { allUsers, products, getAllUsers } = useContext(Store);
  

useEffect(()=>{
  getAllUsers();
},[])
  return (
    <div className="flex gap-5 justify-around items-center pt-9 flex-col md:flex-row lg:flex-row ">
      <Card
        color="teal"
        variant="gradient"
        className="w-full max-w-[20rem] p-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-6xl font-normal"
          >
            User
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1"></span>
              <Typography className="font-normal">Number of Users: {allUsers.length} </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Link to="usercontrol">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              Modify
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card
        color="cyan"
        variant="gradient"
        className="w-full max-w-[20rem] p-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-6xl font-normal"
          >
            Product
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1"></span>
              <Typography className="font-normal">Number of Products: {products.length}</Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Link to="productcontrol">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              Modify
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashboard;
