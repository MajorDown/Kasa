import React, { useState } from "react";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleClick}>
        {props.name}
        <span className={`arrow-icon ${isOpen ? "open" : ""}`}></span>
      </div>
      {isOpen && <div className="accordion-body">{props.children}</div>}
    </div>
  );
};

export default Accordion;
