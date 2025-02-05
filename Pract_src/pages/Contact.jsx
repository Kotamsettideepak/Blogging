import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <NavLink to="social-media">
        <button>Social Media</button>
      </NavLink>
      <NavLink to="complaint-form">
        <button>Complaint Form</button>
      </NavLink>
    </div>
  );
};

export default Contact;
