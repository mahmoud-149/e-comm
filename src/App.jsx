import AdminViewLayout from "./layouts/AdminViewLayout";

import { useEffect, useState } from "react";
import UserViewLayout from "./layouts/UserViewLayout";
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Store from "./../context/Store";
import axios from "axios";
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  const [loggedin, setLoggedin] = useState(); //the user
  const [statslog, setStatslog] = useState(localStorage.id ? true : false);

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLogInfo = () => {
    if (localStorage.id) {
      const URL = import.meta.env.VITE_URL; // to secure the data base in real projects
      axios({
        method: "get",
        url: `${URL}/user/${localStorage.id}`,
      }).then((res) => {
        setLoggedin(res.data);
      }).catch((e)=>{
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
    try{

     const req= await  axios({
        method:"get",
        url:`${URL}/products`
      });
      setProducts(req.data);
      setLoading(false)

    }catch(e){
      setProducts(e.message);
      setLoading(false);
    }



    // fetch(`${URL}/products`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setProducts(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching products:", error);
    //     setLoading(false);
    //   });
  };

  useEffect(() => {
    getTheProducts();
  }, [products]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
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

  if (loading) {
    return <div>Loading products...</div>;
  }

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
              />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetailsWrapper products={products} addToCart={addToCart} />}
          />
          <Route path="/admin/*" element={loggedin?.role=="admin"? (<AdminViewLayout />):(<NotFound/>)} />
        </Routes>
      </div>
    </Store.Provider>
  );
};

const ProductDetailsWrapper = ({ products, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <ProductDetails
      addToCart={addToCart}
      product={product}
      onClose={() => navigate()}
    />
  );
};

export default App;
