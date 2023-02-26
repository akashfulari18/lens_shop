import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminProducts from "../Pages/Admin/AdminProducts";
import AdminSetting from "../Pages/Admin/AdminSetting";
import Dashboard from "../Pages/Admin/Dashboard";
import Users from "../Pages/Admin/Users";
import PageNotFound from "./PageNotFound";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";

import AddProduct from "../Pages/Admin/AddProduct";
import AdminAddProduct from "../Pages/Admin/AdminAddProduct";

import Loginpage from "../Pages/Signup-Login/Loginpage";

import { SignupCard } from "../Pages/Signup-Login/Signuppage";

import CompGlasses from "../Pages/Products/CompGlasses";
import KidsGlasses from "../Pages/Products/KidsGlasses";
import CompSingleProduct from "../Pages/Products/CompSingleProduct";
import KidsSingleProduct from "../Pages/Products/KidsSingleProduct";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../Pages/Signup-Login/PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignupCard />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>

        <Route
          path="/all_computer_glasses"
          element={
            <PrivateRoute>
              <CompGlasses />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/all_computer_glasses/:id"
          element={
            <PrivateRoute>
              <CompSingleProduct />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/all_kids_glasses"
          element={
            <PrivateRoute>
              <KidsGlasses />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/all_kids_glasses/:id"
          element={
            <PrivateRoute>
              <KidsSingleProduct />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/admin_dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/admin_users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/admin_product"
          element={
            <PrivateRoute>
              <AdminProducts />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/admin_settings"
          element={
            <PrivateRoute>
              <AdminSetting />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/addProduct"
          element={
            <PrivateRoute>
              <AdminAddProduct />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
