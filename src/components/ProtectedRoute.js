import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../src/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
