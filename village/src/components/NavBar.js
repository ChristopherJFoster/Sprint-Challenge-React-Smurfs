import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink
        exact
        to="/"
        className="nav-link"
        activeClassName="active-nav-link"
      >
        <div> Smurf Village </div>
      </NavLink>
      <NavLink
        to="/smurf-form"
        className="nav-link"
        activeClassName="active-nav-link"
      >
        <div> Add a New Smurf</div>
      </NavLink>
    </div>
  );
};
