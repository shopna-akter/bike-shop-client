import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/dashboard/Dashboard";
import OrdersPage from "../pages/dashboard/Order";
import ProductsPage from "../pages/dashboard/Product";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "../utils/ProtectedRoute";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about/AboutUs";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page routes*/}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

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
          <Route path="orders" element={<OrdersPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
