

import AdminViewLayout from './layouts/AdminViewLayout';


import { useEffect, useState } from "react";
import UserViewLayout from "./layouts/UserViewLayout";
import { Route, Routes } from 'react-router';
import { ThemeProvider } from '@material-tailwind/react';
import Store from './../context/Store';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

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
      const existingItem = prevItems.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== productId);
      }

      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
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
    <Store.Provider value={{ products }}>
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
          <Route path="/admin/*" element={<AdminViewLayout />} />
        </Routes>
      </div>
    </Store.Provider>
  );
}



export default App;


