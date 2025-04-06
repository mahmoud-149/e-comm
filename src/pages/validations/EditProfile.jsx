import React, { useContext } from "react";
import Store from "../../../context/Store";

const EditProfile = () => {
  const { loggedin } = useContext(Store);

  return <div>Edit {loggedin.name} Profile</div>;
};

export default EditProfile;
