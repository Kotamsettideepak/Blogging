import { useState } from "react";
import style from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
