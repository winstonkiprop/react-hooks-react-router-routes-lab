import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
  <NavLink exact to="/" activeStyle={{
    background: "orange",
  }}>
    Home
  </NavLink>
  <NavLink exact to="/movies" activeStyle={{
    background: "orange",
  }}>
    Movies
  </NavLink>
  <NavLink exact to="/directors" activeStyle={{
    background: "orange",
  }}>
    Directors
  </NavLink>
  <NavLink exact to="/actors" activeStyle={{
    background: "orange",
  }}>
    Actors
  </NavLink>
</div>;
}

export default NavBar;
