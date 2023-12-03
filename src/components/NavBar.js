import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    justifyContent: "center",
    margin: "50px 10px 10px",
    background: "lightskyblue",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    borderRadius: "25px",
  };

  return (
    <div>
      <NavLink
        to="/"
        style={linkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/Tony"
        style={linkStyles}
      >
        Tony
      </NavLink >
      <NavLink
        to="/ProjectCard"
        style={linkStyles}
      >
        Projects
      </NavLink >
      <NavLink
        to="/User"
        style={linkStyles}
      >
        User
      </NavLink >
    </div>
  )
}

export default NavBar