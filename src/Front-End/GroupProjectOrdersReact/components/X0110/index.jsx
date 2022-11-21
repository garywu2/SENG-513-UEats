import React from "react";
import User from "../User";
import User2 from "../User2";
import Total3 from "../Total3";
import Restaurant2 from "../Restaurant2";
import Address3 from "../Address3";
import Status from "../Status";
import "./X0110.sass";

function X0110(props) {
  const { className, userProps, user2Props } = props;

  return (
    <div className={`x01-2 ${className || ""}`}>
      <User spanText1={userProps.spanText1} className={userProps.className} />
      <User2 spanText1={user2Props.spanText1} className={user2Props.className} />
      <Total3 />
      <Restaurant2 />
      <Address3 />
      <Status />
      <img className="dropdown-1" src="/img/dropdown-12@2x.png" alt="dropdown" />
    </div>
  );
}

export default X0110;
