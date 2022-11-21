import React from "react";
import "./User.sass";

function User(props) {
  const { spanText1, className } = props;

  return (
    <div className={`order-number-1-1 ${className || ""}`}>
      <div className="order poppins-medium-thunder-18px">
        <span className="span-12 poppins-medium-thunder-18px">{spanText1}</span>
      </div>
      <p className="name-3 poppins-normal-amethyst-smoke-14px">
        <span className="span-12 poppins-normal-amethyst-smoke-14px">June 1, 2020, 08:22 AM</span>
      </p>
    </div>
  );
}

export default User;
