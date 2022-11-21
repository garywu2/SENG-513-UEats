import React from "react";
import "./Icon2.sass";

function Icon2(props) {
  const { src, className } = props;

  return (
    <div className={`icon-1 ${className || ""}`}>
      <img className="double-check" src={src} alt="Double Check" />
    </div>
  );
}

export default Icon2;
