import type { ReactNode } from "react";
import CookieServices from "../../Services/CookieServices";
import { Navigate } from "react-router-dom";

interface ProtectedAuthProps {
  children: ReactNode;
  redirect: string;
}

const ProtectedRoute = ({ children, redirect }: ProtectedAuthProps) => {
  const isAuthenticated = CookieServices.get("userData");

  if (!isAuthenticated) return <Navigate to={redirect} replace />;
  return children;
};

export default ProtectedRoute;
