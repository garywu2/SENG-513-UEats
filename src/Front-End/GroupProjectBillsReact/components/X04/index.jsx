import React from "react";
import "./X04.sass";

function X04(props) {
  const { spanText1, className } = props;

  return (
    <div className={`flex-col-4-item-1 ${className || ""}`}>
      <div className="place-1 poppins-normal-amethyst-smoke-14px">
        <span className="span-10 poppins-normal-amethyst-smoke-14px">{spanText1}</span>
      </div>
      <div className="date poppins-medium-thunder-18px">
        <span className="span-10 poppins-medium-thunder-18px">June 1, 2020</span>
      </div>
    </div>
  );
}

export default X04;
