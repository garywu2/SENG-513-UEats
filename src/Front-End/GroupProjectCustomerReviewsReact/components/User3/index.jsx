import React from "react";
import "./User3.sass";

function User3(props) {
  const { spanText1, className } = props;

  return (
    <div className={`user-4-1 ${className || ""}`}>
      <div className="placeholder-2"></div>
      <div className="flex-col-10">
        <div className="name-3 poppins-medium-thunder-18px">
          <span className="span-3 poppins-medium-thunder-18px">{spanText1}</span>
        </div>
        <div className="user-since-2020-1 poppins-normal-amethyst-smoke-14px">
          <span className="span-3 poppins-normal-amethyst-smoke-14px">User since 2020</span>
        </div>
      </div>
    </div>
  );
}

export default User3;
