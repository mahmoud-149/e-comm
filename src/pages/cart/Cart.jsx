/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router";
import { FaTrash, FaArrowLeft, FaLock } from "react-icons/fa6";

const Cart = ({ cartItems, updateCartItemQuantity, clearCart, deleteItem }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    const newShipping = newSubtotal > 100 ? 0 : 10;
    setShipping(newShipping);
    setTotal(newSubtotal + newShipping);
  }, [cartItems]);

  const handleQuantityChange = (item, newQuantity) => {
    updateCartItemQuantity(item.id, parseInt(newQuantity));
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Typography variant="h3" className="mb-6 text-2xl md:text-3xl">
          Your Cart
        </Typography>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex flex-col items-center justify-center py-12">
            <svg
              className="w-16 h-16 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
            <Typography className="text-xl mb-4">Your cart is empty</Typography>
            <Typography className="text-gray-500 mb-6">
              Looks like you havent added anything to your cart yet.
            </Typography>
            <Link to="/everything">
              <Button color="blue" className="flex items-center gap-2">
                <FaArrowLeft className="h-4 w-4" /> Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Typography variant="h3" className="mb-6 text-2xl md:text-3xl">
        Shopping Cart
      </Typography>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            {/* Mobile View */}
            <div className="md:hidden">
              {cartItems.map((item) => (
                <div key={item.id} className="border-b p-4">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-20 object-contain bg-white p-1 rounded"
                    />
                    <div className="flex-1">
                      <Typography variant="small" className="font-medium">
                        {item.title}
                      </Typography>
                      <Typography variant="small" className="text-gray-600">
                        ${item.price.toFixed(2)}
                      </Typography>

                      <div className="flex items-center gap-2 mt-2">
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
                            disabled={item}
                            className="w-12 text-center border-x py-1 px-0"
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
                          className="text-red-500 hover:text-red-700 ml-2"
                          onClick={() => deleteItem(item.id)}
                        >
                          <FaTrash size={16} />
                        </button>
                      </div>

                      <Typography className="mt-2 font-medium">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <table className="w-full min-w-max table-auto text-left hidden md:table">
              <thead>
                <tr className="border-b border-blue-gray-100 bg-blue-gray-50">
                  <th className="p-4">
                    <Typography variant="small" className="font-normal">
                      Product
                    </Typography>
                  </th>
                  <th className="p-4">
                    <Typography variant="small" className="font-normal">
                      Price
                    </Typography>
                  </th>
                  <th className="p-4">
                    <Typography variant="small" className="font-normal">
                      Quantity
                    </Typography>
                  </th>
                  <th className="p-4">
                    <Typography variant="small" className="font-normal">
                      Total
                    </Typography>
                  </th>
                  <th className="p-4">
                    <Typography variant="small" className="font-normal">
                      Action
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  const isLast = index === cartItems.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={item.id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-16 w-16 object-contain bg-white p-1 rounded"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              className="font-medium "
                            >
                              {item.title.slice(0, 30)}.....
                            </Typography>
                            <Typography
                              variant="small"
                              className="text-gray-600"
                            >
                              {item.category}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography variant="small">
                          ${item.price.toFixed(2)}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center border rounded w-32">
                          <button
                            className="px-2 py-1 text-gray-600 hover:bg-gray-200"
                            onClick={() =>
                              handleQuantityChange(item, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <input
                            type="value"
                            disabled={item}
                            className="w-12 text-center border-x py-1 px-0"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item, e.target.value)
                            }
                          />
                          <button
                            className="px-2 py-1 text-gray-600 hover:bg-gray-200"
                            onClick={() =>
                              handleQuantityChange(item, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => deleteItem(item.id)}
                        >
                          <FaTrash size={16} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <CardFooter className="flex flex-col md:flex-row items-center justify-between border-t border-blue-gray-50 p-4 gap-4">
              <button
                className="text-blue-500 hover:text-blue-700 flex items-center gap-2 w-full md:w-auto justify-center"
                onClick={() => navigate("/everything")}
              >
                <FaArrowLeft size={14} />
                Continue Shopping
              </button>
              <Button
                variant="text"
                color="red"
                className="flex items-center gap-2 w-full md:w-auto justify-center"
                onClick={clearCart}
              >
                <FaTrash size={14} />
                Clear Cart
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-8">
            <CardBody>
              <Typography variant="h6" className="mb-4">
                Order Summary
              </Typography>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Typography>Subtotal</Typography>
                  <Typography>${subtotal.toFixed(2)}</Typography>
                </div>
                <div className="flex justify-between">
                  <Typography>Shipping</Typography>
                  <Typography>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </Typography>
                </div>
                {subtotal < 100 && (
                  <div className="text-sm text-green-600 mt-2">
                    Add ${(100 - subtotal).toFixed(2)} more to get FREE
                    shipping!
                  </div>
                )}
                <div className="border-t my-4 pt-4">
                  <div className="flex justify-between font-bold">
                    <Typography>Total</Typography>
                    <Typography>${total.toFixed(2)}</Typography>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/checkout" className="w-full">
                <Button
                  size="lg"
                  fullWidth
                  className="bg-blue-500 flex items-center justify-center gap-2"
                >
                  <FaLock size={14} />
                  Proceed to Checkout
                </Button>
              </Link>
              <div className="mt-4 text-center">
                <div className="mt-4 text-center">
                  <Typography variant="small" className="font-normal">
                    We accept:
                  </Typography>
                  <div className="flex flex-wrap justify-center gap-3 mt-2">
                    {["paypal", "mastercard", "visa", "amex"].map((pay) => (
                      <img
                        key={pay}
                        src={`/paymethod/${pay}.jpg`}
                        alt={pay}
                        className="h-6 object-contain"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
