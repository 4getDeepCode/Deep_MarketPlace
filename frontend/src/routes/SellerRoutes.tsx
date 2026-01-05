
import { Route, Routes } from "react-router";
import HomePage from "../seller/pages/SellerDashboard/HomePage";

import AddProductForm from "../seller/pages/Products/AddProductForm";
import Orders from "../seller/pages/Orders/Orders";

import Products from "../seller/pages/Products/Products";
import Profile from "../seller/pages/Account/Profile";
import Payment from "../seller/pages/Payment/Payment";
import TransactionTable from "../seller/pages/Payment/TransactionTable";

const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/add-product" element={<AddProductForm />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/account" element={<Profile />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/transaction" element={<TransactionTable />} />
    </Routes>
  );
};

export default SellerRoutes;
