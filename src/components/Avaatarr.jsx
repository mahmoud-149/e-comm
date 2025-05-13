import React, { useContext } from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { CgProfile } from "react-icons/cg";
import { TbUserEdit } from "react-icons/tb";
import { BiLogOutCircle } from "react-icons/bi";
import { SiAdminer } from "react-icons/si";
import Store from "../../context/Store";
import { useNavigate } from 'react-router';
const Avaatarr = () => { 
    const navigate=useNavigate();
    const{loggedin}=useContext(Store);
    const profileMenuItems = [
      {
        label: `${loggedin?.name} Profile`,
        func: () => {
            navigate("/myprofile")
        },
        icon: CgProfile,
      },
      {
        label: "Edit Profile",
        func: () => {
          navigate("/editprofile");

        },
        icon: TbUserEdit,
      },
      //   {
      //     label: "Inbox",
      //     func: () => {},
      //     // icon: InboxArrowDownIcon,
      //   },
      {
        label: "Dashboard",
        func: () => {
        navigate("/admin");

        },
         icon: SiAdminer,
      },
      {
        label: "Sign Out",
        func: () => {logOut()},
        icon: BiLogOutCircle,
      },
    ];
    const {logOut}=useContext(Store)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

const closeMenu = () => setIsMenuOpen(false);

return (
  <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
    <MenuHandler>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center rounded-full p-0"
      >
        <Avatar
          variant="circular"
          size="md"
          alt="tania andrew"
          withBorder={true}
          color="blue-gray"
          className=" p-0.5"
          src="https://docs.material-tailwind.com/img/face-2.jpg" //u should get prmoise from userinfo
        />
      </Button>
    </MenuHandler>
    <MenuList className="p-1">
      {profileMenuItems.map(({ label,func ,icon }, key) => {
        const isLastItem = key === profileMenuItems.length - 1;
        const dashboard = (label == "Dashboard")?true:false;
        let   gotaccess=true;
        if(dashboard)
        {
              gotaccess=(loggedin?.role=="admin")?true:false;   
        }
        if(gotaccess)
        return (
          <MenuItem
            key={label}
            onClick={closeMenu}
            className={`flex items-center gap-2 rounded ${
              isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
            }`}
          >
             {React.createElement(icon, {
              className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
              strokeWidth: 2,
            })} 
            <div>
                
            <Typography
              as="span"
              variant="small"
              className="font-normal"
              onClick={func}
              color={isLastItem ? "red" : "inherit"}
              >
              {label}
            </Typography>
                </div>
          </MenuItem>
        );
      })}
    </MenuList>
  </Menu>
);
};

export default Avaatarr;
