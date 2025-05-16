import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Typography } from "@material-tailwind/react";

const ViewUser = () => {
  const token = localStorage.getItem("token");
  const { _id } = useParams();
  const [theUser, setTheUser] = useState();

  const getTheView = async () => {
    const URL = import.meta.env.VITE_URL;
    const req = await axios({
      method: "get",
      url: `${URL}/api/users/${_id}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setTheUser(req.data.data.data);
  };

  useEffect(() => {
    getTheView();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-HeroText p-6 animate-fadeIn">
      <Card className="w-full max-w-lg p-8 bg-HeroText shadow-xl rounded-xl animate-slideIn">
        <Typography
          variant="h4"
          className="font-MainFont font-bold text-MainText mb-6 text-center underline decoration-MainButton underline-offset-4"
        >
          User Details
        </Typography>
        {theUser ? (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <Typography className="font-MainFont text-MainText font-semibold">
                Name:
              </Typography>
              <Typography className="font-MainFont text-MainText">
                {theUser.name}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography className="font-MainFont text-MainText font-semibold">
                Email:
              </Typography>
              <Typography className="font-MainFont text-MainText">
                {theUser.email}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography className="font-MainFont text-MainText font-semibold">
                Role:
              </Typography>
              <Typography className="font-MainFont text-MainText">
                {theUser.role}
              </Typography>
            </div>
          </div>
        ) : (
          <Typography className="font-MainFont text-MainText text-center">
            Loading user data...
          </Typography>
        )}
      </Card>
    </div>
  );
};

export default ViewUser;
