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
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;
