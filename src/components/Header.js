import React from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../images/logos/headerLogo.png";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <h1>
        <img id="headerLogo" src={headerLogo} alt="Kasa" />
      </h1>
      <nav>
        <Link
          className={`link ${location.pathname === "/" ? "active" : ""}`}
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={`link ${location.pathname === "/about" ? "active" : ""}`}
          to="/about"
        >
          A propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
