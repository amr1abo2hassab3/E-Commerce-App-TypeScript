import type { ReactNode } from "react";
import CookieServices from "../../Services/CookieServices";
import { Navigate } from "react-router-dom";

interface ProtectedAuthProps {
  children: ReactNode;
  path: string;
}

const ProtectedAuth = ({ children, path }: ProtectedAuthProps) => {
  const isAuthenticated = CookieServices.get("userData");
  if (isAuthenticated) return <Navigate to={path} />;
  return children;
};

export default ProtectedAuth;
