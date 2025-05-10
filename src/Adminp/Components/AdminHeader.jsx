import React from 'react'

import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
  Collapse,
} from "@material-tailwind/react";
// import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
 import { GoBell } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";

import { Link, Navigate, useNavigate } from 'react-router';
const AdminHeader = () => {
  const navigate =useNavigate()
 const [openNav, setOpenNav] = React.useState(false);

 React.useEffect(() => {
   window.addEventListener(
     "resize",
     () => window.innerWidth >= 960 && setOpenNav(false)
   );
 }, []);

 const navList = (
   <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
     <div className="flex gap-4">
       <Link to="/admin/usercontrol">
         <Button color="teal">User control</Button>
       </Link>
       <Link to="/admin/productcontrol">
         <Button color="cyan">ProductControl</Button>
       </Link>
     </div>
    
   </ul>
 );
 
   
    
  return (
    <div className=" m-2 max-h-[768px]  ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full bg-gray-600 rounded-none px-2 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as={Link}
            to="/admin"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Dashboard
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <Link
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            to="/"
          >
            <FaHome className="h-5 w-5" />
          </Link>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <HiOutlineXMark className="h-6 w-6" strokeWidth={2} />
            ) : (
              <FaBars className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          {navList}
          
          <Button fullWidth variant="gradient" size="sm" className="" onClick={()=>{
            navigate("/")
          }}>
            <span>Home</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AdminHeader