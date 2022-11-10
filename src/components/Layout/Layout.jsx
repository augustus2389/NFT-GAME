import React from "react";
import { Outlet } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout() {
  useScrollToTop();
  return (
    <>
      <Header />
      <Outlet />
      <hr />
      <Footer />
    </>
  );
}

export default Layout;
