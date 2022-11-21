import React from "react";
import "./User2.sass";

function User2(props) {
  const { spanText1 } = props;

  return (
    <div className="user-2">
      <div className="placeholder-1"></div>
      <div className="flex-col-5">
        <div className="name-1 poppins-medium-thunder-14px">
          <span className="poppins-medium-thunder-14px">{spanText1}</span>
        </div>
        <div className="user-since-2020 poppins-normal-amethyst-smoke-14px">
          <span className="poppins-normal-amethyst-smoke-14px">User since 2020</span>
        </div>
      </div>
    </div>
  );
}

export default User2;
