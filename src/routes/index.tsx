import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/dashboard/Dashboard";
import OrdersPage from "../pages/dashboard/Order";
import ProductsPage from "../pages/dashboard/Product";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "../utils/ProtectedRoute";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about/AboutUs";
import AllProducts from "../pages/allProduct/AllProduct";
import ProductDetails from "../pages/Product Detail/productDetail";
import UserManagement from "../pages/dashboard/UserManagement";
import CheckoutPage from "../pages/checkout/CheckoutPage";

const AppRoutes = () => {
  return (
      <Routes>
        {/* Home page route*/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* All Product Route */}
        <Route path="/all-product" element={<AllProducts />} />

        {/* Product order Route*/}
        <Route path="/checkout/:id" element={<CheckoutPage />} />
        {/* Product Details Route*/}
        <Route path="/products/:id" element={<ProductDetails/>}/>
        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />

          {/* Admin-Only Routes */}
          <Route 
            path="orders" 
            element={
              <ProtectedRoute adminOnly={true}>
                <OrdersPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="products" 
            element={
              <ProtectedRoute adminOnly={true}>
                <ProductsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="users" 
            element={
              <ProtectedRoute adminOnly={true}>
                <UserManagement />
              </ProtectedRoute>
            } 
          />
        </Route>
      </Routes>
  );
};

export default AppRoutes;
