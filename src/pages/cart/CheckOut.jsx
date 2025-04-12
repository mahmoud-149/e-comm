/* eslint-disable react/prop-types */
import { Input, Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FaLock } from "react-icons/fa6";
import Swal from "sweetalert2";

const CheckOut = ({ cartItems, clearCart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [errors, setErrors] = useState({});

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

  const inpList = [
    { input: "firstName", label: "First Name" },
    { input: "lastName", label: "Last Name" },
    { input: "email", label: "Email Address" },
    { input: "phone", label: "Phone Number" },
    { input: "address", label: "Street Address" },
    { input: "city", label: "City" },
    { input: "state", label: "State/Province" },
    { input: "zipCode", label: "ZIP/Postal Code" },
    { input: "country", label: "Country" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    inpList.map((field) => {
      if (!formData[field.input].trim()) {
        newErrors[field.input] = `${field.label} is required`;
        isValid = false;
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    const phoneRegex = /^\d{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    const zipRegex = /^\d{5,}$/;
    if (
      formData.zipCode &&
      !zipRegex.test(formData.zipCode.replace(/\D/g, ""))
    ) {
      newErrors.zipCode = "Please enter a valid ZIP code";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) {
      Swal.fire({
        title: "Form Validation Error",
        text: "Please fill in all required fields correctly",
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Order",
      text: "Are you sure you want to place this order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, place order",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();

        Swal.fire({
          title: "Order Placed!",
          text: "Your order has been successfully placed.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          navigate("/");
        });
      }
    });
  };

  return (
    <div className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-center font-semibold text-gray-800 text-3xl sm:text-4xl md:text-5xl">
          Checkout
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Billing Details Section */}
        <section className="flex flex-col gap-6 bg-white p-5 sm:p-6 rounded-lg shadow-sm w-full lg:w-[60%]">
          <div className="border-b pb-3">
            <h2 className="text-lg sm:text-xl font-medium text-gray-700">
              Billing Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inpList.map((inp, index) => (
              <div
                key={index}
                className={`${
                  inp.input === "address" || inp.input === "country"
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <Input
                  type={inp.input === "email" ? "email" : "text"}
                  label={inp.label}
                  size="lg"
                  name={inp.input}
                  value={formData[inp.input]}
                  onChange={handleInputChange}
                  className={`!border ${
                    errors[inp.input] ? "!border-red-500" : "!border-gray-200"
                  } bg-white text-gray-900 shadow-sm placeholder:text-gray-400 focus:!border-gray-900 focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {errors[inp.input] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[inp.input]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
              onClick={handlePlaceOrder}
              disabled={cartItems.length === 0}
            >
              <FaLock className="h-4 w-4" />
              Place Order
            </Button>
          </div>
        </section>

        {/* Order Summary Section */}
        <section className="flex flex-col gap-6 bg-white p-5 sm:p-6 rounded-lg shadow-sm w-full lg:w-[40%] h-fit sticky top-4">
          <h2 className="text-lg sm:text-xl font-medium text-gray-700 border-b pb-3">
            Order Summary
          </h2>

          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center py-4 text-sm">
                Your cart is empty
              </p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-14 w-14 sm:h-16 sm:w-16 object-contain bg-gray-50 p-1 rounded border"
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-medium truncate text-sm"
                      title={item.title}
                    >
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium whitespace-nowrap text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Shipping</p>
              <p className="text-sm">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </p>
            </div>
            <div className="flex justify-between border-t pt-3">
              <p className="text-base font-medium">Total</p>
              <p className="text-base font-bold text-blue-600">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckOut;
