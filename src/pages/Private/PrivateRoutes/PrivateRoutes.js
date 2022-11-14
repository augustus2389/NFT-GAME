import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const { auths } = useSelector((state) => state.auth);
  console.log(auths);
  return auths.id ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoutes;
