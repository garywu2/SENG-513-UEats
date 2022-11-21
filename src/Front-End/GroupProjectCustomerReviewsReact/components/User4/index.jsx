import React from "react";
import "./User4.sass";

function User4(props) {
  const { spanText1 } = props;

  return (
    <div className="user-5">
      <div className="placeholder-3"></div>
      <div className="flex-col-11">
        <div className="name-4 poppins-medium-thunder-18px">
          <span className="poppins-medium-thunder-18px">{spanText1}</span>
        </div>
        <div className="user-since-2020-2 poppins-normal-amethyst-smoke-14px">
          <span className="poppins-normal-amethyst-smoke-14px">User since 2020</span>
        </div>
      </div>
    </div>
  );
}

export default User4;
