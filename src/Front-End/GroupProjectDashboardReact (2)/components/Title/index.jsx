import React from "react";
import "./Title.sass";

function Title(props) {
  const { spanText1, className } = props;

  return (
    <div className={`title-1-1 ${className || ""}`}>
      <div className="category-1 poppins-bold-thunder-24px">
        <span className="span-2 poppins-bold-thunder-24px">{spanText1}</span>
      </div>
      <div className="view-all poppins-normal-selective-yellow-18px">
        <span className="span-2 poppins-normal-selective-yellow-18px">View all</span>
      </div>
      <img className="chevron-down-1" src="/img/chevron-down-1@2x.png" alt="chevron-down" />
    </div>
  );
}

export default Title;
