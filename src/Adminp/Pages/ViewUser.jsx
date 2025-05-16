import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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
    // console.log(req.data.data.data);

    setTheUser(req.data.data.data);
  };

  useEffect(() => {
    getTheView();
   // console.log(theUser);
  }, []);
  return <div>View {theUser?.name}</div>;
};

export default ViewUser;
