import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  if (isAuth) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoutes;
