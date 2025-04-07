// import { useEffect, useState } from "react";
// import Men from "../pages/Men";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   const getProducts = async () => {
//     const req = await fetch("https://fakestoreapi.com/products");
//     const data = await req.json();
//     setProducts(data);
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div>
//       <Men products={products} />
//     </div>
//   );
// };

// export default Products;
