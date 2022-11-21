import React from "react";
import "./Title2.sass";

function Title2(props) {
  const { spanText1, className } = props;

  return (
    <div className={`title-2-1 ${className || ""}`}>
      <div className="category-1 poppins-bold-thunder-24px">
        <span className="span-3 poppins-bold-thunder-24px">{spanText1}</span>
      </div>
      <div className="view-all-1 poppins-normal-selective-yellow-18px">
        <span className="span-3 poppins-normal-selective-yellow-18px">View all</span>
      </div>
      <img className="chevron-down-1" src="/img/chevron-down-15@2x.png" alt="chevron-down" />
    </div>
  );
}

export default Title2;
