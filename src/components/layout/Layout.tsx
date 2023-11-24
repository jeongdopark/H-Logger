import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
