/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import AdminViewLayout from "./layouts/AdminViewLayout";

import { useEffect, useState } from "react";
import UserViewLayout from "./layouts/UserViewLayout";
import { Route, Routes, useParams, useNavigate } from "react-router";
import { ThemeProvider } from "@material-tailwind/react";
import Store from "./../context/Store";
import axios from "axios";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  const [loggedin, setLoggedin] = useState(); //the user
  const [statslog, setStatslog] = useState(localStorage.id ? true : false);

  const [products, setProducts] = useState([]);
  const [productSE, setProductSE] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const getLogInfo = () => {
    if (localStorage.id) {
      const URL = import.meta.env.VITE_URL; // to secure the data base in real projects
      axios({
        method: "get",
        url: `${URL}/user/${localStorage.id}`,
      })
        .then((res) => {
          setLoggedin(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const logOut = () => {
    localStorage.removeItem("id");
    setStatslog(false);
  };
  useEffect(() => {
    getLogInfo();

    // console.log("callbackend");
  }, [statslog]);

  const getTheProducts = async () => {
    const URL = import.meta.env.VITE_URL;
    try {
      const req = await axios({
        method: "get",
        url: `${URL}/products`,
      });
      let mainData = req?.data?.data?.data;

      setProducts(mainData);
      let allMenProduct = mainData.filter(
        (product) => product.category == "men"
      );
      let allWomenProduct = mainData.filter(
        (product) => product.category == "women"
      );
      setMenProducts(allMenProduct);
      setWomenProducts(allWomenProduct);
    } catch (e) {
      setProductSE(e.message);
    }
  };

  useEffect(() => {
    getTheProducts();
  }, []);

  const getAllUsers = async () => {
    const URL = import.meta.env.VITE_URL;
    const req = await axios({
      method: "get",
      url: `${URL}/user`,
    });
    setAllUsers(req.data);
  };
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: product.quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity > 0 ? { deleteItem } : item.quantity - 1,
            }
          : item
      );
    });
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      deleteItem(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const deleteItem = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Store.Provider
      value={{
        products,
        setProducts,
        loggedin,
        statslog,
        logOut,
        setLoggedin,
        setStatslog,
        allUsers,
        setAllUsers,
        getAllUsers,
      }}
    >
      <div>
        <Routes>
          <Route
            path="/*"
            element={
              <UserViewLayout
                products={products}
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                updateCartItemQuantity={updateCartItemQuantity}
                clearCart={clearCart}
                deleteItem={deleteItem}
                menProducts={menProducts}
                womenProducts={womenProducts}
              />
            }
          />

          {productSE && productSE}

          <Route
            path="/products/:id"
            element={
              <ProductDetailsWrapper
                products={products}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/admin/*"
            element={
              loggedin?.role == "admin" ? <AdminViewLayout /> : <NotFound />
            }
          />
        </Routes>
      </div>
    </Store.Provider>
  );
};

const ProductDetailsWrapper = ({ products, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <ProductDetails
      addToCart={addToCart}
      product={product}
      onClose={() => navigate(-1)}
    />
  );
};

export default App;
