import React, { useContext, useState, useEffect } from "react";
import Store from "../../../context/Store";
import { Link, useNavigate } from "react-router-dom";
import { FiCamera } from "react-icons/fi";
import { Avatar } from "@material-tailwind/react";

const EditProfile = () => {
  const { loggedin, setLoggedin } = useContext(Store);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
    previewImage:
      loggedin?.photo || "https://docs.material-tailwind.com/img/face-2.jpg",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedin) {
      setFormData((prev) => ({
        ...prev,
        name: loggedin.name || "",
        email: loggedin.email || "",
        phone: loggedin.phone || "",
        gender: loggedin.gender || "",
        previewImage: loggedin.photo || prev.previewImage,
      }));
    }
  }, [loggedin]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profilePicture: file,
          previewImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const updatedUser = {
        ...loggedin,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        gender: formData.gender,
        ...(formData.password && { password: formData.password }),
        ...(formData.profilePicture && { photo: formData.previewImage }),
      };

      setLoggedin(updatedUser);
      setSuccess(true);
      setTimeout(() => navigate("/MyProfile"), 1500);
    } catch (error) {
      console.error("Update failed:", error);
      setErrors({ submit: "Failed to update profile. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full p-6 min-h-screen font-MainFont">
      <div className="bg-MainButton text-HeroText p-8 rounded-lg mb-8 animate-fadeIn">
        <h1 className="text-3xl font-bold mb-2">Edit Your Profile</h1>
        <p className="text-lg opacity-90">Update your personal information</p>
      </div>

      <div className="flex justify-center mb-8 relative">
        <Avatar
          src={formData.previewImage}
          alt="avatar"
          size="xxl"
          className="border-4 border-HeroText"
        />
        <button
          onClick={() => document.getElementById("avatar-upload").click()}
          className="absolute bottom-0 right-1/2 translate-x-1/2 bg-MainButton text-HeroText p-2 rounded-full hover:bg-blue-700 hover:text-HeroText transition"
        >
          <FiCamera className="h-5 w-5" />
        </button>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {success && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
          Profile updated successfully!
        </div>
      )}
      {errors.submit && (
        <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6">
          {errors.submit}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 animate-slideIn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-MainButton">
            <label className="block text-md font-semibold text-MainText mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-MainButton">
            <label className="block text-md font-semibold text-MainText mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-MainButton">
            <label className="block text-md font-semibold text-MainText mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-MainButton">
            <label className="block text-md font-semibold text-MainText mb-2">
              Gender
            </label>
            <select
              name="gender"
              value="formData.gender"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-MainButton">
            <label className="block text-md font-semibold text-MainText mb-2">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-5 00 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {formData.password && (
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-MainButton">
              <label className="block text-md font-semibold text-MainText mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            type="submit"
            className="px-10 py-4 bg-MainButton text-HeroText rounded-lg text-center font-medium hover:bg-blue-700 hover:text-HeroText transition-all text-lg"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
          <Link
            to="/MyProfile"
            className="px-10 py-4 text-center text-MainText font-medium border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-lg"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
