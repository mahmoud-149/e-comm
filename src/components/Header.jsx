/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Drawer,
  Button,
} from "@material-tailwind/react";
import { IoMdLogIn, IoMdCart } from "react-icons/io";
import { Link, useLocation } from "react-router";
import { FaBars, FaRegCircleXmark, FaTrash } from "react-icons/fa6";

function NavList({ openDrawerRight, cartItemsCount }) {
  const location = useLocation();

  const navItems = [
    { path: "/men", label: "Men" },
    { path: "/women", label: "Women" },
    { path: "/everything", label: "Everything" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <ul className="my-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <Typography
          key={item.path}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-MainFont"
        >
          <Link
            to={item.path}
            className={`flex items-center hover:text-blue-500 transition-colors text-lg lg:text-base ${
              location.pathname === item.path ? "text-blue-500 font-bold" : ""
            }`}
          >
            {item.label}
          </Link>
        </Typography>
      ))}

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-MainFont"
      >
        <Link
          to="/login"
          className={`flex items-center hover:text-blue-500 transition-colors text-lg lg:text-base ${
            location.pathname === "/login" ? "text-blue-500" : ""
          }`}
        >
          <IoMdLogIn className="text-2xl lg:text-xl" />
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-MainFont relative"
      >
        <button
          className="flex items-center hover:text-blue-500 transition-colors text-lg lg:text-base"
          onClick={openDrawerRight}
        >
          <IoMdCart className="text-2xl lg:text-xl" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-1 -right-0 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </button>
      </Typography>
    </ul>
  );
}

const Header = ({ cartItems, updateCartItemQuantity, deleteItem }) => {
  const [openNav, setOpenNav] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const location = useLocation();

  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const handleQuantityChange = (item, newQuantity) => {
    updateCartItemQuantity(item.id, parseInt(newQuantity));
  };

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    setOpenNav(false);
  }, [location]);

  return (
    <div className="sticky top-0 z-50">
      <Navbar className="bg-white backdrop-opacity-70 max-w-full px-6 py-4 lg:py-7 lg:w-full rounded-none border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 font-MainFont text-2xl lg:text-xl"
          >
            <Link to="/" className=" text-5xl font-serif">
              DNK
            </Link>
          </Typography>

          <div className="hidden lg:block mr-7">
            <NavList
              openDrawerRight={openDrawerRight}
              cartItemsCount={cartItemsCount}
            />
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <FaRegCircleXmark className="h-6 w-6" strokeWidth={2} />
            ) : (
              <FaBars className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        <Collapse open={openNav}>
          <NavList
            openDrawerRight={openDrawerRight}
            cartItemsCount={cartItemsCount}
          />
        </Collapse>
      </Navbar>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 "
      >
        <div className="mb-6 flex items-center justify-between ">
          <Typography variant="h5" color="blue-gray">
            Shopping Cart ({cartItemsCount})
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48">
            <IoMdCart className="text-4xl text-gray-400 mb-2" />
            <Typography color="gray" className="mb-8 font-normal text-center">
              Your cart is empty
            </Typography>
            <Button size="sm" variant="outlined" onClick={closeDrawerRight}>
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-4 space-y-4 max-h-96 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-2 bg-blue-gray-50 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-contain rounded bg-white p-1"
                  />

                  <div className="flex-1 min-w-0">
                    <Typography
                      variant="small"
                      className="font-semibold text-sm truncate"
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="small" className="text-blue-gray-600">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </Typography>
                    <Typography variant="small" className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center border rounded">
                      <button
                        className="px-2 text-gray-600 hover:bg-gray-200"
                        onClick={() =>
                          handleQuantityChange(item, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <input
                        type="value"
                        disabled
                        className="w-10 text-center border-x px-0"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item, e.target.value)
                        }
                      />
                      <button
                        className="px-2 text-gray-600 hover:bg-gray-200"
                        onClick={() =>
                          handleQuantityChange(item, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700 text-sm mt-1"
                      onClick={() => deleteItem(item.id)}
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between mb-2">
                <Typography>Subtotal:</Typography>
                <Typography className="font-semibold">
                  ${cartTotal.toFixed(2)}
                </Typography>
              </div>
              <Typography className="text-sm text-gray-600 mb-4">
                Shipping & taxes calculated at checkout
              </Typography>
            </div>

            <div className="flex flex-col gap-2">
              <Link to="/cart" className="w-full">
                <Button size="sm" fullWidth onClick={closeDrawerRight}>
                  View Cart
                </Button>
              </Link>
              <Link to="/checkout" className="w-full">
                <Button
                  size="sm"
                  color="green"
                  fullWidth
                  onClick={closeDrawerRight}
                >
                  Checkout
                </Button>
              </Link>
            </div>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default Header;
