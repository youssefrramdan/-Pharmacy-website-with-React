import React from "react";
import { Outlet } from "react-router-dom";
import MyNav from "./MyNav";
import MyFooter from "./Footer";

const SharedLayout = () => {
  return (
    <>
      <MyNav />
      <main>
        <Outlet />
      </main>
      <MyFooter />
    </>
  );
};

export default SharedLayout;
