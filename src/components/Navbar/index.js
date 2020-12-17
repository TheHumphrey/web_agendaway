import React from "react";

import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarApp = () => {
  return (
    <Navbar
      bg="light"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Link className="mr-5" to="/home">
        Home
      </Link>
      <Link to="/add">Adicionar</Link>
    </Navbar>
  );
};

export default NavbarApp;
