import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log(isLogin);
  return isLogin ? <Outlet /> : <Navigate to={"/signin"} />;
}

export default PrivateRoutes;
