import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router';

const ViewUser = () => {
      const { id } = useParams();
      const [theUser,setTheUser]=useState({});
 const getTheView = async () => {
   const URL = import.meta.env.VITE_URL;
   const req = await axios({
     method: "get",
     url: `${URL}/user/${id}`,
   });
   setProduct(req.data);
 };

 useEffect(()=>{
         getTheView()
         
     },[])
  return (
    <div>ViewUser</div>
  )
}

export default ViewUser