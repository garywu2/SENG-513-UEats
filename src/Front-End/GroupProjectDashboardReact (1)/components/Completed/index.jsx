import React from "react";
import "./Completed.sass";

function Completed(props) {
  const { spanText1, spanText2, className } = props;

  return (
    <div className={`performance-1-item-1 ${className || ""}`}>
      <div className="order poppins-normal-amethyst-smoke-14px">
        <span className="span-3 poppins-normal-amethyst-smoke-14px">{spanText1}</span>
      </div>
      <div className="address poppins-bold-thunder-24px">
        <span className="span-3 poppins-bold-thunder-24px">{spanText2}</span>
      </div>
      <img className="vector-1" src="/img/vector-11@2x.png" alt="Vector" />
    </div>
  );
}

export default Completed;
