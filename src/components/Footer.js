import React from "react";
import logo from "../images/logos/footerLogo.png";

const Footer = () => {
  return (
    <footer>
      <div id="footerLogo">
        <img src={logo} alt="Kasa" />
      </div>
      <div id="copyRight">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;
