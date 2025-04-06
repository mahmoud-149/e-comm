import { Route, Routes } from "react-router";
import Dashboard from "../Adminp/Pages/Dashboard";
import UserControl from "./../Adminp/Pages/UserControl";
import ProductControl from "../Adminp/Pages/ProductControl";
import ViewProduct from "./../Adminp/Pages/ViewProduct";
import EditProduct from "./../Adminp/Pages/EditProduct";
import AdminHeader from "../Adminp/Components/AdminHeader";
import AddProduct from "../Adminp/Pages/AddProduct";

const AdminViewLayout = () => {
  return (
    <div>
      <AdminHeader />

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="usercontrol" element={<UserControl />} />
        <Route path="productcontrol" element={<ProductControl />} />
        <Route path="productcontrol/addproduct" element={<AddProduct />} />

        <Route path="productcontrol/view/:id" element={<ViewProduct />} />
        <Route path="productcontrol/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default AdminViewLayout;
