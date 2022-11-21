import React from "react";
import "./Background.sass";

function Background(props) {
  const { src } = props;

  return (
    <div className="background-2">
      <div className="overlap-group-7">
        <img className="border" src={src} alt="border" />
      </div>
    </div>
  );
}

export default Background;
