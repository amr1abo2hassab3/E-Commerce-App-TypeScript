import type { ReactNode } from "react";
import CookieServices from "../../Services/CookieServices";
import { Navigate } from "react-router-dom";

interface ProtectedAuthProps {
  children: ReactNode;
  path: string;
}

const ProtectedRoute = ({ children, path }: ProtectedAuthProps) => {
  const isAuthenticated = CookieServices.get("userData");

  if (!isAuthenticated) return <Navigate to={path} replace />;
  return children;
};


export default ProtectedRoute;
