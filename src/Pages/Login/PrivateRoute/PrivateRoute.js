import React from "react";
import { Spinner } from "react-bootstrap";
import { Route, Navigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  return (
    <Route
      {...rest}
      element={user.email ? children : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
