import React from "react";
import "./Icon3.sass";

function Icon3(props) {
  const { src } = props;

  return (
    <div className="icon-1">
      <img className="performance-1" src={src} alt="Performance" />
    </div>
  );
}

export default Icon3;
