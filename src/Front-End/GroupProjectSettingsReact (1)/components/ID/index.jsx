import React from "react";
import "./ID.sass";

function ID(props) {
  const { spanText1, spanText2, className } = props;

  return (
    <div className={`name ${className || ""}`}>
      <div className="restaurant poppins-normal-amethyst-smoke-18px">
        <span className="span-4 poppins-normal-amethyst-smoke-18px">{spanText1}</span>
      </div>
      <div className="overlap-group-9">
        <div className="fast-food-restaurant poppins-medium-thunder-18px">
          <span className="span-4 poppins-medium-thunder-18px">{spanText2}</span>
        </div>
      </div>
    </div>
  );
}

export default ID;
