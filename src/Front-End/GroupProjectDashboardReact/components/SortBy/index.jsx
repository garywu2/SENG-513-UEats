import React from "react";
import "./SortBy.sass";

function SortBy() {
  return (
    <div className="sort-by">
      <div className="this-month poppins-normal-thunder-14px">
        <span className="poppins-normal-thunder-14px">This Month</span>
      </div>
      <img className="chevron-down" src="/img/chevron-down-22@2x.png" alt="chevron-down" />
    </div>
  );
}

export default SortBy;
