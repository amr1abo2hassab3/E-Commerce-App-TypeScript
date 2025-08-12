import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages";
import ProductsPage from "../pages/Products";
import LoginPage from "../pages/Login";
import ErrorHandler from "../components/error/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ProtectedAuth from "../components/auth/ProtectedAuth";
import RegisterPage from "../pages/Register";
import ForgotPasswords from "../pages/ForgotPasswords";
import { CheckCode } from "../pages/CheckCode";
import { ResetPassword } from "../pages/ResetPassword ";
import ProductDetails from "../pages/ProductDetails";
import { CartPage } from "../pages/Cart";
import CreateOrder from "../pages/CreateOrder";
import WishListPage from "../pages/WishList";
import { UpdateAccountPage } from "../pages/UpdateAccount";
import { ChangeMyPasswordPage } from "../pages/ChangeMyPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute redirect="/login">
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedAuth redirect="/">
            <LoginPage />
          </ProtectedAuth>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedAuth redirect="/">
            <RegisterPage />
          </ProtectedAuth>
        ),
      },
      {
        path: "sendemail",
        element: (
          <ProtectedAuth redirect="/">
            <ForgotPasswords />
          </ProtectedAuth>
        ),
      },
      {
        path: "checkCode",
        element: (
          <ProtectedAuth redirect="/">
            <CheckCode />
          </ProtectedAuth>
        ),
      },
      {
        path: "resetPassword",
        element: (
          <ProtectedAuth redirect="/">
            <ResetPassword />
          </ProtectedAuth>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute redirect="/login">
            <ProductsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute redirect="/login">
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishList",
        element: (
          <ProtectedRoute redirect="/login">
            <WishListPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "createOrder",
        element: (
          <ProtectedRoute redirect="/login">
            <CreateOrder />
          </ProtectedRoute>
        ),
      },
      {
        path: "update_account",
        element: (
          <ProtectedRoute redirect="/login">
            <UpdateAccountPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "change_my_password",
        element: (
          <ProtectedRoute redirect="/login">
            <ChangeMyPasswordPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "productDetails/:id",
        element: (
          <ProtectedRoute redirect="/login">
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;
