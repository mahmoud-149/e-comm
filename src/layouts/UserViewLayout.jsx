/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Everything from "../pages/Everything";
import Women from "../pages/Women";
import Men from "../pages/Men";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/validations/LogIn";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/cart/CheckOut";
import SignUp from "../pages/validations/SigunUp";
import MyProfile from "../pages/validations/MyProfile";
import EditProfile from "../pages/validations/EditProfile";
const UserViewLayout = ({
  products,
  cartItems,
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  deleteItem,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateCartItemQuantity={updateCartItemQuantity}
        deleteItem={deleteItem}
      />

      <main className="flex-grow">
        <Routes>
          <Route
            index
            element={<Home addToCart={addToCart} products={products} />}
          />
          <Route
            path="/everything"
            element={<Everything products={products} addToCart={addToCart} />}
          />
          <Route
            path="/women"
            element={<Women products={products} addToCart={addToCart} />}
          />
          <Route
            path="/men"
            element={<Men products={products} addToCart={addToCart} />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                updateCartItemQuantity={updateCartItemQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                deleteItem={deleteItem}
              />
            }
          />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default UserViewLayout;
