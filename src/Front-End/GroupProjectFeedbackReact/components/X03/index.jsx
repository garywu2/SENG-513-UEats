import React from "react";
import "./X03.sass";

function X03(props) {
  const { className } = props;

  return (
    <div className={`x03 ${className || ""}`}>
      <div className="bar-4"></div>
      <div className="bar-5"></div>
    </div>
  );
}

export default X03;
