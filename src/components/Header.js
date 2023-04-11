import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../images/logos/headerLogo.png";

const Header = () => {
  return (
    <header>
      <h1>
        <img id="headerLogo" src={headerLogo} alt="Kasa" />
      </h1>
      <nav>
        <Link className="link" to="/">
          Accueil
        </Link>
        <Link className="link" to="/about">
          A propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
