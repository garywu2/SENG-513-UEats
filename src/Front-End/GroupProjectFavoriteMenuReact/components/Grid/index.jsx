import React from "react";
import "./Grid.sass";

function Grid(props) {
  const { src } = props;

  return (
    <div className="grid">
      <img className="grid-1" src={src} alt="Grid" />
    </div>
  );
}

export default Grid;
