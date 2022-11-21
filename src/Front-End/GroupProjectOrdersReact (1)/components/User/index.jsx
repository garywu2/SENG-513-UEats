import React from "react";
import "./User.sass";

function User(props) {
  const { spanText1, className } = props;

  return (
    <div className={`user-1 ${className || ""}`}>
      <div className="order poppins-medium-thunder-18px">
        <span className="span-3 poppins-medium-thunder-18px">{spanText1}</span>
      </div>
      <p className="name poppins-normal-amethyst-smoke-14px">
        <span className="span-3 poppins-normal-amethyst-smoke-14px">June 1, 2020, 08:22 AM</span>
      </p>
    </div>
  );
}

export default User;
