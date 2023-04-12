import React, { useState } from "react";
import vUp from "../images/icons/v-up.png";
import vDown from "../images/icons/v-down.png";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion">
      <div className="accordionHeader" onClick={handleClick}>
        <p>{props.name}</p>
        <img
          src={isOpen ? vUp : vDown}
          className={`arrowIcon ${isOpen ? "open" : ""}`}
        ></img>
      </div>
      <div className={`accordionContent ${isOpen ? "open" : ""}`}>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Accordion;
