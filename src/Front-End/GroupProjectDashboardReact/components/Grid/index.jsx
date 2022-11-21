import React from "react";
import "./Grid.sass";

function Grid(props) {
  const { src, className } = props;

  return (
    <div className={`grid ${className || ""}`}>
      <img className="income" src={src} alt="Income" />
    </div>
  );
}

export default Grid;
