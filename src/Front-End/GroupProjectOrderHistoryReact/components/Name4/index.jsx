import React from "react";
import "./Name4.sass";

function Name4(props) {
  const { spanText1, className } = props;

  return (
    <div className={`name-2-1 ${className || ""}`}>
      <div className="inv-0001234 poppins-semi-bold-thunder-18px">
        <span className="span-3 poppins-semi-bold-thunder-18px">{spanText1}</span>
      </div>
      <div className="x1x poppins-normal-amethyst-smoke-14px">
        <span className="span-3 poppins-normal-amethyst-smoke-14px">1x</span>
      </div>
    </div>
  );
}

export default Name4;
