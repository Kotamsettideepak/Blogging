import React from "react";
// import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayOut = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Outlet />
    </div>
  );
};

export default RootLayOut;
