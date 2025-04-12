import { createContext, useContext } from "react";

const Store = createContext({
  products: [],
  loggedin: {}, //the user success log
  statslog: false,
  logOut: undefined,
  setLoggedin: undefined,
  setStatslog: undefined,
  allUsers: [],
  setAllUsers: undefined,
  getAllUsers:undefined,
});

export default Store;
