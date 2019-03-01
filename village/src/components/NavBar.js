import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Smurf Village</NavLink>
      <NavLink to="/smurf-form">Add a New Smurf</NavLink>
    </div>
  );
};
