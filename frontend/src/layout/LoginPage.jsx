import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/company_logo.png";
import style from "../styles/Login.module.css";

const LoginPage = () => {
  return (
    <div className={style.container}>
      <div className={style.contentWrapper}>
        <h1 className={style.title}>Just Blog</h1>
        <h6 className={style.tagline}>Stay up to date on your taste...!</h6>
        <img src={logo} alt="Company Logo" className={style.logo} />
      </div>
      <div className={style.outletWrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default LoginPage;
