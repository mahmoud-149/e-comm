/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const SignUp = () => {
  const URL = import.meta.env.VITE_URL;
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [catchedError, setCatchedError] = useState({
    nameError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
    emailConflictError: false,
  });

  const regularExpressionEmail =
    /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  const saveInput = async () => {
    try {
      const res = await axios.post(`${URL}/api/users/signup`, user);
      return { success: res.status === 201 };
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return { success: false, message: "Email is already registered" };
      }
      console.error("Signup error:", error);
      return { success: false, message: "Internal server error" };
    }
  };

  const resetErrors = () => {
    setCatchedError({
      nameError: false,
      emailError: false,
      passwordError: false,
      confirmPasswordError: false,
      emailConflictError: false,
    });
  };

  const createAccount = async (e) => {
    e.preventDefault();
    resetErrors();

    if (user.name.trim().length < 2) {
      setCatchedError((prev) => ({ ...prev, nameError: true }));
      return;
    }

    if (!regularExpressionEmail.test(user.email)) {
      setCatchedError((prev) => ({ ...prev, emailError: true }));
      return;
    }

    if (user.password.length < 8) {
      setCatchedError((prev) => ({ ...prev, passwordError: true }));
      return;
    }

    if (user.password !== confirmedPassword) {
      setCatchedError((prev) => ({ ...prev, confirmPasswordError: true }));
      return;
    }

    const result = await saveInput();

    if (result.success) {
      setUser({ name: "", email: "", password: "", role: "user" });
      setConfirmedPassword("");
      navigate("/");
    } else {
      if (result.message === "Email is already registered") {
        setCatchedError((prev) => ({ ...prev, emailConflictError: true }));
      } else {
        alert(result.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-8xl flex-col md:flex-row items-center shadow-xl md:shadow-2xl transition-all duration-300 hover:shadow-3xl">
        {/* Image Section */}
        <CardHeader
          shadow={false}
          floated={false}
          className="relative m-0 w-full md:w-2/5 lg:w-2/3 h-64 md:h-auto shrink-0 rounded-t-lg md:rounded-r-none md:rounded-l-lg overflow-hidden"
        >
          <img
            src="/valid/signup.jpg"
            alt="card-image"
            className="h-full w-full object-cover rounded-t-lg md:rounded-l-lg brightness-75 transition-all duration-500 hover:brightness-90 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 flex flex-col items-center justify-center">
            <h1 className="text-7xl md:text-8xl lg:text-9xl text-white font-serif text-center tracking-wider">
              DNK
            </h1>
            <Typography
              variant="lead"
              color="white"
              className="mt-4 text-center max-w-md opacity-80"
            >
              Experience premium fashion with our curated collections
            </Typography>
          </div>
        </CardHeader>

        {/* Form Section */}
        <CardBody className="w-full md:w-3/5 lg:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 lg:p-12">
          <form onSubmit={createAccount}>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-center"
              >
                Create Account
              </Typography>

              <Typography
                variant="paragraph"
                color="gray"
                className="mb-6 md:mb-8 text-sm md:text-base text-center"
              >
                Please fill in your details to create your account
              </Typography>

              <div className="w-full space-y-4 md:space-y-6">
                <div className="group">
                  <Input
                    label="Full Name"
                    size="md"
                    className={`text-sm md:text-base ${
                      catchedError.nameError
                        ? "!border-red-700 focus:!border-red-500"
                        : "!border-t-blue-gray-200 !border-blue-700 focus:!border-blue-500"
                    }`}
                    containerProps={{ className: "min-w-[100px]" }}
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                  {catchedError.nameError && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-1 text-xs"
                    >
                      Name must be at least 2 characters long.
                    </Typography>
                  )}
                </div>

                <div className="group">
                  <Input
                    label="Email"
                    size="md"
                    className={`text-sm md:text-base ${
                      catchedError.emailError || catchedError.emailConflictError
                        ? "!border-red-700"
                        : "!border-t-blue-gray-200 focus:!border-blue-500"
                    }`}
                    containerProps={{ className: "min-w-[100px]" }}
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                  {catchedError.emailError && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-1 text-xs"
                    >
                      Please enter a valid email address.
                    </Typography>
                  )}
                  {catchedError.emailConflictError && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-1 text-xs"
                    >
                      Email is already registered.
                    </Typography>
                  )}
                </div>

                <div className="group">
                  <Input
                    type="password"
                    label="Password"
                    size="md"
                    className={`text-sm md:text-base ${
                      catchedError.passwordError
                        ? "!border-red-700"
                        : "!border-t-blue-gray-200 focus:!border-blue-500"
                    }`}
                    containerProps={{ className: "min-w-[100px]" }}
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 text-xs md:text-sm flex items-center gap-1 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3 w-3 md:h-4 md:w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Use at least 8 characters
                  </Typography>
                  {catchedError.passwordError && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-1 text-xs"
                    >
                      Password must be at least 8 characters.
                    </Typography>
                  )}
                </div>

                <div className="group">
                  <Input
                    type="password"
                    label="Confirm Password"
                    size="md"
                    className={`text-sm md:text-base ${
                      catchedError.confirmPasswordError
                        ? "!border-red-700"
                        : "!border-t-blue-gray-200 focus:!border-blue-500"
                    }`}
                    containerProps={{ className: "min-w-[100px]" }}
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                  />
                  {catchedError.confirmPasswordError && (
                    <Typography
                      variant="small"
                      color="red"
                      className="mt-1 text-xs"
                    >
                      Passwords do not match.
                    </Typography>
                  )}
                </div>

                <div className="flex items-center justify-center">
                  <Typography
                    as={Link}
                    to="/login"
                    variant="small"
                    className="text-xs md:text-sm text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300"
                  >
                    Already have an account?
                  </Typography>
                </div>

                <Button
                  type="submit"
                  fullWidth
                  size="md"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg py-2.5 md:py-3 text-sm md:text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignUp;