import { createContext, useContext } from "react";

const Store = createContext({
  products: [],
  loggedin: {
    id: '',
    name: '',
    email: '',
    password: '',
    role: 'user' // default to user
  },
  statslog: false,
  logOut: undefined,
  setLoggedin: undefined,
  setStatslog: undefined,
});

export default Store;
