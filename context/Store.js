import { createContext, useContext } from "react";

const Store = createContext({
  products: [],
});

export default Store;
