import type { ReactNode } from "react";
import CookieServices from "../../Services/CookieServices";
import { Navigate } from "react-router-dom";

interface ProtectedAuthProps {
  children: ReactNode;
  redirect: string;
}

const ProtectedAuth = ({ children, redirect }: ProtectedAuthProps) => {
  const isAuthenticated = CookieServices.get("userData");
  if (isAuthenticated) return <Navigate to={redirect} />;
  return children;
};

export default ProtectedAuth;
