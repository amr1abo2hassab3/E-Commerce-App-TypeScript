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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute path="/login">
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedAuth path="/">
            <LoginPage />
          </ProtectedAuth>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedAuth path="/">
            <RegisterPage />
          </ProtectedAuth>
        ),
      },
      {
        path: "sendemail",
        element: (
          <ProtectedAuth path="/">
            <ForgotPasswords />
          </ProtectedAuth>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute path="/login">
            <ProductsPage />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;
