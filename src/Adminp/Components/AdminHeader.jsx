import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Collapse,
} from "@material-tailwind/react";
import { GoBell } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    return () => window.removeEventListener("resize", () => {});
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 animate-slideIn">
      <div className="flex flex-col lg:flex-row gap-4">
        <Link to="/admin/usercontrol">
          <Button className="rounded-lg bg-MainButton text-HeroText hover:bg-HeroText hover:text-HoverHeroButton transition-all duration-300 shadow-md font-MainFont text-sm tracking-wide">
            User Control
          </Button>
        </Link>
        <Link to="/admin/productcontrol">
          <Button className="rounded-lg bg-MainButton text-HeroText hover:bg-HeroText hover:text-HoverHeroButton transition-all duration-300 shadow-md font-MainFont text-sm tracking-wide">
            Product Control
          </Button>
        </Link>
      </div>
    </ul>
  );

  return (
    <div className="px-4 py-2">
      <Navbar className="sticky top-0 z-20 max-w-full bg-HoverHeroButton rounded-xl px-4 py-3 lg:px-8 lg:py-4 shadow-xl border-none animate-fadeIn">
        <div className="flex items-center justify-between text-HeroText">
          <Typography
            as={Link}
            to="/admin"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-MainFont font-bold text-lg tracking-wide hover:text-MainButton transition-colors animate-fadeIn"
          >
            Admin Dashboard
          </Typography>
          <div className="hidden lg:flex items-center gap-4">
            {navList}
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-MainButton hover:text-HoverHeroButton transition-colors animate-slideIn"
            >
              <FaHome className="h-5 w-5 text-HeroText" />
            </Link>
          </div>
          <IconButton
            variant="text"
            className="lg:hidden text-HeroText hover:bg-MainButton hover:text-HoverHeroButton rounded-full transition-colors"
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
          <div className="py-4 bg-HoverHeroButton rounded-b-lg">
            {navList}
            <Button
              fullWidth
              className="mt-4 bg-MainButton text-HeroText hover:bg-HeroText hover:text-HoverHeroButton rounded-lg font-MainFont text-sm tracking-wide animate-slideIn"
              onClick={() => {
                navigate("/");
              }}
            >
              <span>Home</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AdminHeader;
