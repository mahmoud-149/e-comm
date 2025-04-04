import React from 'react'
import { Link } from 'react-router';
import {

  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const Dashboard = () => {
  return (
    <div className="flex gap-5 justify-around items-center pt-9 flex-col md:flex-row lg:flex-row ">
      <Card
        color="blue"
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
        color="blue"
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
}

export default Dashboard