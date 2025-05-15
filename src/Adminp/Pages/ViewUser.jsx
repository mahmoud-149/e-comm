import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ViewUser = () => {
      const { id } = useParams();
      const [theUser,setTheUser]=useState();
 const getTheView = async () => {
   const URL = import.meta.env.VITE_URL;
   const req = await axios({
     method: "get",
     url: `${URL}/api/users/${id}`,
   });
   setTheUser(req.data);
 };

 useEffect(()=>{
         getTheView()
         console.log(theUser);
         
     },[])
  return (
    <div>View {theUser?.name}</div>
  )
}

export default ViewUser