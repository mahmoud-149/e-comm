import React, { useContext } from "react";
import Store from "../../../context/Store";

const MyProfile = () => {
  const { loggedin } = useContext(Store);

  return <div>{loggedin.name} Profile</div>;
};

export default MyProfile;
