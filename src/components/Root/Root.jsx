// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default Root;
