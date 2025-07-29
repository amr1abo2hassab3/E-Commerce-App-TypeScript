import type { ReactNode } from "react";
import CookieServices from "../../Services/CookieServices";
import { Navigate } from "react-router-dom";
import { cookiesUserDataKey } from "../../data";

interface ProtectedAuthProps {
  children: ReactNode;
  redirect: string;
}

const ProtectedAuth = ({ children, redirect }: ProtectedAuthProps) => {
  const isAuthenticated = CookieServices.get(cookiesUserDataKey);
  if (isAuthenticated) return <Navigate to={redirect} />;
  return children;
};

export default ProtectedAuth;
