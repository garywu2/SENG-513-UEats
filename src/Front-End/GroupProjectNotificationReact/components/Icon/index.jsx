import React from "react";
import "./Icon.sass";

function Icon(props) {
  const { src, className } = props;

  return (
    <div className={`icon-4 ${className || ""}`}>
      <img className="bill-1" src={src} alt="Bill" />
    </div>
  );
}

export default Icon;
