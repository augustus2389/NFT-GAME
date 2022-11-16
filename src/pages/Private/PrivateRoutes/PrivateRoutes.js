import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const { account } = useSelector((state) => state.auth);
  console.log(account);
  return account.id ? <Outlet /> : <Navigate to={"/signin"} />;
}

export default PrivateRoutes;
