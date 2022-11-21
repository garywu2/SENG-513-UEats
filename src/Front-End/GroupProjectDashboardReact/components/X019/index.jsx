import React from "react";
import "./X019.sass";

function X019(props) {
  const { spanText1, spanText2, className } = props;

  return (
    <div className={`hint-item-1 ${className || ""}`}>
      <div className="flex-row-4">
        <div className="ellipse"></div>
        <div className="x-week poppins-normal-amethyst-smoke-14px">
          <span className="span-3 poppins-normal-amethyst-smoke-14px">{spanText1}</span>
        </div>
      </div>
      <div className="percent-4 poppins-bold-thunder-18px">
        <span className="span-3 poppins-bold-thunder-18px">{spanText2}</span>
      </div>
    </div>
  );
}

export default X019;
